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
  ]
}
export default walkingRouter