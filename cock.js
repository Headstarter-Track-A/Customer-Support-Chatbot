<Stack color={"white"}>
            <Box fontSize={50} fontWeight={900}>
              <TextGenerateEffect words={"HeadStarter Chatbot"} />
            </Box>
            <Box fontSize={20} fontWeight={200}>
              <FlipWords words={words} /> <br />
            </Box>
            <Stack
              bgcolor={"white"}
              color={"black"}
              width={120}
              height={40}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={2}
              sx={{
                "&:hover": {
                  backgroundColor: "black",
                  color: "white",
                  border: 2,
                  borderColor: "white",
                },
              }}
            >
              Join
            </Stack>
          </Stack>