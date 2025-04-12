
export default function TaskFilter({filter, setFilter, filterDate, setFilterDate}){
    return (
        <>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not-completed">Not Completed</option>
          </select>
      
          <select value={filterDate} onChange={(e) => setFilterDate(e.target.value)}>
          <option value="all">All Time</option>
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="last-week">Last Week</option>
            <option value="last-month">Last Month</option>
            <option value="last-year">Last Year</option>
            <option value="year+">Older Than a Year</option>
          </select>
        </>
      )
      
}