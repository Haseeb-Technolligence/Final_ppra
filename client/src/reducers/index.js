import {
  DrawerReducer,
  EmployeeReducer,
  LeaveReducer,
  DepartmentReducer,
  HolidayReducer,
  SettingReducer,
  AttendanceReducer,
  DailyReducer,
  PayRollReducer,

} from "./drawerAllReducers";
import { employeesReducer } from "./employee-reducer";
import { demoReducer } from "./empdata";
import { leaveTypeReducer } from "./leave-type-reducer";
import { leaveReducer } from "./user-leave-reducer";
import { visitorReducer } from "./visitor-reducer";
import { NoticeReducer } from "./noticeReducer";
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { dptReducer } from "./dptReducer";
import { attendance } from "./attendance";

export const allReducers = combineReducers({
  DrawerReducer,
  employeesReducer,
  leaveTypeReducer,
  leaveReducer,
  visitorReducer,
  attendance,
  xyz: demoReducer,
  EmployeeReducer,
  LeaveReducer,
  DepartmentReducer,
  HolidayReducer,
  SettingReducer,
  AttendanceReducer,
  DailyReducer,
  authReducer,
  PayRollReducer,
  dptReducer,
  NoticeReducer,
});
