import React from "react";
import {IChat} from "../App";
import {Grid, Typography, Box} from "@mui/material";
import LoadingGif from '../images/loading.gif';

export const Chat: React.FC<{
    chat: IChat,
    loading: boolean
}> = ({
          chat,
          loading
      }) => {
    return (
        <Grid container
              direction="column"
              justifyContent="between">
            <Grid item container
                  direction="row"
                  justifyContent="flex-end"
                  sx={{
                      mb: 1
                  }}>
                <Grid item>
                    <Typography sx={{
                        justifyContent: "flex-end",
                        p: 1,
                        pl: 2,
                        pr: 2,
                        backgroundColor: "#5555ff",
                        color: "#eee",
                        border: "1px solid #ddd",
                        borderRadius: "16px 0px 16px 16px"
                    }}>
                        {chat.question}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container
                  direction="row"
                  sx={{
                      mb: 1
                  }}>
                {
                    loading && !chat.answer ?
                        <Grid container item justifyContent="center">
                            <Grid container item xs={12} justifyContent="center">
                                <Box component="img"
                                     sx={{
                                         backgroundColor: "#5555ff",
                                         width: "4.375rem",
                                     }}
                                     alt="Waiting for response ..."
                                     src={LoadingGif}
                                />
                            </Grid>
                            <Grid container item xs={12} justifyContent="center">
                                <Typography sx={{
                                    color: '#4644B2',
                                }}>
                                    Creating magical results ... <br/>this might take a minute!
                                </Typography>
                            </Grid>
                        </Grid>
                        :
                        <Typography sx={{
                            p: 1,
                            pl: 2,
                            pr: 2,
                            border: "1px solid #ddd",
                            borderRadius: "0px 16px 16px 16px"
                        }}>
                            {chat.answer}
                        </Typography>
                }
            </Grid>
        </Grid>
    )
};

