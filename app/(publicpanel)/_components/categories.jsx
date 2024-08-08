import {FcMultipleDevices, FcMusic} from 'react/icons/fc'
const CategoryItem = ({key,label,icon,value}) => {

}
const IconMap = {
    "web Developmnet": FcMultipleDevices,
    "Machine Learning": FcMultipleDevices,
    "Data Science": FcMultipleDevices,
    "Engineering": FcMultipleDevices,
    "Accounting": FcMultipleDevices,
    "Computer Science": FcMultipleDevices,
    "Fitness": Fc,
    "Music": FcMusic,
}
const categories = ({items}) => {
  return (
    <div className='flex items-center gap-x-2 overflow-x-auto pb-2'>
        {
            items.map(item => (
                <CategoryItem key={item._id} label={item.name} icon={IconMap[item.name]} value={item._id}/>
            ))
        }
    </div>
  )
}

export default categories