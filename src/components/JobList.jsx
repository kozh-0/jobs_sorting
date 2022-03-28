import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'Redux/filters/filterActions';
import { selectVisiblePositions } from 'Redux/positions/posSelectors';
import { JobPosition } from './JobPosition';

const JobList = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(state => state.filters);
  const positions = useSelector(state => selectVisiblePositions(state, currentFilters));

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  }

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition 
          key={item.id} 
          {...item} 
          handleAddFilter={handleAddFilter}
        />
      ))}
    </div>
  )
}

export {JobList};