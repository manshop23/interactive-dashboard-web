import { AutorenewRounded, ChatBubbleRounded, FavoriteRounded, Twitter } from '@mui/icons-material'
import { Box, Icon, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import { ITwitter } from '../../interfaces/mqtt'

type TwitterProps = {
  twitter: ITwitter
}
const TwitterCard: FC<TwitterProps> = ({ twitter }) => {
  return (
    <Stack direction='row' spacing={2}>
      <Box
        sx={{
          borderTopLeftRadius: 12,
          borderBottomLeftRadius: 12,
          backgroundColor: '#E2E2E2',
          padding: 2
        }}
      >
        <Icon sx={{ fontSize: 48, color: '#00acee', marginTop: 1 }}>
          <Twitter sx={{ fontSize: 48 }} />
        </Icon>
      </Box>
      <Box sx={{ padding: 2 }}>
        <Typography variant='h6'>{twitter.data.text}</Typography>
        <Stack direction='row' justifyContent='space-evenly' alignItems='center' spacing={2}>
          <Box display='flex'>
            <ChatBubbleRounded sx={{ fontSize: 24, color: '#383737', marginRight: 1 }} />
            <Typography sx={{ fontSize: 16 }}>{twitter.reply_count}</Typography>
          </Box>
          <Box display='flex'>
            <AutorenewRounded sx={{ fontSize: 24, color: '#383737', marginRight: 1 }} />
            <Typography sx={{ fontSize: 16 }}>{twitter.retweet_count}</Typography>
          </Box>
          <Box display='flex'>
            <FavoriteRounded sx={{ fontSize: 24, color: '#383737', marginRight: 1 }} />
            <Typography sx={{ fontSize: 16 }}>{twitter.favorite_count}</Typography>
          </Box>
        </Stack>
      </Box>
    </Stack>
  )
}

export default TwitterCard
