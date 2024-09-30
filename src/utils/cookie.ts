import Cookies from "cookies-ts";

export function useCookies(): any {
  const cookies = new Cookies();
  function get(name: string) {
    return cookies.get(name);
  }

  function set(name: string, value: string) {
    cookies.set(name, value, { expires: 7, secure: true });
  }

  function remove(name: string) {
    cookies.remove(name);
  }

  return {
    get,
    set,
    remove,
  };
}
