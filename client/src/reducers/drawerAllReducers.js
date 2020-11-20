export const DrawerReducer = (state = false, action) => {
  switch (action.type) {
    case "FALSE_DRAWER_STATE":
      return false;
    case "TRUE_DRAWER_STATE":
      return true;
    default:
      return state;
  }
};

export const EmployeeReducer = (state = false, action) => {
  switch (action.type) {
    case "FALSE_EMPLOYEE_STATE":
      return false;
    case "CHANGE_EMPLOYEE_STATE":
      return !state;
    default:
      return state;
  }
};
export const LeaveReducer = (state = false, action) => {
  switch (action.type) {
    case "FALSE_LEAVE_STATE":
      return false;
    case "CHANGE_LEAVE_STATE":
      return !state;
    default:
      return state;
  }
};
export const DepartmentReducer = (state = false, action) => {
  switch (action.type) {
    case "FALSE_DEPARTMENT_STATE":
      return false;
    case "CHANGE_DEPARTMENT_STATE":
      return !state;
    default:
      return state;
  }
};
export const AttendanceReducer = (state = false, action) => {
  switch (action.type) {
    case "FALSE_ATTENDANCE_STATE":
      return false;
    case "CHANGE_ATTENDANCE_STATE":
      return !state;
    default:
      return state;
  }
};
export const PayRollReducer = (state = false, action) => {
  switch (action.type) {
    case "FALSE_PAYROLL_STATE":
      return false;
    case "CHANGE_PAYROLL_STATE":
      return !state;
    default:
      return state;
  }
};
export const HolidayReducer = (state = false, action) => {
  switch (action.type) {
    case "FALSE_HOLIDAY_STATE":
      return false;
    case "CHANGE_HOLIDAY_STATE":
      return !state;
    default:
      return state;
  }
};
export const SettingReducer = (state = false, action) => {
  switch (action.type) {
    case "FALSE_SETTING_STATE":
      return false;
    case "CHANGE_SETTING_STATE":
      return !state;
    default:
      return state;
  }
};
export const DailyReducer = (state = false, action) => {
  switch (action.type) {
    case "FALSE_DAILY_STATE":
      return false;
    case "CHANGE_DAILY_STATE":
      return !state;
    default:
      return state;
  }
};
