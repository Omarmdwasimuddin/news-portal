
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model news_list
 * 
 */
export type news_list = $Result.DefaultSelection<Prisma.$news_listPayload>
/**
 * Model Categories
 * 
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>
/**
 * Model Socials
 * 
 */
export type Socials = $Result.DefaultSelection<Prisma.$SocialsPayload>
/**
 * Model Subscribers
 * 
 */
export type Subscribers = $Result.DefaultSelection<Prisma.$SubscribersPayload>
/**
 * Model Policies
 * 
 */
export type Policies = $Result.DefaultSelection<Prisma.$PoliciesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.news_list`: Exposes CRUD operations for the **news_list** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more News_lists
    * const news_lists = await prisma.news_list.findMany()
    * ```
    */
  get news_list(): Prisma.news_listDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socials`: Exposes CRUD operations for the **Socials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Socials
    * const socials = await prisma.socials.findMany()
    * ```
    */
  get socials(): Prisma.SocialsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscribers`: Exposes CRUD operations for the **Subscribers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscribers
    * const subscribers = await prisma.subscribers.findMany()
    * ```
    */
  get subscribers(): Prisma.SubscribersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.policies`: Exposes CRUD operations for the **Policies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Policies
    * const policies = await prisma.policies.findMany()
    * ```
    */
  get policies(): Prisma.PoliciesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Comment: 'Comment',
    news_list: 'news_list',
    Categories: 'Categories',
    Socials: 'Socials',
    Subscribers: 'Subscribers',
    Policies: 'Policies'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "comment" | "news_list" | "categories" | "socials" | "subscribers" | "policies"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      news_list: {
        payload: Prisma.$news_listPayload<ExtArgs>
        fields: Prisma.news_listFieldRefs
        operations: {
          findUnique: {
            args: Prisma.news_listFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_listPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.news_listFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_listPayload>
          }
          findFirst: {
            args: Prisma.news_listFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_listPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.news_listFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_listPayload>
          }
          findMany: {
            args: Prisma.news_listFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_listPayload>[]
          }
          create: {
            args: Prisma.news_listCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_listPayload>
          }
          createMany: {
            args: Prisma.news_listCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.news_listDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_listPayload>
          }
          update: {
            args: Prisma.news_listUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_listPayload>
          }
          deleteMany: {
            args: Prisma.news_listDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.news_listUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.news_listUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_listPayload>
          }
          aggregate: {
            args: Prisma.News_listAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNews_list>
          }
          groupBy: {
            args: Prisma.news_listGroupByArgs<ExtArgs>
            result: $Utils.Optional<News_listGroupByOutputType>[]
          }
          count: {
            args: Prisma.news_listCountArgs<ExtArgs>
            result: $Utils.Optional<News_listCountAggregateOutputType> | number
          }
        }
      }
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>
        fields: Prisma.CategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      Socials: {
        payload: Prisma.$SocialsPayload<ExtArgs>
        fields: Prisma.SocialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialsPayload>
          }
          findFirst: {
            args: Prisma.SocialsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialsPayload>
          }
          findMany: {
            args: Prisma.SocialsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialsPayload>[]
          }
          create: {
            args: Prisma.SocialsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialsPayload>
          }
          createMany: {
            args: Prisma.SocialsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SocialsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialsPayload>
          }
          update: {
            args: Prisma.SocialsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialsPayload>
          }
          deleteMany: {
            args: Prisma.SocialsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SocialsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialsPayload>
          }
          aggregate: {
            args: Prisma.SocialsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocials>
          }
          groupBy: {
            args: Prisma.SocialsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialsCountArgs<ExtArgs>
            result: $Utils.Optional<SocialsCountAggregateOutputType> | number
          }
        }
      }
      Subscribers: {
        payload: Prisma.$SubscribersPayload<ExtArgs>
        fields: Prisma.SubscribersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscribersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscribersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribersPayload>
          }
          findFirst: {
            args: Prisma.SubscribersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscribersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribersPayload>
          }
          findMany: {
            args: Prisma.SubscribersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribersPayload>[]
          }
          create: {
            args: Prisma.SubscribersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribersPayload>
          }
          createMany: {
            args: Prisma.SubscribersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubscribersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribersPayload>
          }
          update: {
            args: Prisma.SubscribersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribersPayload>
          }
          deleteMany: {
            args: Prisma.SubscribersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscribersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscribersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribersPayload>
          }
          aggregate: {
            args: Prisma.SubscribersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscribers>
          }
          groupBy: {
            args: Prisma.SubscribersGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscribersGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscribersCountArgs<ExtArgs>
            result: $Utils.Optional<SubscribersCountAggregateOutputType> | number
          }
        }
      }
      Policies: {
        payload: Prisma.$PoliciesPayload<ExtArgs>
        fields: Prisma.PoliciesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PoliciesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliciesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PoliciesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliciesPayload>
          }
          findFirst: {
            args: Prisma.PoliciesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliciesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PoliciesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliciesPayload>
          }
          findMany: {
            args: Prisma.PoliciesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliciesPayload>[]
          }
          create: {
            args: Prisma.PoliciesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliciesPayload>
          }
          createMany: {
            args: Prisma.PoliciesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PoliciesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliciesPayload>
          }
          update: {
            args: Prisma.PoliciesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliciesPayload>
          }
          deleteMany: {
            args: Prisma.PoliciesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PoliciesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PoliciesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliciesPayload>
          }
          aggregate: {
            args: Prisma.PoliciesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePolicies>
          }
          groupBy: {
            args: Prisma.PoliciesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PoliciesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PoliciesCountArgs<ExtArgs>
            result: $Utils.Optional<PoliciesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    comment?: CommentOmit
    news_list?: news_listOmit
    categories?: CategoriesOmit
    socials?: SocialsOmit
    subscribers?: SubscribersOmit
    policies?: PoliciesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    comment: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment?: boolean | UserCountOutputTypeCountCommentArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type News_listCountOutputType
   */

  export type News_listCountOutputType = {
    comments: number
  }

  export type News_listCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | News_listCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * News_listCountOutputType without action
   */
  export type News_listCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News_listCountOutputType
     */
    select?: News_listCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * News_listCountOutputType without action
   */
  export type News_listCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    news_list: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news_list?: boolean | CategoriesCountOutputTypeCountNews_listArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountNews_listArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: news_listWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    mobile: string | null
    password: string | null
    otp: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    mobile: string | null
    password: string | null
    otp: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    mobile: number
    password: number
    otp: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    mobile?: true
    password?: true
    otp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    mobile?: true
    password?: true
    otp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    mobile?: true
    password?: true
    otp?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    mobile: string
    password: string
    otp: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    mobile?: boolean
    password?: boolean
    otp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    comment?: boolean | User$commentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    mobile?: boolean
    password?: boolean
    otp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "mobile" | "password" | "otp" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment?: boolean | User$commentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      comment: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      mobile: string
      password: string
      otp: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comment<T extends User$commentArgs<ExtArgs> = {}>(args?: Subset<T, User$commentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly mobile: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly otp: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.comment
   */
  export type User$commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
    description: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
    description: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    userId: number
    postId: number
    description: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    description?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    description?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    description?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    userId: number
    postId: number
    description: string
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    description?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    news_list?: boolean | news_listDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>



  export type CommentSelectScalar = {
    id?: boolean
    userId?: boolean
    postId?: boolean
    description?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "postId" | "description", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    news_list?: boolean | news_listDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      news_list: Prisma.$news_listPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      postId: number
      description: string
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    news_list<T extends news_listDefaultArgs<ExtArgs> = {}>(args?: Subset<T, news_listDefaultArgs<ExtArgs>>): Prisma__news_listClient<$Result.GetResult<Prisma.$news_listPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly userId: FieldRef<"Comment", 'Int'>
    readonly postId: FieldRef<"Comment", 'Int'>
    readonly description: FieldRef<"Comment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model news_list
   */

  export type AggregateNews_list = {
    _count: News_listCountAggregateOutputType | null
    _avg: News_listAvgAggregateOutputType | null
    _sum: News_listSumAggregateOutputType | null
    _min: News_listMinAggregateOutputType | null
    _max: News_listMaxAggregateOutputType | null
  }

  export type News_listAvgAggregateOutputType = {
    id: number | null
    catId: number | null
  }

  export type News_listSumAggregateOutputType = {
    id: number | null
    catId: number | null
  }

  export type News_listMinAggregateOutputType = {
    id: number | null
    title: string | null
    short_des: string | null
    img1: string | null
    img2: string | null
    img3: string | null
    img4: string | null
    keywords: string | null
    long_des: string | null
    type: string | null
    catId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type News_listMaxAggregateOutputType = {
    id: number | null
    title: string | null
    short_des: string | null
    img1: string | null
    img2: string | null
    img3: string | null
    img4: string | null
    keywords: string | null
    long_des: string | null
    type: string | null
    catId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type News_listCountAggregateOutputType = {
    id: number
    title: number
    short_des: number
    img1: number
    img2: number
    img3: number
    img4: number
    keywords: number
    long_des: number
    type: number
    catId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type News_listAvgAggregateInputType = {
    id?: true
    catId?: true
  }

  export type News_listSumAggregateInputType = {
    id?: true
    catId?: true
  }

  export type News_listMinAggregateInputType = {
    id?: true
    title?: true
    short_des?: true
    img1?: true
    img2?: true
    img3?: true
    img4?: true
    keywords?: true
    long_des?: true
    type?: true
    catId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type News_listMaxAggregateInputType = {
    id?: true
    title?: true
    short_des?: true
    img1?: true
    img2?: true
    img3?: true
    img4?: true
    keywords?: true
    long_des?: true
    type?: true
    catId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type News_listCountAggregateInputType = {
    id?: true
    title?: true
    short_des?: true
    img1?: true
    img2?: true
    img3?: true
    img4?: true
    keywords?: true
    long_des?: true
    type?: true
    catId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type News_listAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which news_list to aggregate.
     */
    where?: news_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of news_lists to fetch.
     */
    orderBy?: news_listOrderByWithRelationInput | news_listOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: news_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` news_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` news_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned news_lists
    **/
    _count?: true | News_listCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: News_listAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: News_listSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: News_listMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: News_listMaxAggregateInputType
  }

  export type GetNews_listAggregateType<T extends News_listAggregateArgs> = {
        [P in keyof T & keyof AggregateNews_list]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNews_list[P]>
      : GetScalarType<T[P], AggregateNews_list[P]>
  }




  export type news_listGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: news_listWhereInput
    orderBy?: news_listOrderByWithAggregationInput | news_listOrderByWithAggregationInput[]
    by: News_listScalarFieldEnum[] | News_listScalarFieldEnum
    having?: news_listScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: News_listCountAggregateInputType | true
    _avg?: News_listAvgAggregateInputType
    _sum?: News_listSumAggregateInputType
    _min?: News_listMinAggregateInputType
    _max?: News_listMaxAggregateInputType
  }

  export type News_listGroupByOutputType = {
    id: number
    title: string
    short_des: string
    img1: string
    img2: string
    img3: string
    img4: string
    keywords: string
    long_des: string
    type: string
    catId: number
    createdAt: Date
    updatedAt: Date
    _count: News_listCountAggregateOutputType | null
    _avg: News_listAvgAggregateOutputType | null
    _sum: News_listSumAggregateOutputType | null
    _min: News_listMinAggregateOutputType | null
    _max: News_listMaxAggregateOutputType | null
  }

  type GetNews_listGroupByPayload<T extends news_listGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<News_listGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof News_listGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], News_listGroupByOutputType[P]>
            : GetScalarType<T[P], News_listGroupByOutputType[P]>
        }
      >
    >


  export type news_listSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    short_des?: boolean
    img1?: boolean
    img2?: boolean
    img3?: boolean
    img4?: boolean
    keywords?: boolean
    long_des?: boolean
    type?: boolean
    catId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categories?: boolean | CategoriesDefaultArgs<ExtArgs>
    comments?: boolean | news_list$commentsArgs<ExtArgs>
    _count?: boolean | News_listCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news_list"]>



  export type news_listSelectScalar = {
    id?: boolean
    title?: boolean
    short_des?: boolean
    img1?: boolean
    img2?: boolean
    img3?: boolean
    img4?: boolean
    keywords?: boolean
    long_des?: boolean
    type?: boolean
    catId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type news_listOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "short_des" | "img1" | "img2" | "img3" | "img4" | "keywords" | "long_des" | "type" | "catId" | "createdAt" | "updatedAt", ExtArgs["result"]["news_list"]>
  export type news_listInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | CategoriesDefaultArgs<ExtArgs>
    comments?: boolean | news_list$commentsArgs<ExtArgs>
    _count?: boolean | News_listCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $news_listPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "news_list"
    objects: {
      categories: Prisma.$CategoriesPayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      short_des: string
      img1: string
      img2: string
      img3: string
      img4: string
      keywords: string
      long_des: string
      type: string
      catId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["news_list"]>
    composites: {}
  }

  type news_listGetPayload<S extends boolean | null | undefined | news_listDefaultArgs> = $Result.GetResult<Prisma.$news_listPayload, S>

  type news_listCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<news_listFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: News_listCountAggregateInputType | true
    }

  export interface news_listDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['news_list'], meta: { name: 'news_list' } }
    /**
     * Find zero or one News_list that matches the filter.
     * @param {news_listFindUniqueArgs} args - Arguments to find a News_list
     * @example
     * // Get one News_list
     * const news_list = await prisma.news_list.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends news_listFindUniqueArgs>(args: SelectSubset<T, news_listFindUniqueArgs<ExtArgs>>): Prisma__news_listClient<$Result.GetResult<Prisma.$news_listPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one News_list that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {news_listFindUniqueOrThrowArgs} args - Arguments to find a News_list
     * @example
     * // Get one News_list
     * const news_list = await prisma.news_list.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends news_listFindUniqueOrThrowArgs>(args: SelectSubset<T, news_listFindUniqueOrThrowArgs<ExtArgs>>): Prisma__news_listClient<$Result.GetResult<Prisma.$news_listPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News_list that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {news_listFindFirstArgs} args - Arguments to find a News_list
     * @example
     * // Get one News_list
     * const news_list = await prisma.news_list.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends news_listFindFirstArgs>(args?: SelectSubset<T, news_listFindFirstArgs<ExtArgs>>): Prisma__news_listClient<$Result.GetResult<Prisma.$news_listPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News_list that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {news_listFindFirstOrThrowArgs} args - Arguments to find a News_list
     * @example
     * // Get one News_list
     * const news_list = await prisma.news_list.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends news_listFindFirstOrThrowArgs>(args?: SelectSubset<T, news_listFindFirstOrThrowArgs<ExtArgs>>): Prisma__news_listClient<$Result.GetResult<Prisma.$news_listPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more News_lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {news_listFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all News_lists
     * const news_lists = await prisma.news_list.findMany()
     * 
     * // Get first 10 News_lists
     * const news_lists = await prisma.news_list.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const news_listWithIdOnly = await prisma.news_list.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends news_listFindManyArgs>(args?: SelectSubset<T, news_listFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$news_listPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a News_list.
     * @param {news_listCreateArgs} args - Arguments to create a News_list.
     * @example
     * // Create one News_list
     * const News_list = await prisma.news_list.create({
     *   data: {
     *     // ... data to create a News_list
     *   }
     * })
     * 
     */
    create<T extends news_listCreateArgs>(args: SelectSubset<T, news_listCreateArgs<ExtArgs>>): Prisma__news_listClient<$Result.GetResult<Prisma.$news_listPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many News_lists.
     * @param {news_listCreateManyArgs} args - Arguments to create many News_lists.
     * @example
     * // Create many News_lists
     * const news_list = await prisma.news_list.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends news_listCreateManyArgs>(args?: SelectSubset<T, news_listCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a News_list.
     * @param {news_listDeleteArgs} args - Arguments to delete one News_list.
     * @example
     * // Delete one News_list
     * const News_list = await prisma.news_list.delete({
     *   where: {
     *     // ... filter to delete one News_list
     *   }
     * })
     * 
     */
    delete<T extends news_listDeleteArgs>(args: SelectSubset<T, news_listDeleteArgs<ExtArgs>>): Prisma__news_listClient<$Result.GetResult<Prisma.$news_listPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one News_list.
     * @param {news_listUpdateArgs} args - Arguments to update one News_list.
     * @example
     * // Update one News_list
     * const news_list = await prisma.news_list.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends news_listUpdateArgs>(args: SelectSubset<T, news_listUpdateArgs<ExtArgs>>): Prisma__news_listClient<$Result.GetResult<Prisma.$news_listPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more News_lists.
     * @param {news_listDeleteManyArgs} args - Arguments to filter News_lists to delete.
     * @example
     * // Delete a few News_lists
     * const { count } = await prisma.news_list.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends news_listDeleteManyArgs>(args?: SelectSubset<T, news_listDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News_lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {news_listUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many News_lists
     * const news_list = await prisma.news_list.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends news_listUpdateManyArgs>(args: SelectSubset<T, news_listUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one News_list.
     * @param {news_listUpsertArgs} args - Arguments to update or create a News_list.
     * @example
     * // Update or create a News_list
     * const news_list = await prisma.news_list.upsert({
     *   create: {
     *     // ... data to create a News_list
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the News_list we want to update
     *   }
     * })
     */
    upsert<T extends news_listUpsertArgs>(args: SelectSubset<T, news_listUpsertArgs<ExtArgs>>): Prisma__news_listClient<$Result.GetResult<Prisma.$news_listPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of News_lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {news_listCountArgs} args - Arguments to filter News_lists to count.
     * @example
     * // Count the number of News_lists
     * const count = await prisma.news_list.count({
     *   where: {
     *     // ... the filter for the News_lists we want to count
     *   }
     * })
    **/
    count<T extends news_listCountArgs>(
      args?: Subset<T, news_listCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], News_listCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a News_list.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {News_listAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends News_listAggregateArgs>(args: Subset<T, News_listAggregateArgs>): Prisma.PrismaPromise<GetNews_listAggregateType<T>>

    /**
     * Group by News_list.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {news_listGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends news_listGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: news_listGroupByArgs['orderBy'] }
        : { orderBy?: news_listGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, news_listGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNews_listGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the news_list model
   */
  readonly fields: news_listFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for news_list.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__news_listClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends CategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesDefaultArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends news_list$commentsArgs<ExtArgs> = {}>(args?: Subset<T, news_list$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the news_list model
   */
  interface news_listFieldRefs {
    readonly id: FieldRef<"news_list", 'Int'>
    readonly title: FieldRef<"news_list", 'String'>
    readonly short_des: FieldRef<"news_list", 'String'>
    readonly img1: FieldRef<"news_list", 'String'>
    readonly img2: FieldRef<"news_list", 'String'>
    readonly img3: FieldRef<"news_list", 'String'>
    readonly img4: FieldRef<"news_list", 'String'>
    readonly keywords: FieldRef<"news_list", 'String'>
    readonly long_des: FieldRef<"news_list", 'String'>
    readonly type: FieldRef<"news_list", 'String'>
    readonly catId: FieldRef<"news_list", 'Int'>
    readonly createdAt: FieldRef<"news_list", 'DateTime'>
    readonly updatedAt: FieldRef<"news_list", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * news_list findUnique
   */
  export type news_listFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_list
     */
    select?: news_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_list
     */
    omit?: news_listOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: news_listInclude<ExtArgs> | null
    /**
     * Filter, which news_list to fetch.
     */
    where: news_listWhereUniqueInput
  }

  /**
   * news_list findUniqueOrThrow
   */
  export type news_listFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_list
     */
    select?: news_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_list
     */
    omit?: news_listOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: news_listInclude<ExtArgs> | null
    /**
     * Filter, which news_list to fetch.
     */
    where: news_listWhereUniqueInput
  }

  /**
   * news_list findFirst
   */
  export type news_listFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_list
     */
    select?: news_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_list
     */
    omit?: news_listOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: news_listInclude<ExtArgs> | null
    /**
     * Filter, which news_list to fetch.
     */
    where?: news_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of news_lists to fetch.
     */
    orderBy?: news_listOrderByWithRelationInput | news_listOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for news_lists.
     */
    cursor?: news_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` news_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` news_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of news_lists.
     */
    distinct?: News_listScalarFieldEnum | News_listScalarFieldEnum[]
  }

  /**
   * news_list findFirstOrThrow
   */
  export type news_listFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_list
     */
    select?: news_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_list
     */
    omit?: news_listOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: news_listInclude<ExtArgs> | null
    /**
     * Filter, which news_list to fetch.
     */
    where?: news_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of news_lists to fetch.
     */
    orderBy?: news_listOrderByWithRelationInput | news_listOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for news_lists.
     */
    cursor?: news_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` news_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` news_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of news_lists.
     */
    distinct?: News_listScalarFieldEnum | News_listScalarFieldEnum[]
  }

  /**
   * news_list findMany
   */
  export type news_listFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_list
     */
    select?: news_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_list
     */
    omit?: news_listOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: news_listInclude<ExtArgs> | null
    /**
     * Filter, which news_lists to fetch.
     */
    where?: news_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of news_lists to fetch.
     */
    orderBy?: news_listOrderByWithRelationInput | news_listOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing news_lists.
     */
    cursor?: news_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` news_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` news_lists.
     */
    skip?: number
    distinct?: News_listScalarFieldEnum | News_listScalarFieldEnum[]
  }

  /**
   * news_list create
   */
  export type news_listCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_list
     */
    select?: news_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_list
     */
    omit?: news_listOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: news_listInclude<ExtArgs> | null
    /**
     * The data needed to create a news_list.
     */
    data: XOR<news_listCreateInput, news_listUncheckedCreateInput>
  }

  /**
   * news_list createMany
   */
  export type news_listCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many news_lists.
     */
    data: news_listCreateManyInput | news_listCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * news_list update
   */
  export type news_listUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_list
     */
    select?: news_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_list
     */
    omit?: news_listOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: news_listInclude<ExtArgs> | null
    /**
     * The data needed to update a news_list.
     */
    data: XOR<news_listUpdateInput, news_listUncheckedUpdateInput>
    /**
     * Choose, which news_list to update.
     */
    where: news_listWhereUniqueInput
  }

  /**
   * news_list updateMany
   */
  export type news_listUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update news_lists.
     */
    data: XOR<news_listUpdateManyMutationInput, news_listUncheckedUpdateManyInput>
    /**
     * Filter which news_lists to update
     */
    where?: news_listWhereInput
    /**
     * Limit how many news_lists to update.
     */
    limit?: number
  }

  /**
   * news_list upsert
   */
  export type news_listUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_list
     */
    select?: news_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_list
     */
    omit?: news_listOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: news_listInclude<ExtArgs> | null
    /**
     * The filter to search for the news_list to update in case it exists.
     */
    where: news_listWhereUniqueInput
    /**
     * In case the news_list found by the `where` argument doesn't exist, create a new news_list with this data.
     */
    create: XOR<news_listCreateInput, news_listUncheckedCreateInput>
    /**
     * In case the news_list was found with the provided `where` argument, update it with this data.
     */
    update: XOR<news_listUpdateInput, news_listUncheckedUpdateInput>
  }

  /**
   * news_list delete
   */
  export type news_listDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_list
     */
    select?: news_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_list
     */
    omit?: news_listOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: news_listInclude<ExtArgs> | null
    /**
     * Filter which news_list to delete.
     */
    where: news_listWhereUniqueInput
  }

  /**
   * news_list deleteMany
   */
  export type news_listDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which news_lists to delete
     */
    where?: news_listWhereInput
    /**
     * Limit how many news_lists to delete.
     */
    limit?: number
  }

  /**
   * news_list.comments
   */
  export type news_list$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * news_list without action
   */
  export type news_listDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_list
     */
    select?: news_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_list
     */
    omit?: news_listOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: news_listInclude<ExtArgs> | null
  }


  /**
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithAggregationInput | CategoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: CategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    news_list?: boolean | Categories$news_listArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>



  export type CategoriesSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["categories"]>
  export type CategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news_list?: boolean | Categories$news_listArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {
      news_list: Prisma.$news_listPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type CategoriesGetPayload<S extends boolean | null | undefined | CategoriesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPayload, S>

  type CategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface CategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categories'], meta: { name: 'Categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesFindUniqueArgs>(args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesFindFirstArgs>(args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriesFindManyArgs>(args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends CategoriesCreateArgs>(args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesCreateManyArgs>(args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends CategoriesDeleteArgs>(args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesUpdateArgs>(args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesDeleteManyArgs>(args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesUpdateManyArgs>(args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesUpsertArgs>(args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categories model
   */
  readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news_list<T extends Categories$news_listArgs<ExtArgs> = {}>(args?: Subset<T, Categories$news_listArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$news_listPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categories model
   */
  interface CategoriesFieldRefs {
    readonly id: FieldRef<"Categories", 'Int'>
    readonly name: FieldRef<"Categories", 'String'>
    readonly createdAt: FieldRef<"Categories", 'DateTime'>
    readonly updatedAt: FieldRef<"Categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories create
   */
  export type CategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Categories.
     */
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }

  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }

  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categories.news_list
   */
  export type Categories$news_listArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_list
     */
    select?: news_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_list
     */
    omit?: news_listOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: news_listInclude<ExtArgs> | null
    where?: news_listWhereInput
    orderBy?: news_listOrderByWithRelationInput | news_listOrderByWithRelationInput[]
    cursor?: news_listWhereUniqueInput
    take?: number
    skip?: number
    distinct?: News_listScalarFieldEnum | News_listScalarFieldEnum[]
  }

  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
  }


  /**
   * Model Socials
   */

  export type AggregateSocials = {
    _count: SocialsCountAggregateOutputType | null
    _avg: SocialsAvgAggregateOutputType | null
    _sum: SocialsSumAggregateOutputType | null
    _min: SocialsMinAggregateOutputType | null
    _max: SocialsMaxAggregateOutputType | null
  }

  export type SocialsAvgAggregateOutputType = {
    id: number | null
  }

  export type SocialsSumAggregateOutputType = {
    id: number | null
  }

  export type SocialsMinAggregateOutputType = {
    id: number | null
    facebook: string | null
    youtube: string | null
    twitter: string | null
    linkedin: string | null
    about: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SocialsMaxAggregateOutputType = {
    id: number | null
    facebook: string | null
    youtube: string | null
    twitter: string | null
    linkedin: string | null
    about: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SocialsCountAggregateOutputType = {
    id: number
    facebook: number
    youtube: number
    twitter: number
    linkedin: number
    about: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SocialsAvgAggregateInputType = {
    id?: true
  }

  export type SocialsSumAggregateInputType = {
    id?: true
  }

  export type SocialsMinAggregateInputType = {
    id?: true
    facebook?: true
    youtube?: true
    twitter?: true
    linkedin?: true
    about?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SocialsMaxAggregateInputType = {
    id?: true
    facebook?: true
    youtube?: true
    twitter?: true
    linkedin?: true
    about?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SocialsCountAggregateInputType = {
    id?: true
    facebook?: true
    youtube?: true
    twitter?: true
    linkedin?: true
    about?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SocialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Socials to aggregate.
     */
    where?: SocialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     */
    orderBy?: SocialsOrderByWithRelationInput | SocialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Socials
    **/
    _count?: true | SocialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SocialsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SocialsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialsMaxAggregateInputType
  }

  export type GetSocialsAggregateType<T extends SocialsAggregateArgs> = {
        [P in keyof T & keyof AggregateSocials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocials[P]>
      : GetScalarType<T[P], AggregateSocials[P]>
  }




  export type SocialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialsWhereInput
    orderBy?: SocialsOrderByWithAggregationInput | SocialsOrderByWithAggregationInput[]
    by: SocialsScalarFieldEnum[] | SocialsScalarFieldEnum
    having?: SocialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialsCountAggregateInputType | true
    _avg?: SocialsAvgAggregateInputType
    _sum?: SocialsSumAggregateInputType
    _min?: SocialsMinAggregateInputType
    _max?: SocialsMaxAggregateInputType
  }

  export type SocialsGroupByOutputType = {
    id: number
    facebook: string
    youtube: string
    twitter: string
    linkedin: string
    about: string
    address: string
    createdAt: Date
    updatedAt: Date
    _count: SocialsCountAggregateOutputType | null
    _avg: SocialsAvgAggregateOutputType | null
    _sum: SocialsSumAggregateOutputType | null
    _min: SocialsMinAggregateOutputType | null
    _max: SocialsMaxAggregateOutputType | null
  }

  type GetSocialsGroupByPayload<T extends SocialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialsGroupByOutputType[P]>
            : GetScalarType<T[P], SocialsGroupByOutputType[P]>
        }
      >
    >


  export type SocialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facebook?: boolean
    youtube?: boolean
    twitter?: boolean
    linkedin?: boolean
    about?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["socials"]>



  export type SocialsSelectScalar = {
    id?: boolean
    facebook?: boolean
    youtube?: boolean
    twitter?: boolean
    linkedin?: boolean
    about?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SocialsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "facebook" | "youtube" | "twitter" | "linkedin" | "about" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["socials"]>

  export type $SocialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Socials"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      facebook: string
      youtube: string
      twitter: string
      linkedin: string
      about: string
      address: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["socials"]>
    composites: {}
  }

  type SocialsGetPayload<S extends boolean | null | undefined | SocialsDefaultArgs> = $Result.GetResult<Prisma.$SocialsPayload, S>

  type SocialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialsCountAggregateInputType | true
    }

  export interface SocialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Socials'], meta: { name: 'Socials' } }
    /**
     * Find zero or one Socials that matches the filter.
     * @param {SocialsFindUniqueArgs} args - Arguments to find a Socials
     * @example
     * // Get one Socials
     * const socials = await prisma.socials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialsFindUniqueArgs>(args: SelectSubset<T, SocialsFindUniqueArgs<ExtArgs>>): Prisma__SocialsClient<$Result.GetResult<Prisma.$SocialsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Socials that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialsFindUniqueOrThrowArgs} args - Arguments to find a Socials
     * @example
     * // Get one Socials
     * const socials = await prisma.socials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialsFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialsClient<$Result.GetResult<Prisma.$SocialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Socials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialsFindFirstArgs} args - Arguments to find a Socials
     * @example
     * // Get one Socials
     * const socials = await prisma.socials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialsFindFirstArgs>(args?: SelectSubset<T, SocialsFindFirstArgs<ExtArgs>>): Prisma__SocialsClient<$Result.GetResult<Prisma.$SocialsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Socials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialsFindFirstOrThrowArgs} args - Arguments to find a Socials
     * @example
     * // Get one Socials
     * const socials = await prisma.socials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialsFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialsClient<$Result.GetResult<Prisma.$SocialsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Socials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Socials
     * const socials = await prisma.socials.findMany()
     * 
     * // Get first 10 Socials
     * const socials = await prisma.socials.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialsWithIdOnly = await prisma.socials.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialsFindManyArgs>(args?: SelectSubset<T, SocialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Socials.
     * @param {SocialsCreateArgs} args - Arguments to create a Socials.
     * @example
     * // Create one Socials
     * const Socials = await prisma.socials.create({
     *   data: {
     *     // ... data to create a Socials
     *   }
     * })
     * 
     */
    create<T extends SocialsCreateArgs>(args: SelectSubset<T, SocialsCreateArgs<ExtArgs>>): Prisma__SocialsClient<$Result.GetResult<Prisma.$SocialsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Socials.
     * @param {SocialsCreateManyArgs} args - Arguments to create many Socials.
     * @example
     * // Create many Socials
     * const socials = await prisma.socials.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialsCreateManyArgs>(args?: SelectSubset<T, SocialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Socials.
     * @param {SocialsDeleteArgs} args - Arguments to delete one Socials.
     * @example
     * // Delete one Socials
     * const Socials = await prisma.socials.delete({
     *   where: {
     *     // ... filter to delete one Socials
     *   }
     * })
     * 
     */
    delete<T extends SocialsDeleteArgs>(args: SelectSubset<T, SocialsDeleteArgs<ExtArgs>>): Prisma__SocialsClient<$Result.GetResult<Prisma.$SocialsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Socials.
     * @param {SocialsUpdateArgs} args - Arguments to update one Socials.
     * @example
     * // Update one Socials
     * const socials = await prisma.socials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialsUpdateArgs>(args: SelectSubset<T, SocialsUpdateArgs<ExtArgs>>): Prisma__SocialsClient<$Result.GetResult<Prisma.$SocialsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Socials.
     * @param {SocialsDeleteManyArgs} args - Arguments to filter Socials to delete.
     * @example
     * // Delete a few Socials
     * const { count } = await prisma.socials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialsDeleteManyArgs>(args?: SelectSubset<T, SocialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Socials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Socials
     * const socials = await prisma.socials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialsUpdateManyArgs>(args: SelectSubset<T, SocialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Socials.
     * @param {SocialsUpsertArgs} args - Arguments to update or create a Socials.
     * @example
     * // Update or create a Socials
     * const socials = await prisma.socials.upsert({
     *   create: {
     *     // ... data to create a Socials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Socials we want to update
     *   }
     * })
     */
    upsert<T extends SocialsUpsertArgs>(args: SelectSubset<T, SocialsUpsertArgs<ExtArgs>>): Prisma__SocialsClient<$Result.GetResult<Prisma.$SocialsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Socials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialsCountArgs} args - Arguments to filter Socials to count.
     * @example
     * // Count the number of Socials
     * const count = await prisma.socials.count({
     *   where: {
     *     // ... the filter for the Socials we want to count
     *   }
     * })
    **/
    count<T extends SocialsCountArgs>(
      args?: Subset<T, SocialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Socials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SocialsAggregateArgs>(args: Subset<T, SocialsAggregateArgs>): Prisma.PrismaPromise<GetSocialsAggregateType<T>>

    /**
     * Group by Socials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SocialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialsGroupByArgs['orderBy'] }
        : { orderBy?: SocialsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SocialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Socials model
   */
  readonly fields: SocialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Socials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Socials model
   */
  interface SocialsFieldRefs {
    readonly id: FieldRef<"Socials", 'Int'>
    readonly facebook: FieldRef<"Socials", 'String'>
    readonly youtube: FieldRef<"Socials", 'String'>
    readonly twitter: FieldRef<"Socials", 'String'>
    readonly linkedin: FieldRef<"Socials", 'String'>
    readonly about: FieldRef<"Socials", 'String'>
    readonly address: FieldRef<"Socials", 'String'>
    readonly createdAt: FieldRef<"Socials", 'DateTime'>
    readonly updatedAt: FieldRef<"Socials", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Socials findUnique
   */
  export type SocialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socials
     */
    omit?: SocialsOmit<ExtArgs> | null
    /**
     * Filter, which Socials to fetch.
     */
    where: SocialsWhereUniqueInput
  }

  /**
   * Socials findUniqueOrThrow
   */
  export type SocialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socials
     */
    omit?: SocialsOmit<ExtArgs> | null
    /**
     * Filter, which Socials to fetch.
     */
    where: SocialsWhereUniqueInput
  }

  /**
   * Socials findFirst
   */
  export type SocialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socials
     */
    omit?: SocialsOmit<ExtArgs> | null
    /**
     * Filter, which Socials to fetch.
     */
    where?: SocialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     */
    orderBy?: SocialsOrderByWithRelationInput | SocialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Socials.
     */
    cursor?: SocialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Socials.
     */
    distinct?: SocialsScalarFieldEnum | SocialsScalarFieldEnum[]
  }

  /**
   * Socials findFirstOrThrow
   */
  export type SocialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socials
     */
    omit?: SocialsOmit<ExtArgs> | null
    /**
     * Filter, which Socials to fetch.
     */
    where?: SocialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     */
    orderBy?: SocialsOrderByWithRelationInput | SocialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Socials.
     */
    cursor?: SocialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Socials.
     */
    distinct?: SocialsScalarFieldEnum | SocialsScalarFieldEnum[]
  }

  /**
   * Socials findMany
   */
  export type SocialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socials
     */
    omit?: SocialsOmit<ExtArgs> | null
    /**
     * Filter, which Socials to fetch.
     */
    where?: SocialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     */
    orderBy?: SocialsOrderByWithRelationInput | SocialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Socials.
     */
    cursor?: SocialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     */
    skip?: number
    distinct?: SocialsScalarFieldEnum | SocialsScalarFieldEnum[]
  }

  /**
   * Socials create
   */
  export type SocialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socials
     */
    omit?: SocialsOmit<ExtArgs> | null
    /**
     * The data needed to create a Socials.
     */
    data: XOR<SocialsCreateInput, SocialsUncheckedCreateInput>
  }

  /**
   * Socials createMany
   */
  export type SocialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Socials.
     */
    data: SocialsCreateManyInput | SocialsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Socials update
   */
  export type SocialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socials
     */
    omit?: SocialsOmit<ExtArgs> | null
    /**
     * The data needed to update a Socials.
     */
    data: XOR<SocialsUpdateInput, SocialsUncheckedUpdateInput>
    /**
     * Choose, which Socials to update.
     */
    where: SocialsWhereUniqueInput
  }

  /**
   * Socials updateMany
   */
  export type SocialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Socials.
     */
    data: XOR<SocialsUpdateManyMutationInput, SocialsUncheckedUpdateManyInput>
    /**
     * Filter which Socials to update
     */
    where?: SocialsWhereInput
    /**
     * Limit how many Socials to update.
     */
    limit?: number
  }

  /**
   * Socials upsert
   */
  export type SocialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socials
     */
    omit?: SocialsOmit<ExtArgs> | null
    /**
     * The filter to search for the Socials to update in case it exists.
     */
    where: SocialsWhereUniqueInput
    /**
     * In case the Socials found by the `where` argument doesn't exist, create a new Socials with this data.
     */
    create: XOR<SocialsCreateInput, SocialsUncheckedCreateInput>
    /**
     * In case the Socials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialsUpdateInput, SocialsUncheckedUpdateInput>
  }

  /**
   * Socials delete
   */
  export type SocialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socials
     */
    omit?: SocialsOmit<ExtArgs> | null
    /**
     * Filter which Socials to delete.
     */
    where: SocialsWhereUniqueInput
  }

  /**
   * Socials deleteMany
   */
  export type SocialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Socials to delete
     */
    where?: SocialsWhereInput
    /**
     * Limit how many Socials to delete.
     */
    limit?: number
  }

  /**
   * Socials without action
   */
  export type SocialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socials
     */
    omit?: SocialsOmit<ExtArgs> | null
  }


  /**
   * Model Subscribers
   */

  export type AggregateSubscribers = {
    _count: SubscribersCountAggregateOutputType | null
    _avg: SubscribersAvgAggregateOutputType | null
    _sum: SubscribersSumAggregateOutputType | null
    _min: SubscribersMinAggregateOutputType | null
    _max: SubscribersMaxAggregateOutputType | null
  }

  export type SubscribersAvgAggregateOutputType = {
    id: number | null
  }

  export type SubscribersSumAggregateOutputType = {
    id: number | null
  }

  export type SubscribersMinAggregateOutputType = {
    id: number | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscribersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscribersCountAggregateOutputType = {
    id: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscribersAvgAggregateInputType = {
    id?: true
  }

  export type SubscribersSumAggregateInputType = {
    id?: true
  }

  export type SubscribersMinAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscribersMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscribersCountAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscribersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscribers to aggregate.
     */
    where?: SubscribersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscribers to fetch.
     */
    orderBy?: SubscribersOrderByWithRelationInput | SubscribersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscribersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscribers
    **/
    _count?: true | SubscribersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscribersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscribersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscribersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscribersMaxAggregateInputType
  }

  export type GetSubscribersAggregateType<T extends SubscribersAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscribers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscribers[P]>
      : GetScalarType<T[P], AggregateSubscribers[P]>
  }




  export type SubscribersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscribersWhereInput
    orderBy?: SubscribersOrderByWithAggregationInput | SubscribersOrderByWithAggregationInput[]
    by: SubscribersScalarFieldEnum[] | SubscribersScalarFieldEnum
    having?: SubscribersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscribersCountAggregateInputType | true
    _avg?: SubscribersAvgAggregateInputType
    _sum?: SubscribersSumAggregateInputType
    _min?: SubscribersMinAggregateInputType
    _max?: SubscribersMaxAggregateInputType
  }

  export type SubscribersGroupByOutputType = {
    id: number
    email: string
    createdAt: Date
    updatedAt: Date
    _count: SubscribersCountAggregateOutputType | null
    _avg: SubscribersAvgAggregateOutputType | null
    _sum: SubscribersSumAggregateOutputType | null
    _min: SubscribersMinAggregateOutputType | null
    _max: SubscribersMaxAggregateOutputType | null
  }

  type GetSubscribersGroupByPayload<T extends SubscribersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscribersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscribersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscribersGroupByOutputType[P]>
            : GetScalarType<T[P], SubscribersGroupByOutputType[P]>
        }
      >
    >


  export type SubscribersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subscribers"]>



  export type SubscribersSelectScalar = {
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscribersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["subscribers"]>

  export type $SubscribersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscribers"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscribers"]>
    composites: {}
  }

  type SubscribersGetPayload<S extends boolean | null | undefined | SubscribersDefaultArgs> = $Result.GetResult<Prisma.$SubscribersPayload, S>

  type SubscribersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscribersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscribersCountAggregateInputType | true
    }

  export interface SubscribersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscribers'], meta: { name: 'Subscribers' } }
    /**
     * Find zero or one Subscribers that matches the filter.
     * @param {SubscribersFindUniqueArgs} args - Arguments to find a Subscribers
     * @example
     * // Get one Subscribers
     * const subscribers = await prisma.subscribers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscribersFindUniqueArgs>(args: SelectSubset<T, SubscribersFindUniqueArgs<ExtArgs>>): Prisma__SubscribersClient<$Result.GetResult<Prisma.$SubscribersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscribers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscribersFindUniqueOrThrowArgs} args - Arguments to find a Subscribers
     * @example
     * // Get one Subscribers
     * const subscribers = await prisma.subscribers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscribersFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscribersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscribersClient<$Result.GetResult<Prisma.$SubscribersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscribers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscribersFindFirstArgs} args - Arguments to find a Subscribers
     * @example
     * // Get one Subscribers
     * const subscribers = await prisma.subscribers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscribersFindFirstArgs>(args?: SelectSubset<T, SubscribersFindFirstArgs<ExtArgs>>): Prisma__SubscribersClient<$Result.GetResult<Prisma.$SubscribersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscribers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscribersFindFirstOrThrowArgs} args - Arguments to find a Subscribers
     * @example
     * // Get one Subscribers
     * const subscribers = await prisma.subscribers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscribersFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscribersFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscribersClient<$Result.GetResult<Prisma.$SubscribersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscribers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscribersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscribers
     * const subscribers = await prisma.subscribers.findMany()
     * 
     * // Get first 10 Subscribers
     * const subscribers = await prisma.subscribers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscribersWithIdOnly = await prisma.subscribers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscribersFindManyArgs>(args?: SelectSubset<T, SubscribersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscribersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscribers.
     * @param {SubscribersCreateArgs} args - Arguments to create a Subscribers.
     * @example
     * // Create one Subscribers
     * const Subscribers = await prisma.subscribers.create({
     *   data: {
     *     // ... data to create a Subscribers
     *   }
     * })
     * 
     */
    create<T extends SubscribersCreateArgs>(args: SelectSubset<T, SubscribersCreateArgs<ExtArgs>>): Prisma__SubscribersClient<$Result.GetResult<Prisma.$SubscribersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscribers.
     * @param {SubscribersCreateManyArgs} args - Arguments to create many Subscribers.
     * @example
     * // Create many Subscribers
     * const subscribers = await prisma.subscribers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscribersCreateManyArgs>(args?: SelectSubset<T, SubscribersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subscribers.
     * @param {SubscribersDeleteArgs} args - Arguments to delete one Subscribers.
     * @example
     * // Delete one Subscribers
     * const Subscribers = await prisma.subscribers.delete({
     *   where: {
     *     // ... filter to delete one Subscribers
     *   }
     * })
     * 
     */
    delete<T extends SubscribersDeleteArgs>(args: SelectSubset<T, SubscribersDeleteArgs<ExtArgs>>): Prisma__SubscribersClient<$Result.GetResult<Prisma.$SubscribersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscribers.
     * @param {SubscribersUpdateArgs} args - Arguments to update one Subscribers.
     * @example
     * // Update one Subscribers
     * const subscribers = await prisma.subscribers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscribersUpdateArgs>(args: SelectSubset<T, SubscribersUpdateArgs<ExtArgs>>): Prisma__SubscribersClient<$Result.GetResult<Prisma.$SubscribersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscribers.
     * @param {SubscribersDeleteManyArgs} args - Arguments to filter Subscribers to delete.
     * @example
     * // Delete a few Subscribers
     * const { count } = await prisma.subscribers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscribersDeleteManyArgs>(args?: SelectSubset<T, SubscribersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscribersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscribers
     * const subscribers = await prisma.subscribers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscribersUpdateManyArgs>(args: SelectSubset<T, SubscribersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subscribers.
     * @param {SubscribersUpsertArgs} args - Arguments to update or create a Subscribers.
     * @example
     * // Update or create a Subscribers
     * const subscribers = await prisma.subscribers.upsert({
     *   create: {
     *     // ... data to create a Subscribers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscribers we want to update
     *   }
     * })
     */
    upsert<T extends SubscribersUpsertArgs>(args: SelectSubset<T, SubscribersUpsertArgs<ExtArgs>>): Prisma__SubscribersClient<$Result.GetResult<Prisma.$SubscribersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscribersCountArgs} args - Arguments to filter Subscribers to count.
     * @example
     * // Count the number of Subscribers
     * const count = await prisma.subscribers.count({
     *   where: {
     *     // ... the filter for the Subscribers we want to count
     *   }
     * })
    **/
    count<T extends SubscribersCountArgs>(
      args?: Subset<T, SubscribersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscribersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscribersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscribersAggregateArgs>(args: Subset<T, SubscribersAggregateArgs>): Prisma.PrismaPromise<GetSubscribersAggregateType<T>>

    /**
     * Group by Subscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscribersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscribersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscribersGroupByArgs['orderBy'] }
        : { orderBy?: SubscribersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscribersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscribersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscribers model
   */
  readonly fields: SubscribersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscribers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscribersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscribers model
   */
  interface SubscribersFieldRefs {
    readonly id: FieldRef<"Subscribers", 'Int'>
    readonly email: FieldRef<"Subscribers", 'String'>
    readonly createdAt: FieldRef<"Subscribers", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscribers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscribers findUnique
   */
  export type SubscribersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribers
     */
    select?: SubscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribers
     */
    omit?: SubscribersOmit<ExtArgs> | null
    /**
     * Filter, which Subscribers to fetch.
     */
    where: SubscribersWhereUniqueInput
  }

  /**
   * Subscribers findUniqueOrThrow
   */
  export type SubscribersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribers
     */
    select?: SubscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribers
     */
    omit?: SubscribersOmit<ExtArgs> | null
    /**
     * Filter, which Subscribers to fetch.
     */
    where: SubscribersWhereUniqueInput
  }

  /**
   * Subscribers findFirst
   */
  export type SubscribersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribers
     */
    select?: SubscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribers
     */
    omit?: SubscribersOmit<ExtArgs> | null
    /**
     * Filter, which Subscribers to fetch.
     */
    where?: SubscribersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscribers to fetch.
     */
    orderBy?: SubscribersOrderByWithRelationInput | SubscribersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscribers.
     */
    cursor?: SubscribersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscribers.
     */
    distinct?: SubscribersScalarFieldEnum | SubscribersScalarFieldEnum[]
  }

  /**
   * Subscribers findFirstOrThrow
   */
  export type SubscribersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribers
     */
    select?: SubscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribers
     */
    omit?: SubscribersOmit<ExtArgs> | null
    /**
     * Filter, which Subscribers to fetch.
     */
    where?: SubscribersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscribers to fetch.
     */
    orderBy?: SubscribersOrderByWithRelationInput | SubscribersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscribers.
     */
    cursor?: SubscribersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscribers.
     */
    distinct?: SubscribersScalarFieldEnum | SubscribersScalarFieldEnum[]
  }

  /**
   * Subscribers findMany
   */
  export type SubscribersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribers
     */
    select?: SubscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribers
     */
    omit?: SubscribersOmit<ExtArgs> | null
    /**
     * Filter, which Subscribers to fetch.
     */
    where?: SubscribersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscribers to fetch.
     */
    orderBy?: SubscribersOrderByWithRelationInput | SubscribersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscribers.
     */
    cursor?: SubscribersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscribers.
     */
    skip?: number
    distinct?: SubscribersScalarFieldEnum | SubscribersScalarFieldEnum[]
  }

  /**
   * Subscribers create
   */
  export type SubscribersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribers
     */
    select?: SubscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribers
     */
    omit?: SubscribersOmit<ExtArgs> | null
    /**
     * The data needed to create a Subscribers.
     */
    data: XOR<SubscribersCreateInput, SubscribersUncheckedCreateInput>
  }

  /**
   * Subscribers createMany
   */
  export type SubscribersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscribers.
     */
    data: SubscribersCreateManyInput | SubscribersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscribers update
   */
  export type SubscribersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribers
     */
    select?: SubscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribers
     */
    omit?: SubscribersOmit<ExtArgs> | null
    /**
     * The data needed to update a Subscribers.
     */
    data: XOR<SubscribersUpdateInput, SubscribersUncheckedUpdateInput>
    /**
     * Choose, which Subscribers to update.
     */
    where: SubscribersWhereUniqueInput
  }

  /**
   * Subscribers updateMany
   */
  export type SubscribersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscribers.
     */
    data: XOR<SubscribersUpdateManyMutationInput, SubscribersUncheckedUpdateManyInput>
    /**
     * Filter which Subscribers to update
     */
    where?: SubscribersWhereInput
    /**
     * Limit how many Subscribers to update.
     */
    limit?: number
  }

  /**
   * Subscribers upsert
   */
  export type SubscribersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribers
     */
    select?: SubscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribers
     */
    omit?: SubscribersOmit<ExtArgs> | null
    /**
     * The filter to search for the Subscribers to update in case it exists.
     */
    where: SubscribersWhereUniqueInput
    /**
     * In case the Subscribers found by the `where` argument doesn't exist, create a new Subscribers with this data.
     */
    create: XOR<SubscribersCreateInput, SubscribersUncheckedCreateInput>
    /**
     * In case the Subscribers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscribersUpdateInput, SubscribersUncheckedUpdateInput>
  }

  /**
   * Subscribers delete
   */
  export type SubscribersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribers
     */
    select?: SubscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribers
     */
    omit?: SubscribersOmit<ExtArgs> | null
    /**
     * Filter which Subscribers to delete.
     */
    where: SubscribersWhereUniqueInput
  }

  /**
   * Subscribers deleteMany
   */
  export type SubscribersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscribers to delete
     */
    where?: SubscribersWhereInput
    /**
     * Limit how many Subscribers to delete.
     */
    limit?: number
  }

  /**
   * Subscribers without action
   */
  export type SubscribersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribers
     */
    select?: SubscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribers
     */
    omit?: SubscribersOmit<ExtArgs> | null
  }


  /**
   * Model Policies
   */

  export type AggregatePolicies = {
    _count: PoliciesCountAggregateOutputType | null
    _avg: PoliciesAvgAggregateOutputType | null
    _sum: PoliciesSumAggregateOutputType | null
    _min: PoliciesMinAggregateOutputType | null
    _max: PoliciesMaxAggregateOutputType | null
  }

  export type PoliciesAvgAggregateOutputType = {
    id: number | null
  }

  export type PoliciesSumAggregateOutputType = {
    id: number | null
  }

  export type PoliciesMinAggregateOutputType = {
    id: number | null
    long_des: string | null
    type: string | null
  }

  export type PoliciesMaxAggregateOutputType = {
    id: number | null
    long_des: string | null
    type: string | null
  }

  export type PoliciesCountAggregateOutputType = {
    id: number
    long_des: number
    type: number
    _all: number
  }


  export type PoliciesAvgAggregateInputType = {
    id?: true
  }

  export type PoliciesSumAggregateInputType = {
    id?: true
  }

  export type PoliciesMinAggregateInputType = {
    id?: true
    long_des?: true
    type?: true
  }

  export type PoliciesMaxAggregateInputType = {
    id?: true
    long_des?: true
    type?: true
  }

  export type PoliciesCountAggregateInputType = {
    id?: true
    long_des?: true
    type?: true
    _all?: true
  }

  export type PoliciesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Policies to aggregate.
     */
    where?: PoliciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PoliciesOrderByWithRelationInput | PoliciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PoliciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Policies
    **/
    _count?: true | PoliciesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PoliciesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PoliciesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PoliciesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PoliciesMaxAggregateInputType
  }

  export type GetPoliciesAggregateType<T extends PoliciesAggregateArgs> = {
        [P in keyof T & keyof AggregatePolicies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePolicies[P]>
      : GetScalarType<T[P], AggregatePolicies[P]>
  }




  export type PoliciesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoliciesWhereInput
    orderBy?: PoliciesOrderByWithAggregationInput | PoliciesOrderByWithAggregationInput[]
    by: PoliciesScalarFieldEnum[] | PoliciesScalarFieldEnum
    having?: PoliciesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PoliciesCountAggregateInputType | true
    _avg?: PoliciesAvgAggregateInputType
    _sum?: PoliciesSumAggregateInputType
    _min?: PoliciesMinAggregateInputType
    _max?: PoliciesMaxAggregateInputType
  }

  export type PoliciesGroupByOutputType = {
    id: number
    long_des: string
    type: string
    _count: PoliciesCountAggregateOutputType | null
    _avg: PoliciesAvgAggregateOutputType | null
    _sum: PoliciesSumAggregateOutputType | null
    _min: PoliciesMinAggregateOutputType | null
    _max: PoliciesMaxAggregateOutputType | null
  }

  type GetPoliciesGroupByPayload<T extends PoliciesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PoliciesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PoliciesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PoliciesGroupByOutputType[P]>
            : GetScalarType<T[P], PoliciesGroupByOutputType[P]>
        }
      >
    >


  export type PoliciesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    long_des?: boolean
    type?: boolean
  }, ExtArgs["result"]["policies"]>



  export type PoliciesSelectScalar = {
    id?: boolean
    long_des?: boolean
    type?: boolean
  }

  export type PoliciesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "long_des" | "type", ExtArgs["result"]["policies"]>

  export type $PoliciesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Policies"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      long_des: string
      type: string
    }, ExtArgs["result"]["policies"]>
    composites: {}
  }

  type PoliciesGetPayload<S extends boolean | null | undefined | PoliciesDefaultArgs> = $Result.GetResult<Prisma.$PoliciesPayload, S>

  type PoliciesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PoliciesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PoliciesCountAggregateInputType | true
    }

  export interface PoliciesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Policies'], meta: { name: 'Policies' } }
    /**
     * Find zero or one Policies that matches the filter.
     * @param {PoliciesFindUniqueArgs} args - Arguments to find a Policies
     * @example
     * // Get one Policies
     * const policies = await prisma.policies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PoliciesFindUniqueArgs>(args: SelectSubset<T, PoliciesFindUniqueArgs<ExtArgs>>): Prisma__PoliciesClient<$Result.GetResult<Prisma.$PoliciesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Policies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PoliciesFindUniqueOrThrowArgs} args - Arguments to find a Policies
     * @example
     * // Get one Policies
     * const policies = await prisma.policies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PoliciesFindUniqueOrThrowArgs>(args: SelectSubset<T, PoliciesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PoliciesClient<$Result.GetResult<Prisma.$PoliciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Policies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoliciesFindFirstArgs} args - Arguments to find a Policies
     * @example
     * // Get one Policies
     * const policies = await prisma.policies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PoliciesFindFirstArgs>(args?: SelectSubset<T, PoliciesFindFirstArgs<ExtArgs>>): Prisma__PoliciesClient<$Result.GetResult<Prisma.$PoliciesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Policies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoliciesFindFirstOrThrowArgs} args - Arguments to find a Policies
     * @example
     * // Get one Policies
     * const policies = await prisma.policies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PoliciesFindFirstOrThrowArgs>(args?: SelectSubset<T, PoliciesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PoliciesClient<$Result.GetResult<Prisma.$PoliciesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Policies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoliciesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Policies
     * const policies = await prisma.policies.findMany()
     * 
     * // Get first 10 Policies
     * const policies = await prisma.policies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const policiesWithIdOnly = await prisma.policies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PoliciesFindManyArgs>(args?: SelectSubset<T, PoliciesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoliciesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Policies.
     * @param {PoliciesCreateArgs} args - Arguments to create a Policies.
     * @example
     * // Create one Policies
     * const Policies = await prisma.policies.create({
     *   data: {
     *     // ... data to create a Policies
     *   }
     * })
     * 
     */
    create<T extends PoliciesCreateArgs>(args: SelectSubset<T, PoliciesCreateArgs<ExtArgs>>): Prisma__PoliciesClient<$Result.GetResult<Prisma.$PoliciesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Policies.
     * @param {PoliciesCreateManyArgs} args - Arguments to create many Policies.
     * @example
     * // Create many Policies
     * const policies = await prisma.policies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PoliciesCreateManyArgs>(args?: SelectSubset<T, PoliciesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Policies.
     * @param {PoliciesDeleteArgs} args - Arguments to delete one Policies.
     * @example
     * // Delete one Policies
     * const Policies = await prisma.policies.delete({
     *   where: {
     *     // ... filter to delete one Policies
     *   }
     * })
     * 
     */
    delete<T extends PoliciesDeleteArgs>(args: SelectSubset<T, PoliciesDeleteArgs<ExtArgs>>): Prisma__PoliciesClient<$Result.GetResult<Prisma.$PoliciesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Policies.
     * @param {PoliciesUpdateArgs} args - Arguments to update one Policies.
     * @example
     * // Update one Policies
     * const policies = await prisma.policies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PoliciesUpdateArgs>(args: SelectSubset<T, PoliciesUpdateArgs<ExtArgs>>): Prisma__PoliciesClient<$Result.GetResult<Prisma.$PoliciesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Policies.
     * @param {PoliciesDeleteManyArgs} args - Arguments to filter Policies to delete.
     * @example
     * // Delete a few Policies
     * const { count } = await prisma.policies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PoliciesDeleteManyArgs>(args?: SelectSubset<T, PoliciesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Policies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoliciesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Policies
     * const policies = await prisma.policies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PoliciesUpdateManyArgs>(args: SelectSubset<T, PoliciesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Policies.
     * @param {PoliciesUpsertArgs} args - Arguments to update or create a Policies.
     * @example
     * // Update or create a Policies
     * const policies = await prisma.policies.upsert({
     *   create: {
     *     // ... data to create a Policies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Policies we want to update
     *   }
     * })
     */
    upsert<T extends PoliciesUpsertArgs>(args: SelectSubset<T, PoliciesUpsertArgs<ExtArgs>>): Prisma__PoliciesClient<$Result.GetResult<Prisma.$PoliciesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Policies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoliciesCountArgs} args - Arguments to filter Policies to count.
     * @example
     * // Count the number of Policies
     * const count = await prisma.policies.count({
     *   where: {
     *     // ... the filter for the Policies we want to count
     *   }
     * })
    **/
    count<T extends PoliciesCountArgs>(
      args?: Subset<T, PoliciesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PoliciesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Policies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoliciesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PoliciesAggregateArgs>(args: Subset<T, PoliciesAggregateArgs>): Prisma.PrismaPromise<GetPoliciesAggregateType<T>>

    /**
     * Group by Policies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoliciesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PoliciesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PoliciesGroupByArgs['orderBy'] }
        : { orderBy?: PoliciesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PoliciesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoliciesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Policies model
   */
  readonly fields: PoliciesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Policies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PoliciesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Policies model
   */
  interface PoliciesFieldRefs {
    readonly id: FieldRef<"Policies", 'Int'>
    readonly long_des: FieldRef<"Policies", 'String'>
    readonly type: FieldRef<"Policies", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Policies findUnique
   */
  export type PoliciesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policies
     */
    select?: PoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policies
     */
    omit?: PoliciesOmit<ExtArgs> | null
    /**
     * Filter, which Policies to fetch.
     */
    where: PoliciesWhereUniqueInput
  }

  /**
   * Policies findUniqueOrThrow
   */
  export type PoliciesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policies
     */
    select?: PoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policies
     */
    omit?: PoliciesOmit<ExtArgs> | null
    /**
     * Filter, which Policies to fetch.
     */
    where: PoliciesWhereUniqueInput
  }

  /**
   * Policies findFirst
   */
  export type PoliciesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policies
     */
    select?: PoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policies
     */
    omit?: PoliciesOmit<ExtArgs> | null
    /**
     * Filter, which Policies to fetch.
     */
    where?: PoliciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PoliciesOrderByWithRelationInput | PoliciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Policies.
     */
    cursor?: PoliciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Policies.
     */
    distinct?: PoliciesScalarFieldEnum | PoliciesScalarFieldEnum[]
  }

  /**
   * Policies findFirstOrThrow
   */
  export type PoliciesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policies
     */
    select?: PoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policies
     */
    omit?: PoliciesOmit<ExtArgs> | null
    /**
     * Filter, which Policies to fetch.
     */
    where?: PoliciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PoliciesOrderByWithRelationInput | PoliciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Policies.
     */
    cursor?: PoliciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Policies.
     */
    distinct?: PoliciesScalarFieldEnum | PoliciesScalarFieldEnum[]
  }

  /**
   * Policies findMany
   */
  export type PoliciesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policies
     */
    select?: PoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policies
     */
    omit?: PoliciesOmit<ExtArgs> | null
    /**
     * Filter, which Policies to fetch.
     */
    where?: PoliciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PoliciesOrderByWithRelationInput | PoliciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Policies.
     */
    cursor?: PoliciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    distinct?: PoliciesScalarFieldEnum | PoliciesScalarFieldEnum[]
  }

  /**
   * Policies create
   */
  export type PoliciesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policies
     */
    select?: PoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policies
     */
    omit?: PoliciesOmit<ExtArgs> | null
    /**
     * The data needed to create a Policies.
     */
    data: XOR<PoliciesCreateInput, PoliciesUncheckedCreateInput>
  }

  /**
   * Policies createMany
   */
  export type PoliciesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Policies.
     */
    data: PoliciesCreateManyInput | PoliciesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Policies update
   */
  export type PoliciesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policies
     */
    select?: PoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policies
     */
    omit?: PoliciesOmit<ExtArgs> | null
    /**
     * The data needed to update a Policies.
     */
    data: XOR<PoliciesUpdateInput, PoliciesUncheckedUpdateInput>
    /**
     * Choose, which Policies to update.
     */
    where: PoliciesWhereUniqueInput
  }

  /**
   * Policies updateMany
   */
  export type PoliciesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Policies.
     */
    data: XOR<PoliciesUpdateManyMutationInput, PoliciesUncheckedUpdateManyInput>
    /**
     * Filter which Policies to update
     */
    where?: PoliciesWhereInput
    /**
     * Limit how many Policies to update.
     */
    limit?: number
  }

  /**
   * Policies upsert
   */
  export type PoliciesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policies
     */
    select?: PoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policies
     */
    omit?: PoliciesOmit<ExtArgs> | null
    /**
     * The filter to search for the Policies to update in case it exists.
     */
    where: PoliciesWhereUniqueInput
    /**
     * In case the Policies found by the `where` argument doesn't exist, create a new Policies with this data.
     */
    create: XOR<PoliciesCreateInput, PoliciesUncheckedCreateInput>
    /**
     * In case the Policies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PoliciesUpdateInput, PoliciesUncheckedUpdateInput>
  }

  /**
   * Policies delete
   */
  export type PoliciesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policies
     */
    select?: PoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policies
     */
    omit?: PoliciesOmit<ExtArgs> | null
    /**
     * Filter which Policies to delete.
     */
    where: PoliciesWhereUniqueInput
  }

  /**
   * Policies deleteMany
   */
  export type PoliciesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Policies to delete
     */
    where?: PoliciesWhereInput
    /**
     * Limit how many Policies to delete.
     */
    limit?: number
  }

  /**
   * Policies without action
   */
  export type PoliciesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policies
     */
    select?: PoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policies
     */
    omit?: PoliciesOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    mobile: 'mobile',
    password: 'password',
    otp: 'otp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postId: 'postId',
    description: 'description'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const News_listScalarFieldEnum: {
    id: 'id',
    title: 'title',
    short_des: 'short_des',
    img1: 'img1',
    img2: 'img2',
    img3: 'img3',
    img4: 'img4',
    keywords: 'keywords',
    long_des: 'long_des',
    type: 'type',
    catId: 'catId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type News_listScalarFieldEnum = (typeof News_listScalarFieldEnum)[keyof typeof News_listScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const SocialsScalarFieldEnum: {
    id: 'id',
    facebook: 'facebook',
    youtube: 'youtube',
    twitter: 'twitter',
    linkedin: 'linkedin',
    about: 'about',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SocialsScalarFieldEnum = (typeof SocialsScalarFieldEnum)[keyof typeof SocialsScalarFieldEnum]


  export const SubscribersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscribersScalarFieldEnum = (typeof SubscribersScalarFieldEnum)[keyof typeof SubscribersScalarFieldEnum]


  export const PoliciesScalarFieldEnum: {
    id: 'id',
    long_des: 'long_des',
    type: 'type'
  };

  export type PoliciesScalarFieldEnum = (typeof PoliciesScalarFieldEnum)[keyof typeof PoliciesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    mobile: 'mobile',
    password: 'password',
    otp: 'otp'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const CommentOrderByRelevanceFieldEnum: {
    description: 'description'
  };

  export type CommentOrderByRelevanceFieldEnum = (typeof CommentOrderByRelevanceFieldEnum)[keyof typeof CommentOrderByRelevanceFieldEnum]


  export const news_listOrderByRelevanceFieldEnum: {
    title: 'title',
    short_des: 'short_des',
    img1: 'img1',
    img2: 'img2',
    img3: 'img3',
    img4: 'img4',
    keywords: 'keywords',
    long_des: 'long_des',
    type: 'type'
  };

  export type news_listOrderByRelevanceFieldEnum = (typeof news_listOrderByRelevanceFieldEnum)[keyof typeof news_listOrderByRelevanceFieldEnum]


  export const CategoriesOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type CategoriesOrderByRelevanceFieldEnum = (typeof CategoriesOrderByRelevanceFieldEnum)[keyof typeof CategoriesOrderByRelevanceFieldEnum]


  export const SocialsOrderByRelevanceFieldEnum: {
    facebook: 'facebook',
    youtube: 'youtube',
    twitter: 'twitter',
    linkedin: 'linkedin',
    about: 'about',
    address: 'address'
  };

  export type SocialsOrderByRelevanceFieldEnum = (typeof SocialsOrderByRelevanceFieldEnum)[keyof typeof SocialsOrderByRelevanceFieldEnum]


  export const SubscribersOrderByRelevanceFieldEnum: {
    email: 'email'
  };

  export type SubscribersOrderByRelevanceFieldEnum = (typeof SubscribersOrderByRelevanceFieldEnum)[keyof typeof SubscribersOrderByRelevanceFieldEnum]


  export const PoliciesOrderByRelevanceFieldEnum: {
    long_des: 'long_des',
    type: 'type'
  };

  export type PoliciesOrderByRelevanceFieldEnum = (typeof PoliciesOrderByRelevanceFieldEnum)[keyof typeof PoliciesOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    mobile?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    otp?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    comment?: CommentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    password?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    comment?: CommentOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    mobile?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    otp?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    comment?: CommentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    password?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    mobile?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    otp?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: IntFilter<"Comment"> | number
    userId?: IntFilter<"Comment"> | number
    postId?: IntFilter<"Comment"> | number
    description?: StringFilter<"Comment"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    news_list?: XOR<News_listScalarRelationFilter, news_listWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    description?: SortOrder
    user?: UserOrderByWithRelationInput
    news_list?: news_listOrderByWithRelationInput
    _relevance?: CommentOrderByRelevanceInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    userId?: IntFilter<"Comment"> | number
    postId?: IntFilter<"Comment"> | number
    description?: StringFilter<"Comment"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    news_list?: XOR<News_listScalarRelationFilter, news_listWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    description?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comment"> | number
    userId?: IntWithAggregatesFilter<"Comment"> | number
    postId?: IntWithAggregatesFilter<"Comment"> | number
    description?: StringWithAggregatesFilter<"Comment"> | string
  }

  export type news_listWhereInput = {
    AND?: news_listWhereInput | news_listWhereInput[]
    OR?: news_listWhereInput[]
    NOT?: news_listWhereInput | news_listWhereInput[]
    id?: IntFilter<"news_list"> | number
    title?: StringFilter<"news_list"> | string
    short_des?: StringFilter<"news_list"> | string
    img1?: StringFilter<"news_list"> | string
    img2?: StringFilter<"news_list"> | string
    img3?: StringFilter<"news_list"> | string
    img4?: StringFilter<"news_list"> | string
    keywords?: StringFilter<"news_list"> | string
    long_des?: StringFilter<"news_list"> | string
    type?: StringFilter<"news_list"> | string
    catId?: IntFilter<"news_list"> | number
    createdAt?: DateTimeFilter<"news_list"> | Date | string
    updatedAt?: DateTimeFilter<"news_list"> | Date | string
    categories?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
    comments?: CommentListRelationFilter
  }

  export type news_listOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    short_des?: SortOrder
    img1?: SortOrder
    img2?: SortOrder
    img3?: SortOrder
    img4?: SortOrder
    keywords?: SortOrder
    long_des?: SortOrder
    type?: SortOrder
    catId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categories?: CategoriesOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
    _relevance?: news_listOrderByRelevanceInput
  }

  export type news_listWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: news_listWhereInput | news_listWhereInput[]
    OR?: news_listWhereInput[]
    NOT?: news_listWhereInput | news_listWhereInput[]
    title?: StringFilter<"news_list"> | string
    short_des?: StringFilter<"news_list"> | string
    img1?: StringFilter<"news_list"> | string
    img2?: StringFilter<"news_list"> | string
    img3?: StringFilter<"news_list"> | string
    img4?: StringFilter<"news_list"> | string
    keywords?: StringFilter<"news_list"> | string
    long_des?: StringFilter<"news_list"> | string
    type?: StringFilter<"news_list"> | string
    catId?: IntFilter<"news_list"> | number
    createdAt?: DateTimeFilter<"news_list"> | Date | string
    updatedAt?: DateTimeFilter<"news_list"> | Date | string
    categories?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
    comments?: CommentListRelationFilter
  }, "id">

  export type news_listOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    short_des?: SortOrder
    img1?: SortOrder
    img2?: SortOrder
    img3?: SortOrder
    img4?: SortOrder
    keywords?: SortOrder
    long_des?: SortOrder
    type?: SortOrder
    catId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: news_listCountOrderByAggregateInput
    _avg?: news_listAvgOrderByAggregateInput
    _max?: news_listMaxOrderByAggregateInput
    _min?: news_listMinOrderByAggregateInput
    _sum?: news_listSumOrderByAggregateInput
  }

  export type news_listScalarWhereWithAggregatesInput = {
    AND?: news_listScalarWhereWithAggregatesInput | news_listScalarWhereWithAggregatesInput[]
    OR?: news_listScalarWhereWithAggregatesInput[]
    NOT?: news_listScalarWhereWithAggregatesInput | news_listScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"news_list"> | number
    title?: StringWithAggregatesFilter<"news_list"> | string
    short_des?: StringWithAggregatesFilter<"news_list"> | string
    img1?: StringWithAggregatesFilter<"news_list"> | string
    img2?: StringWithAggregatesFilter<"news_list"> | string
    img3?: StringWithAggregatesFilter<"news_list"> | string
    img4?: StringWithAggregatesFilter<"news_list"> | string
    keywords?: StringWithAggregatesFilter<"news_list"> | string
    long_des?: StringWithAggregatesFilter<"news_list"> | string
    type?: StringWithAggregatesFilter<"news_list"> | string
    catId?: IntWithAggregatesFilter<"news_list"> | number
    createdAt?: DateTimeWithAggregatesFilter<"news_list"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"news_list"> | Date | string
  }

  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    id?: IntFilter<"Categories"> | number
    name?: StringFilter<"Categories"> | string
    createdAt?: DateTimeFilter<"Categories"> | Date | string
    updatedAt?: DateTimeFilter<"Categories"> | Date | string
    news_list?: News_listListRelationFilter
  }

  export type CategoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    news_list?: news_listOrderByRelationAggregateInput
    _relevance?: CategoriesOrderByRelevanceInput
  }

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    createdAt?: DateTimeFilter<"Categories"> | Date | string
    updatedAt?: DateTimeFilter<"Categories"> | Date | string
    news_list?: News_listListRelationFilter
  }, "id" | "name">

  export type CategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoriesCountOrderByAggregateInput
    _avg?: CategoriesAvgOrderByAggregateInput
    _max?: CategoriesMaxOrderByAggregateInput
    _min?: CategoriesMinOrderByAggregateInput
    _sum?: CategoriesSumOrderByAggregateInput
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    OR?: CategoriesScalarWhereWithAggregatesInput[]
    NOT?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categories"> | number
    name?: StringWithAggregatesFilter<"Categories"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
  }

  export type SocialsWhereInput = {
    AND?: SocialsWhereInput | SocialsWhereInput[]
    OR?: SocialsWhereInput[]
    NOT?: SocialsWhereInput | SocialsWhereInput[]
    id?: IntFilter<"Socials"> | number
    facebook?: StringFilter<"Socials"> | string
    youtube?: StringFilter<"Socials"> | string
    twitter?: StringFilter<"Socials"> | string
    linkedin?: StringFilter<"Socials"> | string
    about?: StringFilter<"Socials"> | string
    address?: StringFilter<"Socials"> | string
    createdAt?: DateTimeFilter<"Socials"> | Date | string
    updatedAt?: DateTimeFilter<"Socials"> | Date | string
  }

  export type SocialsOrderByWithRelationInput = {
    id?: SortOrder
    facebook?: SortOrder
    youtube?: SortOrder
    twitter?: SortOrder
    linkedin?: SortOrder
    about?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: SocialsOrderByRelevanceInput
  }

  export type SocialsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SocialsWhereInput | SocialsWhereInput[]
    OR?: SocialsWhereInput[]
    NOT?: SocialsWhereInput | SocialsWhereInput[]
    facebook?: StringFilter<"Socials"> | string
    youtube?: StringFilter<"Socials"> | string
    twitter?: StringFilter<"Socials"> | string
    linkedin?: StringFilter<"Socials"> | string
    about?: StringFilter<"Socials"> | string
    address?: StringFilter<"Socials"> | string
    createdAt?: DateTimeFilter<"Socials"> | Date | string
    updatedAt?: DateTimeFilter<"Socials"> | Date | string
  }, "id">

  export type SocialsOrderByWithAggregationInput = {
    id?: SortOrder
    facebook?: SortOrder
    youtube?: SortOrder
    twitter?: SortOrder
    linkedin?: SortOrder
    about?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SocialsCountOrderByAggregateInput
    _avg?: SocialsAvgOrderByAggregateInput
    _max?: SocialsMaxOrderByAggregateInput
    _min?: SocialsMinOrderByAggregateInput
    _sum?: SocialsSumOrderByAggregateInput
  }

  export type SocialsScalarWhereWithAggregatesInput = {
    AND?: SocialsScalarWhereWithAggregatesInput | SocialsScalarWhereWithAggregatesInput[]
    OR?: SocialsScalarWhereWithAggregatesInput[]
    NOT?: SocialsScalarWhereWithAggregatesInput | SocialsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Socials"> | number
    facebook?: StringWithAggregatesFilter<"Socials"> | string
    youtube?: StringWithAggregatesFilter<"Socials"> | string
    twitter?: StringWithAggregatesFilter<"Socials"> | string
    linkedin?: StringWithAggregatesFilter<"Socials"> | string
    about?: StringWithAggregatesFilter<"Socials"> | string
    address?: StringWithAggregatesFilter<"Socials"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Socials"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Socials"> | Date | string
  }

  export type SubscribersWhereInput = {
    AND?: SubscribersWhereInput | SubscribersWhereInput[]
    OR?: SubscribersWhereInput[]
    NOT?: SubscribersWhereInput | SubscribersWhereInput[]
    id?: IntFilter<"Subscribers"> | number
    email?: StringFilter<"Subscribers"> | string
    createdAt?: DateTimeFilter<"Subscribers"> | Date | string
    updatedAt?: DateTimeFilter<"Subscribers"> | Date | string
  }

  export type SubscribersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: SubscribersOrderByRelevanceInput
  }

  export type SubscribersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: SubscribersWhereInput | SubscribersWhereInput[]
    OR?: SubscribersWhereInput[]
    NOT?: SubscribersWhereInput | SubscribersWhereInput[]
    createdAt?: DateTimeFilter<"Subscribers"> | Date | string
    updatedAt?: DateTimeFilter<"Subscribers"> | Date | string
  }, "id" | "email">

  export type SubscribersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscribersCountOrderByAggregateInput
    _avg?: SubscribersAvgOrderByAggregateInput
    _max?: SubscribersMaxOrderByAggregateInput
    _min?: SubscribersMinOrderByAggregateInput
    _sum?: SubscribersSumOrderByAggregateInput
  }

  export type SubscribersScalarWhereWithAggregatesInput = {
    AND?: SubscribersScalarWhereWithAggregatesInput | SubscribersScalarWhereWithAggregatesInput[]
    OR?: SubscribersScalarWhereWithAggregatesInput[]
    NOT?: SubscribersScalarWhereWithAggregatesInput | SubscribersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subscribers"> | number
    email?: StringWithAggregatesFilter<"Subscribers"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Subscribers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscribers"> | Date | string
  }

  export type PoliciesWhereInput = {
    AND?: PoliciesWhereInput | PoliciesWhereInput[]
    OR?: PoliciesWhereInput[]
    NOT?: PoliciesWhereInput | PoliciesWhereInput[]
    id?: IntFilter<"Policies"> | number
    long_des?: StringFilter<"Policies"> | string
    type?: StringFilter<"Policies"> | string
  }

  export type PoliciesOrderByWithRelationInput = {
    id?: SortOrder
    long_des?: SortOrder
    type?: SortOrder
    _relevance?: PoliciesOrderByRelevanceInput
  }

  export type PoliciesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PoliciesWhereInput | PoliciesWhereInput[]
    OR?: PoliciesWhereInput[]
    NOT?: PoliciesWhereInput | PoliciesWhereInput[]
    long_des?: StringFilter<"Policies"> | string
    type?: StringFilter<"Policies"> | string
  }, "id">

  export type PoliciesOrderByWithAggregationInput = {
    id?: SortOrder
    long_des?: SortOrder
    type?: SortOrder
    _count?: PoliciesCountOrderByAggregateInput
    _avg?: PoliciesAvgOrderByAggregateInput
    _max?: PoliciesMaxOrderByAggregateInput
    _min?: PoliciesMinOrderByAggregateInput
    _sum?: PoliciesSumOrderByAggregateInput
  }

  export type PoliciesScalarWhereWithAggregatesInput = {
    AND?: PoliciesScalarWhereWithAggregatesInput | PoliciesScalarWhereWithAggregatesInput[]
    OR?: PoliciesScalarWhereWithAggregatesInput[]
    NOT?: PoliciesScalarWhereWithAggregatesInput | PoliciesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Policies"> | number
    long_des?: StringWithAggregatesFilter<"Policies"> | string
    type?: StringWithAggregatesFilter<"Policies"> | string
  }

  export type UserCreateInput = {
    firstName: string
    lastName: string
    email: string
    mobile: string
    password: string
    otp: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    mobile: string
    password: string
    otp: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    mobile: string
    password: string
    otp: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    description: string
    user: UserCreateNestedOneWithoutCommentInput
    news_list: news_listCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    userId: number
    postId: number
    description: string
  }

  export type CommentUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCommentNestedInput
    news_list?: news_listUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateManyInput = {
    id?: number
    userId: number
    postId: number
    description: string
  }

  export type CommentUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type news_listCreateInput = {
    title: string
    short_des: string
    img1: string
    img2: string
    img3: string
    img4: string
    keywords: string
    long_des: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories: CategoriesCreateNestedOneWithoutNews_listInput
    comments?: CommentCreateNestedManyWithoutNews_listInput
  }

  export type news_listUncheckedCreateInput = {
    id?: number
    title: string
    short_des: string
    img1: string
    img2: string
    img3: string
    img4: string
    keywords: string
    long_des: string
    type: string
    catId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutNews_listInput
  }

  export type news_listUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    short_des?: StringFieldUpdateOperationsInput | string
    img1?: StringFieldUpdateOperationsInput | string
    img2?: StringFieldUpdateOperationsInput | string
    img3?: StringFieldUpdateOperationsInput | string
    img4?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    long_des?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoriesUpdateOneRequiredWithoutNews_listNestedInput
    comments?: CommentUpdateManyWithoutNews_listNestedInput
  }

  export type news_listUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    short_des?: StringFieldUpdateOperationsInput | string
    img1?: StringFieldUpdateOperationsInput | string
    img2?: StringFieldUpdateOperationsInput | string
    img3?: StringFieldUpdateOperationsInput | string
    img4?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    long_des?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    catId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutNews_listNestedInput
  }

  export type news_listCreateManyInput = {
    id?: number
    title: string
    short_des: string
    img1: string
    img2: string
    img3: string
    img4: string
    keywords: string
    long_des: string
    type: string
    catId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type news_listUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    short_des?: StringFieldUpdateOperationsInput | string
    img1?: StringFieldUpdateOperationsInput | string
    img2?: StringFieldUpdateOperationsInput | string
    img3?: StringFieldUpdateOperationsInput | string
    img4?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    long_des?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type news_listUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    short_des?: StringFieldUpdateOperationsInput | string
    img1?: StringFieldUpdateOperationsInput | string
    img2?: StringFieldUpdateOperationsInput | string
    img3?: StringFieldUpdateOperationsInput | string
    img4?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    long_des?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    catId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    news_list?: news_listCreateNestedManyWithoutCategoriesInput
  }

  export type CategoriesUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    news_list?: news_listUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news_list?: news_listUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news_list?: news_listUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoriesCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialsCreateInput = {
    facebook: string
    youtube: string
    twitter: string
    linkedin: string
    about: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialsUncheckedCreateInput = {
    id?: number
    facebook: string
    youtube: string
    twitter: string
    linkedin: string
    about: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialsUpdateInput = {
    facebook?: StringFieldUpdateOperationsInput | string
    youtube?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    facebook?: StringFieldUpdateOperationsInput | string
    youtube?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialsCreateManyInput = {
    id?: number
    facebook: string
    youtube: string
    twitter: string
    linkedin: string
    about: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialsUpdateManyMutationInput = {
    facebook?: StringFieldUpdateOperationsInput | string
    youtube?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    facebook?: StringFieldUpdateOperationsInput | string
    youtube?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscribersCreateInput = {
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscribersUncheckedCreateInput = {
    id?: number
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscribersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscribersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscribersCreateManyInput = {
    id?: number
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscribersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscribersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoliciesCreateInput = {
    long_des: string
    type: string
  }

  export type PoliciesUncheckedCreateInput = {
    id?: number
    long_des: string
    type: string
  }

  export type PoliciesUpdateInput = {
    long_des?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PoliciesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    long_des?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PoliciesCreateManyInput = {
    id?: number
    long_des: string
    type: string
  }

  export type PoliciesUpdateManyMutationInput = {
    long_des?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PoliciesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    long_des?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    password?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    password?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    password?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type News_listScalarRelationFilter = {
    is?: news_listWhereInput
    isNot?: news_listWhereInput
  }

  export type CommentOrderByRelevanceInput = {
    fields: CommentOrderByRelevanceFieldEnum | CommentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    description?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    description?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    description?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type CategoriesScalarRelationFilter = {
    is?: CategoriesWhereInput
    isNot?: CategoriesWhereInput
  }

  export type news_listOrderByRelevanceInput = {
    fields: news_listOrderByRelevanceFieldEnum | news_listOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type news_listCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    short_des?: SortOrder
    img1?: SortOrder
    img2?: SortOrder
    img3?: SortOrder
    img4?: SortOrder
    keywords?: SortOrder
    long_des?: SortOrder
    type?: SortOrder
    catId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type news_listAvgOrderByAggregateInput = {
    id?: SortOrder
    catId?: SortOrder
  }

  export type news_listMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    short_des?: SortOrder
    img1?: SortOrder
    img2?: SortOrder
    img3?: SortOrder
    img4?: SortOrder
    keywords?: SortOrder
    long_des?: SortOrder
    type?: SortOrder
    catId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type news_listMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    short_des?: SortOrder
    img1?: SortOrder
    img2?: SortOrder
    img3?: SortOrder
    img4?: SortOrder
    keywords?: SortOrder
    long_des?: SortOrder
    type?: SortOrder
    catId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type news_listSumOrderByAggregateInput = {
    id?: SortOrder
    catId?: SortOrder
  }

  export type News_listListRelationFilter = {
    every?: news_listWhereInput
    some?: news_listWhereInput
    none?: news_listWhereInput
  }

  export type news_listOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriesOrderByRelevanceInput = {
    fields: CategoriesOrderByRelevanceFieldEnum | CategoriesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SocialsOrderByRelevanceInput = {
    fields: SocialsOrderByRelevanceFieldEnum | SocialsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SocialsCountOrderByAggregateInput = {
    id?: SortOrder
    facebook?: SortOrder
    youtube?: SortOrder
    twitter?: SortOrder
    linkedin?: SortOrder
    about?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SocialsMaxOrderByAggregateInput = {
    id?: SortOrder
    facebook?: SortOrder
    youtube?: SortOrder
    twitter?: SortOrder
    linkedin?: SortOrder
    about?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialsMinOrderByAggregateInput = {
    id?: SortOrder
    facebook?: SortOrder
    youtube?: SortOrder
    twitter?: SortOrder
    linkedin?: SortOrder
    about?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubscribersOrderByRelevanceInput = {
    fields: SubscribersOrderByRelevanceFieldEnum | SubscribersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubscribersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscribersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubscribersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscribersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscribersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PoliciesOrderByRelevanceInput = {
    fields: PoliciesOrderByRelevanceFieldEnum | PoliciesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PoliciesCountOrderByAggregateInput = {
    id?: SortOrder
    long_des?: SortOrder
    type?: SortOrder
  }

  export type PoliciesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PoliciesMaxOrderByAggregateInput = {
    id?: SortOrder
    long_des?: SortOrder
    type?: SortOrder
  }

  export type PoliciesMinOrderByAggregateInput = {
    id?: SortOrder
    long_des?: SortOrder
    type?: SortOrder
  }

  export type PoliciesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCommentInput = {
    create?: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput
    connect?: UserWhereUniqueInput
  }

  export type news_listCreateNestedOneWithoutCommentsInput = {
    create?: XOR<news_listCreateWithoutCommentsInput, news_listUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: news_listCreateOrConnectWithoutCommentsInput
    connect?: news_listWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentNestedInput = {
    create?: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput
    upsert?: UserUpsertWithoutCommentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentInput, UserUpdateWithoutCommentInput>, UserUncheckedUpdateWithoutCommentInput>
  }

  export type news_listUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<news_listCreateWithoutCommentsInput, news_listUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: news_listCreateOrConnectWithoutCommentsInput
    upsert?: news_listUpsertWithoutCommentsInput
    connect?: news_listWhereUniqueInput
    update?: XOR<XOR<news_listUpdateToOneWithWhereWithoutCommentsInput, news_listUpdateWithoutCommentsInput>, news_listUncheckedUpdateWithoutCommentsInput>
  }

  export type CategoriesCreateNestedOneWithoutNews_listInput = {
    create?: XOR<CategoriesCreateWithoutNews_listInput, CategoriesUncheckedCreateWithoutNews_listInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutNews_listInput
    connect?: CategoriesWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutNews_listInput = {
    create?: XOR<CommentCreateWithoutNews_listInput, CommentUncheckedCreateWithoutNews_listInput> | CommentCreateWithoutNews_listInput[] | CommentUncheckedCreateWithoutNews_listInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutNews_listInput | CommentCreateOrConnectWithoutNews_listInput[]
    createMany?: CommentCreateManyNews_listInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutNews_listInput = {
    create?: XOR<CommentCreateWithoutNews_listInput, CommentUncheckedCreateWithoutNews_listInput> | CommentCreateWithoutNews_listInput[] | CommentUncheckedCreateWithoutNews_listInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutNews_listInput | CommentCreateOrConnectWithoutNews_listInput[]
    createMany?: CommentCreateManyNews_listInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CategoriesUpdateOneRequiredWithoutNews_listNestedInput = {
    create?: XOR<CategoriesCreateWithoutNews_listInput, CategoriesUncheckedCreateWithoutNews_listInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutNews_listInput
    upsert?: CategoriesUpsertWithoutNews_listInput
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutNews_listInput, CategoriesUpdateWithoutNews_listInput>, CategoriesUncheckedUpdateWithoutNews_listInput>
  }

  export type CommentUpdateManyWithoutNews_listNestedInput = {
    create?: XOR<CommentCreateWithoutNews_listInput, CommentUncheckedCreateWithoutNews_listInput> | CommentCreateWithoutNews_listInput[] | CommentUncheckedCreateWithoutNews_listInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutNews_listInput | CommentCreateOrConnectWithoutNews_listInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutNews_listInput | CommentUpsertWithWhereUniqueWithoutNews_listInput[]
    createMany?: CommentCreateManyNews_listInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutNews_listInput | CommentUpdateWithWhereUniqueWithoutNews_listInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutNews_listInput | CommentUpdateManyWithWhereWithoutNews_listInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutNews_listNestedInput = {
    create?: XOR<CommentCreateWithoutNews_listInput, CommentUncheckedCreateWithoutNews_listInput> | CommentCreateWithoutNews_listInput[] | CommentUncheckedCreateWithoutNews_listInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutNews_listInput | CommentCreateOrConnectWithoutNews_listInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutNews_listInput | CommentUpsertWithWhereUniqueWithoutNews_listInput[]
    createMany?: CommentCreateManyNews_listInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutNews_listInput | CommentUpdateWithWhereUniqueWithoutNews_listInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutNews_listInput | CommentUpdateManyWithWhereWithoutNews_listInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type news_listCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<news_listCreateWithoutCategoriesInput, news_listUncheckedCreateWithoutCategoriesInput> | news_listCreateWithoutCategoriesInput[] | news_listUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: news_listCreateOrConnectWithoutCategoriesInput | news_listCreateOrConnectWithoutCategoriesInput[]
    createMany?: news_listCreateManyCategoriesInputEnvelope
    connect?: news_listWhereUniqueInput | news_listWhereUniqueInput[]
  }

  export type news_listUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<news_listCreateWithoutCategoriesInput, news_listUncheckedCreateWithoutCategoriesInput> | news_listCreateWithoutCategoriesInput[] | news_listUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: news_listCreateOrConnectWithoutCategoriesInput | news_listCreateOrConnectWithoutCategoriesInput[]
    createMany?: news_listCreateManyCategoriesInputEnvelope
    connect?: news_listWhereUniqueInput | news_listWhereUniqueInput[]
  }

  export type news_listUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<news_listCreateWithoutCategoriesInput, news_listUncheckedCreateWithoutCategoriesInput> | news_listCreateWithoutCategoriesInput[] | news_listUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: news_listCreateOrConnectWithoutCategoriesInput | news_listCreateOrConnectWithoutCategoriesInput[]
    upsert?: news_listUpsertWithWhereUniqueWithoutCategoriesInput | news_listUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: news_listCreateManyCategoriesInputEnvelope
    set?: news_listWhereUniqueInput | news_listWhereUniqueInput[]
    disconnect?: news_listWhereUniqueInput | news_listWhereUniqueInput[]
    delete?: news_listWhereUniqueInput | news_listWhereUniqueInput[]
    connect?: news_listWhereUniqueInput | news_listWhereUniqueInput[]
    update?: news_listUpdateWithWhereUniqueWithoutCategoriesInput | news_listUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: news_listUpdateManyWithWhereWithoutCategoriesInput | news_listUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: news_listScalarWhereInput | news_listScalarWhereInput[]
  }

  export type news_listUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<news_listCreateWithoutCategoriesInput, news_listUncheckedCreateWithoutCategoriesInput> | news_listCreateWithoutCategoriesInput[] | news_listUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: news_listCreateOrConnectWithoutCategoriesInput | news_listCreateOrConnectWithoutCategoriesInput[]
    upsert?: news_listUpsertWithWhereUniqueWithoutCategoriesInput | news_listUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: news_listCreateManyCategoriesInputEnvelope
    set?: news_listWhereUniqueInput | news_listWhereUniqueInput[]
    disconnect?: news_listWhereUniqueInput | news_listWhereUniqueInput[]
    delete?: news_listWhereUniqueInput | news_listWhereUniqueInput[]
    connect?: news_listWhereUniqueInput | news_listWhereUniqueInput[]
    update?: news_listUpdateWithWhereUniqueWithoutCategoriesInput | news_listUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: news_listUpdateManyWithWhereWithoutCategoriesInput | news_listUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: news_listScalarWhereInput | news_listScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CommentCreateWithoutUserInput = {
    description: string
    news_list: news_listCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: number
    postId: number
    description: string
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: IntFilter<"Comment"> | number
    userId?: IntFilter<"Comment"> | number
    postId?: IntFilter<"Comment"> | number
    description?: StringFilter<"Comment"> | string
  }

  export type UserCreateWithoutCommentInput = {
    firstName: string
    lastName: string
    email: string
    mobile: string
    password: string
    otp: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutCommentInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    mobile: string
    password: string
    otp: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutCommentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
  }

  export type news_listCreateWithoutCommentsInput = {
    title: string
    short_des: string
    img1: string
    img2: string
    img3: string
    img4: string
    keywords: string
    long_des: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories: CategoriesCreateNestedOneWithoutNews_listInput
  }

  export type news_listUncheckedCreateWithoutCommentsInput = {
    id?: number
    title: string
    short_des: string
    img1: string
    img2: string
    img3: string
    img4: string
    keywords: string
    long_des: string
    type: string
    catId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type news_listCreateOrConnectWithoutCommentsInput = {
    where: news_listWhereUniqueInput
    create: XOR<news_listCreateWithoutCommentsInput, news_listUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpsertWithoutCommentInput = {
    update: XOR<UserUpdateWithoutCommentInput, UserUncheckedUpdateWithoutCommentInput>
    create: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentInput, UserUncheckedUpdateWithoutCommentInput>
  }

  export type UserUpdateWithoutCommentInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type news_listUpsertWithoutCommentsInput = {
    update: XOR<news_listUpdateWithoutCommentsInput, news_listUncheckedUpdateWithoutCommentsInput>
    create: XOR<news_listCreateWithoutCommentsInput, news_listUncheckedCreateWithoutCommentsInput>
    where?: news_listWhereInput
  }

  export type news_listUpdateToOneWithWhereWithoutCommentsInput = {
    where?: news_listWhereInput
    data: XOR<news_listUpdateWithoutCommentsInput, news_listUncheckedUpdateWithoutCommentsInput>
  }

  export type news_listUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    short_des?: StringFieldUpdateOperationsInput | string
    img1?: StringFieldUpdateOperationsInput | string
    img2?: StringFieldUpdateOperationsInput | string
    img3?: StringFieldUpdateOperationsInput | string
    img4?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    long_des?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoriesUpdateOneRequiredWithoutNews_listNestedInput
  }

  export type news_listUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    short_des?: StringFieldUpdateOperationsInput | string
    img1?: StringFieldUpdateOperationsInput | string
    img2?: StringFieldUpdateOperationsInput | string
    img3?: StringFieldUpdateOperationsInput | string
    img4?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    long_des?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    catId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesCreateWithoutNews_listInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriesUncheckedCreateWithoutNews_listInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriesCreateOrConnectWithoutNews_listInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutNews_listInput, CategoriesUncheckedCreateWithoutNews_listInput>
  }

  export type CommentCreateWithoutNews_listInput = {
    description: string
    user: UserCreateNestedOneWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutNews_listInput = {
    id?: number
    userId: number
    description: string
  }

  export type CommentCreateOrConnectWithoutNews_listInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutNews_listInput, CommentUncheckedCreateWithoutNews_listInput>
  }

  export type CommentCreateManyNews_listInputEnvelope = {
    data: CommentCreateManyNews_listInput | CommentCreateManyNews_listInput[]
    skipDuplicates?: boolean
  }

  export type CategoriesUpsertWithoutNews_listInput = {
    update: XOR<CategoriesUpdateWithoutNews_listInput, CategoriesUncheckedUpdateWithoutNews_listInput>
    create: XOR<CategoriesCreateWithoutNews_listInput, CategoriesUncheckedCreateWithoutNews_listInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutNews_listInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutNews_listInput, CategoriesUncheckedUpdateWithoutNews_listInput>
  }

  export type CategoriesUpdateWithoutNews_listInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesUncheckedUpdateWithoutNews_listInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutNews_listInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutNews_listInput, CommentUncheckedUpdateWithoutNews_listInput>
    create: XOR<CommentCreateWithoutNews_listInput, CommentUncheckedCreateWithoutNews_listInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutNews_listInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutNews_listInput, CommentUncheckedUpdateWithoutNews_listInput>
  }

  export type CommentUpdateManyWithWhereWithoutNews_listInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutNews_listInput>
  }

  export type news_listCreateWithoutCategoriesInput = {
    title: string
    short_des: string
    img1: string
    img2: string
    img3: string
    img4: string
    keywords: string
    long_des: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutNews_listInput
  }

  export type news_listUncheckedCreateWithoutCategoriesInput = {
    id?: number
    title: string
    short_des: string
    img1: string
    img2: string
    img3: string
    img4: string
    keywords: string
    long_des: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutNews_listInput
  }

  export type news_listCreateOrConnectWithoutCategoriesInput = {
    where: news_listWhereUniqueInput
    create: XOR<news_listCreateWithoutCategoriesInput, news_listUncheckedCreateWithoutCategoriesInput>
  }

  export type news_listCreateManyCategoriesInputEnvelope = {
    data: news_listCreateManyCategoriesInput | news_listCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type news_listUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: news_listWhereUniqueInput
    update: XOR<news_listUpdateWithoutCategoriesInput, news_listUncheckedUpdateWithoutCategoriesInput>
    create: XOR<news_listCreateWithoutCategoriesInput, news_listUncheckedCreateWithoutCategoriesInput>
  }

  export type news_listUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: news_listWhereUniqueInput
    data: XOR<news_listUpdateWithoutCategoriesInput, news_listUncheckedUpdateWithoutCategoriesInput>
  }

  export type news_listUpdateManyWithWhereWithoutCategoriesInput = {
    where: news_listScalarWhereInput
    data: XOR<news_listUpdateManyMutationInput, news_listUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type news_listScalarWhereInput = {
    AND?: news_listScalarWhereInput | news_listScalarWhereInput[]
    OR?: news_listScalarWhereInput[]
    NOT?: news_listScalarWhereInput | news_listScalarWhereInput[]
    id?: IntFilter<"news_list"> | number
    title?: StringFilter<"news_list"> | string
    short_des?: StringFilter<"news_list"> | string
    img1?: StringFilter<"news_list"> | string
    img2?: StringFilter<"news_list"> | string
    img3?: StringFilter<"news_list"> | string
    img4?: StringFilter<"news_list"> | string
    keywords?: StringFilter<"news_list"> | string
    long_des?: StringFilter<"news_list"> | string
    type?: StringFilter<"news_list"> | string
    catId?: IntFilter<"news_list"> | number
    createdAt?: DateTimeFilter<"news_list"> | Date | string
    updatedAt?: DateTimeFilter<"news_list"> | Date | string
  }

  export type CommentCreateManyUserInput = {
    id?: number
    postId: number
    description: string
  }

  export type CommentUpdateWithoutUserInput = {
    description?: StringFieldUpdateOperationsInput | string
    news_list?: news_listUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateManyNews_listInput = {
    id?: number
    userId: number
    description: string
  }

  export type CommentUpdateWithoutNews_listInput = {
    description?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutNews_listInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyWithoutNews_listInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type news_listCreateManyCategoriesInput = {
    id?: number
    title: string
    short_des: string
    img1: string
    img2: string
    img3: string
    img4: string
    keywords: string
    long_des: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type news_listUpdateWithoutCategoriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    short_des?: StringFieldUpdateOperationsInput | string
    img1?: StringFieldUpdateOperationsInput | string
    img2?: StringFieldUpdateOperationsInput | string
    img3?: StringFieldUpdateOperationsInput | string
    img4?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    long_des?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutNews_listNestedInput
  }

  export type news_listUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    short_des?: StringFieldUpdateOperationsInput | string
    img1?: StringFieldUpdateOperationsInput | string
    img2?: StringFieldUpdateOperationsInput | string
    img3?: StringFieldUpdateOperationsInput | string
    img4?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    long_des?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutNews_listNestedInput
  }

  export type news_listUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    short_des?: StringFieldUpdateOperationsInput | string
    img1?: StringFieldUpdateOperationsInput | string
    img2?: StringFieldUpdateOperationsInput | string
    img3?: StringFieldUpdateOperationsInput | string
    img4?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    long_des?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}