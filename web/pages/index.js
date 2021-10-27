import { Button, Container, Grid, Heading, Box, Input, Flex } from 'theme-ui'
import { useState } from 'react'

let colours = [
  [236, 55, 80],
  [255, 142, 55],
  [241, 196, 15],
  [51, 214, 165],
  [51, 143, 218],
  [165, 51, 214],
  [0, 0, 0],
]

const xSize = 20
const ySize = 6

function generateArrayMatrix() {
  let baseArray = []
  for (let y = 0; y < ySize; y++) {
    baseArray[y] = []
    for (let x = 0; x < xSize; x++) {
      baseArray[y][x] = [0, 0, 0]
    }
  }
  return baseArray
}

function generateNewArrayMatrix(baseArray, y, x, value) {
  baseArray[y][x] = value
  console.log(value)
  return baseArray
}

export default function MyApp() {
  const [currentColourIndex, setCurrentColourIndex] = useState(0)
  const [threeDimensionalArray, setThreeDimensionalArray] = useState(
    generateArrayMatrix(),
  )
  const [theMouseIsDown, setTheMouseIsDown] = useState(false)
  return (
    <Container as="main" variant="copy">
      <Grid columns={2}>
        <Flex py={4} px={4} sx={{ minHeight: '100vh', alignItems: 'center' }}>
          <Box>
            <Heading as="h1" mb={2} sx={{ fontWeight: 800 }}>
              <i>Hack</i> The School Christmas Tree
            </Heading>
            <Grid
              columns={xSize}
              gap={0}
              sx={{
                border: '2px solid #333',
                borderRadius: 7,
                zIndex: '999',
              }}
            >
              {[...Array(xSize * ySize)].map((item, x) => (
                <Box
                  key={'square-' + x}
                  sx={{
                    border: '0.5px solid #111',
                    width: '100%',
                    paddingBottom: 'calc(100% - 2px)',
                    borderTopLeftRadius: x == 0 ? 5 : 0,
                    borderTopRightRadius: x == 19 ? 5 : 0,
                    borderBottomLeftRadius: x == 100 ? 5 : 0,
                    borderBottomRightRadius: x == 119 ? 5 : 0,
                    background:
                      threeDimensionalArray.length != 0
                        ? `rgb(${
                            threeDimensionalArray[(x - (x % xSize)) / xSize][
                              x % xSize
                            ]
                          })`
                        : 'none',
                  }}
                  onMouseDown={() => {
                    setThreeDimensionalArray([
                      ...generateNewArrayMatrix(
                        threeDimensionalArray,
                        (x - (x % xSize)) / xSize,
                        x % xSize,
                        colours[currentColourIndex],
                      ),
                    ])
                    setTheMouseIsDown(!theMouseIsDown)
                  }}
                ></Box>
              ))}
            </Grid>
            <Grid
              columns={20}
              gap={0}
              sx={{
                borderRadius: 7,
                zIndex: '999',
                mt: 2,
              }}
            >
              {[...Array(6)].map((item, x) => (
                <Box
                  key={'color-' + x}
                  sx={{
                    borderLeft: x == 0 ? 'standard' : 'none',
                    borderRight: x == 5 ? 'standard' : 'none',
                    width: '100%',
                    borderTopLeftRadius: x == 0 ? 5 : 0,
                    borderTopRightRadius: x == 5 ? 5 : 0,
                    borderBottomLeftRadius: x == 0 ? 5 : 0,
                    borderBottomRightRadius: x == 5 ? 5 : 0,
                    position: 'relative',
                    cursor: 'pointer',
                  }}
                  onClick={() => setCurrentColourIndex(x)}
                >
                  <Box
                    sx={{
                      background: `rgb(${colours[x].join(',')})`,
                      opacity: x == currentColourIndex ? 1 : 0.4,
                      height: '100%',
                      paddingBottom: '100%',
                      width: '100%',
                      borderTopLeftRadius: x == 0 ? 3 : 0,
                      borderTopRightRadius: x == 5 ? 3 : 0,
                      borderBottomLeftRadius: x == 0 ? 3 : 0,
                      borderBottomRightRadius: x == 5 ? 3 : 0,
                    }}
                  />
                </Box>
              ))}
              <Box></Box>
              <Box
                sx={{
                  background: 'white',
                  color: 'red',
                  textAlign: 'center',
                  borderRadius: 5,
                  opacity: 6 == currentColourIndex ? 1 : 0.4,
                }}
                onClick={() => setCurrentColourIndex(6)}
              >
                <span
                  style={{
                    transform: 'rotate(45deg)',
                    display: 'inline-block',
                    fontWeight: 800,
                  }}
                >
                  +
                </span>
              </Box>
            </Grid>
            <Button variant="success" mt={2}>
              Add To The Tree
            </Button>
          </Box>
        </Flex>
        <Box bg="#0c0c0c" py={4} px={4}>
          Hi
        </Box>
      </Grid>
    </Container>
  )
}
