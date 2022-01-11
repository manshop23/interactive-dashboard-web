import { FC, useState } from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { connect } from "mqtt"
import type { IWeather, IPM25, ITwitter } from "./interfaces/mqtt"
import { Grid, Icon, Stack } from "@mui/material"
import { Circle } from "@mui/icons-material"
import { CharacterCard, StationCard, TwitterCard, PM25Card, CardItem, CharacterSelector } from "./components/dashboard"
import { ICharacter } from "./interfaces/charactor"

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

const mockCharacter1: ICharacter = {
  name: "โดเรม่อน",
  image: "https://i.pinimg.com/originals/b0/3e/7d/b03e7de6cf718151a6b69d487fb74cdb.png",
  feelWeather: "ร้อนมาก",
  feelNews: "รู้สึกดีมาก",
}

const mockCharacter2: ICharacter = {
  name: "โนบิตะ",
  image: "https://sites.google.com/site/pangweb12/_/rsrc/1487331408404/-nobita/No-bita.png",
  feelWeather: "ร้อน",
  feelNews: "รู้สึกดีมาก",
}

const mockCharacter3: ICharacter = {
  name: "ชิซูกะ",
  image:
    "https://sites.google.com/a/pm.ac.th/doraemon-5-8-01/_/rsrc/1511757404383/minamoto-shizuka/Shizuka_2005.png?height=400&width=314",
  feelWeather: "ร้อนนิดหน่อย",
  feelNews: "โศกเศร้า",
}

const mockCharacters: ICharacter[] = [mockCharacter1, mockCharacter2, mockCharacter3]

const App: FC = () => {
  const [characterName, setCharacterName] = useState<string[]>([mockCharacters[0].name])
  const [connectionStatue, setConnectionStatue] = useState("connecting")
  const topic = "e775b1245d94ea4a79be6ce40cf96929"
  const [station001, setStation001] = useState<IWeather>(mockStation001)
  const [station002, setStation002] = useState<IWeather>(mockStation002)
  const [pm25001, setPm25001] = useState<IPM25>(mockPM25)
  const [twitter, setTwitter] = useState<ITwitter>(mockTwitter)
  let client = connect("ws://broker.hivemq.com:8000/mqtt")
  client.on("connect", function () {
    setConnectionStatue("connected")
    client.subscribe(topic)
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
        <Grid container spacing={2} paddingTop={2}>
          <Grid item md={6}>
            <Typography variant="h3" color="white">
              Interactive device System
            </Typography>
            {/* <Stack sx={{ marginTop: 4 }} spacing={2} direction="row">
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
            </Stack> */}
            <CardItem title="รายงานข่าว">
              <TwitterCard twitter={twitter} />
            </CardItem>

            <Stack direction="row">
              <Typography variant="h4" color="white">
                Choose character:
              </Typography>
              <CharacterSelector
                characters={mockCharacters}
                characterName={characterName}
                setCharacterName={setCharacterName}
              />
            </Stack>
          </Grid>
          <Grid item md={6}>
            <CardItem title="สภาพอากาศ">
              <Grid container alignItems="flex-start" justifyContent="space-evenly" spacing={2}>
                <Grid item xs={12} md={4}>
                  <StationCard station={station001} />
                </Grid>
                <Grid item xs={12} md={4}>
                  <StationCard station={station002} />
                </Grid>
                <Grid item xs={12} md={4}>
                  <PM25Card pm25={pm25001} />
                </Grid>
              </Grid>
            </CardItem>
          </Grid>
          {mockCharacters
            .filter((character) => {
              return characterName.includes(character.name)
            })
            .map((character) => {
              return (
                <Grid key={character.name} item xs={12} md={6}>
                  <CharacterCard character={character} />
                </Grid>
              )
            })}
        </Grid>
      </Container>
    </Box>
  )
}

export default App
