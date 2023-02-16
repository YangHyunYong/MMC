import React,{useEffect} from 'react';
import { pointAction } from '../redux/actions/pointAction';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from "./TablePagination.js";

const PointStatement = ({userId}) => {
  const dispatch = useDispatch();
  const getDepositAndWithdraw = () => {
    dispatch(pointAction.getDepositAndWithdrawList(userId));
  };
  const pointList = useSelector((state) => state.point.point);
  useEffect(() => getDepositAndWithdraw(), []);
  
  return (
    <div>{pointList.length>0 ? 
      <TablePagination rowsPerPageOptions={[10, 50]} pointList={pointList}></TablePagination>
    : <div>입출금 내역이 없습니다.</div>}
    </div>
  )
}

export default PointStatement