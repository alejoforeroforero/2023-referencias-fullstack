- if/else:

      {filteredExpenses.length < 1 ? (
        <p>No hay elementos</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
      
- if/then:

        {filteredExpenses.length < 1 && <p>No hay elementos</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        }
  
 - Keeping the logic outside the render method:


        let expensesContent = <p>No hay elementos</p>;

        if(filteredExpenses.length > 0){
          expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        }

        return (
          <div>
            <Card className="expenses">
              <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
              />
              {expensesContent}
            </Card>
          </div>
        );
