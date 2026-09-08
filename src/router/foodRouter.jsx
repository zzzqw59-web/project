const foodRouter = () => {
  return [
    {
        path: "list",
        HydrateFallBack: <div>Loading...</div>,
        lazy: async () => {
            const {default: Component} = await import("../pages/openapi/FoodListPage");
            return {Component};
        }
    }
  ]
}
export default foodRouter