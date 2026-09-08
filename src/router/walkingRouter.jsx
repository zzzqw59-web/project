const walkingRouter = () => {
  return [
    {
        path: "list",
        HydrateFallBack: () => <div>Loading...</div>,
        lazy: async () => {
            const {default: Component} = await import("../pages/openapi/WalkingListPage");
            return {Component};
        },
    },
    {
      path: "read/:seq",
      HydratedFallBack: () => <div>Loading...</div>,
      lazy: async () => {
        const {default: Component} = await import("../pages/openapi/WalkingReadPage");
        return {Component};
      }
    }
  ]
}
export default walkingRouter