import { Box, Stack, Typography } from '@mui/material'
import { FC } from 'react'

type CardProps = {
  title: string
}
const CardItem: FC<CardProps> = ({ title, children }) => {
  return (
    <Stack sx={{ marginTop: 4, alignContent: 'center', alignItems: 'center' }}>
      <Box sx={{ paddingBottom: 2, paddingRight: 4, paddingLeft: 4, backgroundColor: '#383737', borderRadius: 4 }}>
        <Typography variant='h5' color='white'>
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: 'white',
          borderRadius: 4,
          top: -15,
          position: 'relative'
        }}
        minWidth='100%'
      >
        {children}
      </Box>
    </Stack>
  )
}

export default CardItem
