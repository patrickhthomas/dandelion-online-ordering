/** @jsx jsx */
import { jsx } from "theme-ui"
import { Select, Label } from "@theme-ui/components"

export const OptionPicker = ({ name, options, onChange, selected }) => {
  return (
    <div>
      <Label
          sx={{
              fontFamily: 'quicksand',
            }}>{name}</Label>
      <Select onChange={onChange} value={selected}
              sx={{
              padding: 4,
              marginBottom: 4,
              fontFamily: 'quicksand',
            }}>
        {options.map(option => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </Select>
    </div>
  )
}
