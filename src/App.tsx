import { FC, useState } from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { connect } from "mqtt"
import type { IWeather, IPM25, ITwitter } from "./interfaces/mqtt"
import { Divider, Grid, Icon, Paper, Stack } from "@mui/material"
import { Circle } from "@mui/icons-material"
import { CharacterCard, StationCard, TwitterCard, PM25Card, CardItem } from "./components/dashboard"

const mockStation001: IWeather = {
  name: "station001",
  type: "weather",
  data: { temp: 28.4, humid: 98, light: -1 },
}

const mockStation002: IWeather = {
  name: "station002",
  type: "weather",
  data: { temp: 30.6, humid: 55.5, light: -1 },
}

const mockPM25: IPM25 = { name: "pm25001", type: "pm25", data: { pm25: 6 } }

const mockTwitter: ITwitter = {
  quote_count: 0,
  reply_count: 0,
  retweet_count: 0,
  favorite_count: 0,
  favorited: false,
  retweeted: false,
  possibly_sensitive: false,
  filter_level: "low",
  lang: "th",
  name: "twitter",
  type: "social",
  data: {
    text: "เราว่าน้องเค้า . . . . น่ารักดีนะ \nตอนนี้ประกอบอาหารเก่งขึ้นกว่าเมื่อก่อนแล้วละ\nเมื่อก่อนเทนมใส่คอนเฟลกก็เท่แล้ว55… https://t.co/d4xTPQdZpy",
  },
}
const App: FC = () => {
  const [connectionStatue, setConnectionStatue] = useState("connecting")
  const topic = "e775b1245d94ea4a79be6ce40cf96929"
  const [station001, setStation001] = useState<IWeather>(mockStation001)
  const [station002, setStation002] = useState<IWeather>(mockStation002)
  const [pm25001, setPm25001] = useState<IPM25>(mockPM25)
  const [twitter, setTwitter] = useState<ITwitter>(mockTwitter)
  let client = connect("ws://broker.hivemq.com:8000/mqtt")
  client.subscribe(topic)
  client.on("connect", function () {
    setConnectionStatue("connected")
  })
  client.on("message", function (topic, message) {
    handleIncomingMessage(message)
  })

  const handleIncomingMessage = (message: Buffer) => {
    let data = JSON.parse(message.toString())
    if (data.name === "station001") {
      setStation001(data)
    } else if (data.name === "station002") {
      setStation002(data)
    } else if (data.name === "pm25001") {
      setPm25001(data)
    } else if (data.name === "twitter") {
      setTwitter(data)
    }
  }
  return (
    <Box
      sx={{
        background: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(64,197,255,1) 100%);",
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={2} margin={2}>
          <Grid item md={6}>
            <Typography variant="h3" color="white">
              Interactive device System
            </Typography>
            <Stack sx={{ marginTop: 4 }} spacing={2} direction="row">
              <Box>
                <Icon fontSize="large" sx={{ color: connectionStatue === "connected" ? "#33DC18" : "#FFCC2D" }}>
                  <Circle fontSize="large" />
                </Icon>
              </Box>
              <Box>
                <Typography variant="h4" color="white">
                  Status: {connectionStatue}
                </Typography>
                <Typography color="white">Subscribe Topic: {topic}</Typography>
              </Box>
            </Stack>
            <CardItem title="รายงานข่าว">
              <TwitterCard twitter={twitter} />
            </CardItem>
          </Grid>
          <Grid item md={6}>
            <CardItem title="สภาพอากาศ">
              <Stack
                direction="row"
                alignItems="flex-start"
                justifyContent="space-evenly"
                spacing={2}
                divider={<Divider orientation="vertical" variant="middle" flexItem />}
                sx={{ margin: 2 }}
              >
                <StationCard station={station001} />
                <StationCard station={station002} />
                <PM25Card pm25={pm25001} />
              </Stack>
            </CardItem>
          </Grid>
          <Grid item md={4}>
            <CharacterCard name="โดเรม่อน" feelWeather="ร้อน" feelNews="โศกเศร้า" />
          </Grid>
          <Grid item md={4}>
            <CharacterCard name="โนบิตะ" feelWeather="ร้อน" feelNews="โศกเศร้า" />
          </Grid>
          <Grid item md={4}>
            <CharacterCard name="ชิซูกะ" feelWeather="ร้อน" feelNews="โศกเศร้า" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default App
