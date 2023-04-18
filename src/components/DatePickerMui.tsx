import { Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

type Props = {
  value: Date|null;
  onChange: (date: any) => void;
}

function DatePickerMui({value, onChange}:Props) {
  const handleDateChange = (date: Date | null | undefined) => {
    onChange(date)
  }

  return (
    <Stack spacing={4}>
      <DatePicker value={value} onChange={handleDateChange} format="MM / dd / yyyy" />
    </Stack>
  )
}

export default DatePickerMui