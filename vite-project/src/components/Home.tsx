import { useState } from "react";
import AddEmployee from "./AddEmployee";
import { dummyEmployeeList, IEmployee, PageEnum } from "./Employee.type";
import EmployeeList from "./EmployeeList";
import "./Home.style.scss";

const Home = () => {
  const [employeeList, setEmployeeList] = useState(
    dummyEmployeeList as IEmployee[]
  );

  const [shownPage, setShownPage] = useState(PageEnum.list);

  const onAddEmployeeClickHnd = () => {
    setShownPage(PageEnum.add);
  };

  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  const addEmployee = (data: IEmployee) => {
    setEmployeeList([...employeeList, data]);
  };

  return (
    <>
      <article className="article-header">
        <header>
          <h1>CRUD app in REACT</h1>
        </header>
      </article>

      <section className="section-content">
        {shownPage === PageEnum.list && (
          <>
            <input
              type="button"
              value="Add Employee"
              onClick={onAddEmployeeClickHnd}
            />
            <EmployeeList list={employeeList} />
          </>
        )}

        {shownPage === PageEnum.add && (
          <AddEmployee
            onBackBtnClickHnd={showListPage}
            onSubmitClickHnd={addEmployee}
          />
        )}
      </section>
    </>
  );
};

export default Home;
