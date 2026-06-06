declare module "better-sqlite3" {
  interface Database {
    prepare(sql: string): Statement;
  }

  interface Statement {
    all(...params: unknown[]): unknown[];
    get(...params: unknown[]): unknown;
    run(...params: unknown[]): unknown;
  }

  function sqlite(filename: string): Database;

  export default sqlite;
}
