import { instance } from "../../api/axios.api";
import { ICategory } from "../../types/types";

export const categoriesAction = async ({ request }: any) => {
  switch (request.method) {
    case "POST": {
      const formData = await request.formData();
      const title = {
        title: formData.get("title"),
      };
      await instance.post("/categories", title);
      return null;
    }
    case "PATCH": {
      const formData = await request.formData();
      const category = {
        title: formData.get("title"),
        id: formData.get("id"),
      };
      await instance.patch(`/categories/category/${category.id}`, category);

      return null;
    }
    case "DELETE": {
        const formData = await request.formData();
        const categoryId = formData.get("id");
        await instance.delete(`/categories/category/${categoryId}`);
        return null;
    }
  }
};

export const categoruLoader = async () => {
    const {data} = await instance.get<ICategory[]>('/categories');
    return data;
};
