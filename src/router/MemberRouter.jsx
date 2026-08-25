
const MemberRouter = () => {
  return [
    {
        path: "login",
        HydrateFallBack: () => <div>Loading...</div>,
        lazy: async () => {
            const {default: Component} = await import("../pages/member/LoginPage");
            return {Component};
        }
    },
    {
      path: "logout",
      HydrateFallBack: () => <div>Loading...</div>,
      lazy: async () => {
        const {default: Component} = await import("../pages/member/LogoutPage");
        return {Component};
      }
    }
  ]
}

export default MemberRouter