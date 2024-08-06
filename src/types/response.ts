export interface Pagination {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  }
  
  // 기본 응답
  export interface CoreRes {
    ok: 0 | 1;
  }
  
  // 성공 기본 응답
  export interface CoreSuccessRes extends CoreRes {
    ok: 1;
  }
  
  // item 한개 응답
  export interface SingleItem<T> extends CoreSuccessRes {
    item: T;
  }
  
  // item 여러개 응답
  export interface MultiItem<T> extends CoreSuccessRes {
    item: T[];
    pagination: Pagination;
  }
  
  // 실패 기본 응답
  export interface CoreErrorRes extends CoreRes {
    ok: 0;
    message: string;
  }
  
  // 인증 실패 응답
  export interface AuthErrorRes extends CoreErrorRes {
    errorName: "EmptyAuthorization | TokenExpiredError | JsonWebTokenError";
  }
  
  // 데이터 검증 실패 메세지(E: 검증에 사용될 속성값 목록)
  export interface ValidationError<E> {
    type: string;
    value: string;
    msg: string;
    path: keyof E;
    location: string;
  }
  /**
   * 예시
   * {
    "ok": 0,
    "message": "잘못된 입력값이 있습니다.",
    "errors": [
      {
        "type": "field",
        "value": "swaggermarket.com",
        "msg": "이메일 형식에 맞지 않습니다.",
        "path": "email",
        "location": "body"
      }
    ]
  }
   */
  
  // 데이터 검증 실패 응답
  export interface ValidationErrorRes<E> extends CoreErrorRes {
    errors: ValidationError<E>[];
  }
  
  // 데이터 검증 로직이 있는 요청의 응답
  // E : ValidationError의 path로 사용됨
  export type ApiResWithValidation<T, E> =
    | T
    | CoreErrorRes
    | AuthErrorRes
    | ValidationErrorRes<E>;
  
  // 데이터 검증 로직이 없는 요청의 응답
  export type ApiRes<T> = T | CoreErrorRes | AuthErrorRes;
  