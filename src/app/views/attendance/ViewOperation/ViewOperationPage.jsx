import React,{useState,useEffect,useRef} from 'react'
import { Breadcrumb } from 'app/components'
import { Grid, Card } from '@material-ui/core'
import AddOperationTable from 'app/components/tables/AddOperationTable'
import OperationTable from 'app/components/tables/operationTable'
import FormModal from 'app/components/CustomizedDialog/FormModal'
import {useDispatch,useSelector} from "react-redux"
import { getActiveOperationTypes,getOperations } from 'app/redux/operations/operationsActions'


function ViewOperationPage() {
    const [isOpen, setisOpen] = useState(false)

    const {operationTypes} = useSelector(state => state.churchOperation)

    const dispatch = useDispatch()
    const selectionGrid = useRef(null)
    const month =  useRef("")
    const year =  useRef("")
   
    const handleChange = ()=>{

        (month.current.value && year.current.value) ??  dispatch(getOperations( month.current.value,year.current.value)) 
         

       
    }

    const toggleModal = ()=>{
        setisOpen(!isOpen)
      }

      const saveActionHandler =()=>{

   
        let values = selectionGrid.current.dataSource.map((y) => {
            const { week1, week2, week3, week4, week5 } = y;
           return {
              id: operationTypes.find((x) => x.name === y.name).id,
              week1: +week1,
              week2: +week2,
              week3: +week3,
              week4: +week4,
              week5: +week5,
            };
            
          });
        console.log({values})
         //dispatch(addCommitteeMembers(committee.id,values))
    
         setisOpen(false)
      }

      useEffect(() => {
        
        dispatch(getActiveOperationTypes())
      
        return () => {
            setisOpen(!isOpen)
        };
      }, []);
      
    return (
        <div className=" m-sm-30 mt-6">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        {
                            name: 'Attendance',
                            path: '/attendance/organisation',
                        },
                        { name: 'Organisation' },
                    ]}
                />
            </div>
            <Grid container spacing={3}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Card className="px-6 pt-2 pb-4 mb-3" raised>
                        <select ref={month} onChange={handleChange}>
                            <option>Select Month</option>
                            <option>Jan</option>
                            <option>Feb</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                        </select>
                        <select ref={year} onChange={handleChange}>
                            <option>Select Year</option>
                            <option>2021</option>
                            <option>2022</option>
                            <option>2023</option>
                        </select>
                        <OperationTable toggleModal = {toggleModal} />
                    </Card>
                </Grid>
            </Grid>
            <FormModal  open={isOpen}  title ={`Add Attendance`} toggleModal = {toggleModal} saveActionHandler ={saveActionHandler}>
           <AddOperationTable selectionGrid={selectionGrid} operationTypes={operationTypes}/>
            </ FormModal>
        </div>
    )
}

export default ViewOperationPage




