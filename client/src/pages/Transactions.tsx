import { FC } from "react";
import { TransactionForm } from "../components/TransactionForm";

const Transactions: FC = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-3 items-start gap-4">
        {/* Add transaction form */}
        <div className="col-span-2 grid">
          <TransactionForm />
        </div>

        {/* Statistic blocks*/}
        <div className="rounded-md bg-slate-800 p-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-md text-center font-bold uppercase">
                Total income:
              </p>
              <p className="mt-2 rounded-sm bg-green-600 p-1 text-center">
                1000$
              </p>
            </div>

            <div>
              <p className="text-md text-center font-bold uppercase">
                Total expense:
              </p>
              <p className="mt-2 rounded-sm bg-red-500 p-1 text-center">
                1000$
              </p>
            </div>

            <div className="">Chart</div>
          </div>
        </div>
      </div>

      {/* {Transactions Table} */}
      <h1 className="my-5">Table</h1>
    </>
  );
};

export default Transactions;
