import { FC, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Form, useLoaderData } from "react-router-dom";
import { IResponseTransactionLoader } from "../types/types";
import CategoryModal from "./CategoryModal";

export const TransactionForm: FC = () => {
  const {categories} = useLoaderData() as IResponseTransactionLoader;
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  return (
    <div className="rounded-md bg-slate-800 p-4">
      <Form className="grid gap-2" method="post" action="/transactions">
        <label className="grid" htmlFor="title">
          <span>Title</span>
          <input
            type="text"
            className="input border-slate-900 bg-slate-700"
            placeholder="Title..."
            name="title"
            required
          />
        </label>

        <label className="grid" htmlFor="amount">
          <span>Amount</span>
          <input
            type="number"
            className="input border-slate-900 bg-slate-700"
            placeholder="Amount..."
            name="amount"
            required
          />
        </label>

        {/* {Select} */}
        {categories.length ? <label htmlFor="category" className="grid">
          <span>Category</span>
          <select
            className="input border-slate-900 bg-slate-700"
            name="category"
            required
          >
            {categories.map((category, index) => <option value={category.id} key={index}>{category.title}</option>)}
          </select>
        </label> : <h1 className="mt-1 text-red-300">No categories</h1>} 

        <button
          className="flex max-w-fit items-center gap-2 text-white/50 hover:text-white"
          onClick={() => setVisibleModal(true)}
        >
          <FaPlus />
          <span>Manage categories</span>
        </button>

        {/* {Radio buttons} */}
        <div className="flex items-center gap-4">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name="type"
              value={"income"}
              className="form-radio text-blue-600"
            />
            <span>Income</span>
          </label>
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name="type"
              value={"expense"}
              className="form-radio text-blue-600"
            />
            <span>Expense</span>
          </label>
        </div>

        {/* {Submit button} */}
        <button className="btn btn-green max-w-fit mt-2">Submit</button>
      </Form>

      {visibleModal && (
        <CategoryModal type="post" setVisible={setVisibleModal} />
      )}
    </div>
  );
};
