import { FC, useState } from "react";
import { AiFillEdit, AiFillCloseCircle } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { Form, useLoaderData } from "react-router-dom";
import CategoryModal from "../components/CategoryModal";
import { ICategory } from "../types/types";

const Categories: FC = () => {
  const categories = useLoaderData() as ICategory[];
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [categoryId, setCategoryId] = useState<number>(0);

  return (
    <>
      <div className="mt-10 rounded-md bg-slate-800 p-4">
        <h1>Category list: </h1>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {categories.map((category, index) => (
            <div
              className="group relative flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2"
              key={index}
            >
              {category.title}
              <div className="absolute bottom-0 left-0 right-0 top-0 hidden items-center justify-between rounded-lg bg-black/90 px-3 group-hover:flex">
                <button onClick={() => {
                    setCategoryId(category.id);
                    setIsEdit(true);
                    setVisibleModal(true);
                }}>
                  <AiFillEdit />
                </button>

                <Form className="flex" method="delete" action="/categories">
                  <input type="hidden" value={category.id} name="id" />
                  <button type="submit">
                    <AiFillCloseCircle />
                  </button>
                </Form>
              </div>
            </div>
          ))}
        </div>

        {/* {Category add} */}
        <button
          className="mt-5 flex max-w-fit items-center gap-2 text-white/50 hover:text-white"
          onClick={() => setVisibleModal(true)}
        >
          <FaPlus />
          <span>Add a new category</span>
        </button>
      </div>

      {/* Add category create modal */}
      {visibleModal && (
        <CategoryModal type="post" setVisible={setVisibleModal} />
      )}

      {/* Edit category create modal */}
      {visibleModal && isEdit && (
        <CategoryModal type="patch" id={categoryId} setVisible={setVisibleModal} />
      )}
    </>
  );
};

export default Categories;
