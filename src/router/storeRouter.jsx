const storeRouter = () => {
  return [
    {
        path: "list",
        HydrateFallBack: <div>Loading...</div>,
        lazy: async () => {
            const {default: Component} = await import("../pages/openapi/StoreListPage");
            return {Component};
        }
    },
    {
        path: "read/:no",
        HydrateFallBack: <div>Loading...</div>,
        lazy: async () => {
            const {default: Component} = await import("../pages/openapi/StoreReadPage");
            return {Component};
        }
    },
    
  ]
}
export default storeRouter