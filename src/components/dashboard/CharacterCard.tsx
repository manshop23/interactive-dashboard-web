import { Box, Checkbox, Grid, IconButton, Typography } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import Image from 'mui-image'
import { ICharacter } from '../../interfaces/charactor'
import { VolumeMute, VolumeUp, Favorite, FavoriteBorder } from '@mui/icons-material'
import useSound from 'use-sound'

type CharacterProps = {
  character: ICharacter
}
const CharacterCard: FC<CharacterProps> = ({ character }) => {
  const [emotion, setEmotion] = useState(false)
  const [mute, setMute] = useState(true)
  const rainSoundUrl = process.env.PUBLIC_URL + '/sounds/rain.mp3'
  const walkingSoundUrl = process.env.PUBLIC_URL + '/sounds/walking.mp3'
  const [playRain, { stop: stopRain }] = useSound(rainSoundUrl)
  const [playWalking, { stop: stopWalking }] = useSound(walkingSoundUrl)

  useEffect(() => {
    if (mute) {
      stopRain()
      stopWalking()
    } else {
      if (emotion) {
        stopWalking()
        playRain()
      } else {
        stopRain()
        playWalking()
      }
    }
  }, [mute, emotion])

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: 4,
        position: 'relative'
      }}
      minWidth='100%'
    >
      <Grid container>
        <Grid item md={4}>
          <Box display='flex' justifyContent='center' alignItems='center' sx={{ paddingTop: 2 }}>
            <Image
              src={character.image}
              duration={0}
              shiftDuration={0}
              style={{ borderRadius: 12 }}
              height={200}
              fit='contain'
            />
          </Box>
        </Grid>
        <Grid item md={7} sx={{ marginTop: 4, marginBottom: 4 }}>
          <Box>
            <Typography variant='h6'>ความรู้สึกต่อสภาพอากาศ</Typography>
            <Typography variant='h5'>{character.feelWeather}</Typography>
          </Box>
          <Box sx={{ marginTop: 4 }}>
            <Typography variant='h6'>ความรู้สึกต่อข่าว / สิ่งรอบตัว</Typography>
            <Typography variant='h5'>{character.feelNews}</Typography>
          </Box>
        </Grid>
        <Grid item md={1} sx={{ marginTop: 4 }}>
          <IconButton
            onClick={() => {
              setMute(!mute)
            }}
          >
            {mute ? <VolumeMute /> : <VolumeUp />}
          </IconButton>
          <Checkbox
            onChange={() => {
              setEmotion(!emotion)
            }}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
          />
        </Grid>
      </Grid>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        sx={{
          backgroundColor: '#383737',
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
          paddingTop: 2,
          paddingBottom: 2
        }}
      >
        <Typography variant='h5' color='white'>
          {character.name}
        </Typography>
      </Box>
    </Box>
  )
}

export default CharacterCard

// place holder image
