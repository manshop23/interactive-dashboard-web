import { Box, Select, SelectChangeEvent, MenuItem, Chip } from '@mui/material'
import { FC, Dispatch, SetStateAction } from 'react'
import { ICharacter } from '../../interfaces/charactor'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

type CharacterSelectorProps = {
  characters: ICharacter[]
  characterName: string[]
  setCharacterName: Dispatch<SetStateAction<string[]>>
}

const CharacterSelector: FC<CharacterSelectorProps> = ({ characters, characterName, setCharacterName }) => {
  const handleChange = (event: SelectChangeEvent<typeof characterName>) => {
    const {
      target: { value }
    } = event
    setCharacterName(typeof value === 'string' ? value.split(',') : value)
  }

  return (
    <Select
      sx={{
        marginLeft: 2,
        backgroundColor: 'white',
        borderRadius: 4
      }}
      fullWidth
      multiple
      value={characterName}
      onChange={handleChange}
      renderValue={selected => (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {selected.map(value => (
            <Chip key={value} label={value} sx={{ fontSize: 16 }} />
          ))}
        </Box>
      )}
      MenuProps={MenuProps}
    >
      {characters.map(chacter => (
        <MenuItem key={chacter.name} value={chacter.name}>
          {chacter.name}
        </MenuItem>
      ))}
    </Select>
  )
}

export default CharacterSelector
