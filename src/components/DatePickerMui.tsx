import { Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

type Props = {
  value: Date|null;
  onChange: (date: Date|null) => void;
}

function DatePickerMui({value, onChange}:Props) {
  const handleDateChange = (date: Date | null) => {
    onChange(date)
  }
  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker value={value} onChange={handleDateChange}  />
    </Stack>
  )
}

export default DatePickerMui