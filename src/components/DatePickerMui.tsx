import { Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

type Props = {
  value: Date|null|string;
  onChange: (date: any) => void;
}

function DatePickerMui({value, onChange}:Props) {
  const handleDateChange = (date: any) => {
    const formattedDate = date.toISOString().slice(0, 10);
    onChange(formattedDate)
  }

  const dateValue = typeof value === 'string' ? new Date(value) : value;

  return (
    <Stack spacing={4}>
      <DatePicker value={dateValue} onChange={handleDateChange}/>
    </Stack>
  )
}

export default DatePickerMui