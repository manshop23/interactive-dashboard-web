import { Paper, Typography } from "@mui/material"
import { FC } from "react"

type CardTitleProps = {
  title: string
}

const CardTitle: FC<CardTitleProps> = ({ title }) => {
  return (
    <Paper
      sx={{
        backgroundColor: "#383737",
        borderRadius: 2,
        width: 200,
        paddingLeft: 2,
      }}
    >
      <Typography variant="h6" color="white">
        {title}
      </Typography>
    </Paper>
  )
}

export default CardTitle
