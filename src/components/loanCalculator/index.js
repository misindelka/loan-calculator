// external imports
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// internal imports
import { constraintsData, loanOffer } from '../../api'
import { LoanSlider } from './slider'

export const LoanCalculator = () => {
  const { data: constraints } = useQuery('constraints', constraintsData)
  //will store data from loan params
  const [loanOfferData] = useState()
  // will check if are same params in loanOfferData and then setFetch or offer data to offerConfig
  const fetchOfferCondition = null
  const [fetch, setFetch] = useState(true)
  const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  const amountInt = constraints?.amountInterval
  const termInt = constraints?.termInterval
  const [amountValue, setAmountValue] = useState(amountInt?.defaultValue)
  const [lenghtValue, setLenghtValue] = useState(termInt?.defaultValue)
  const loanParams = `amount=${amountValue}&term=${lenghtValue}`
  const { data: offer } = useQuery(
    ['offer', loanParams],
    async () => {
      const data = await sleep(500)
      return data, loanOffer(loanParams)
    },
    {
      enabled: fetch,
    },
  )
  const toPayMonhly = offer?.monthlyPayment?.toFixed(2)

  const amountConfig = {
    value: amountValue,
    step: amountInt?.step,
    min: amountInt?.min,
    max: amountInt?.max,
    defaultValue: amountInt?.defaultValue,
    title: 'Loan Amount',
    detail: '$',
    setValue: setAmountValue,
  }
  const termConfig = {
    value: lenghtValue,
    step: termInt?.step,
    min: termInt?.min,
    max: termInt?.max,
    defaultValue: termInt?.defaultValue,
    title: 'Term Lenght',
    detail: 'Months',
    setValue: setLenghtValue,
  }

  const offerConfig = [
    { title: 'Monthly Payment', value: toPayMonhly, symbol: '$' },
    { title: 'Months', value: offer?.term, symbol: '' },
    { title: 'Credit Cost', value: offer?.totalCostOfCredit, symbol: '$' },
    { title: 'Total Principal', value: offer?.totalPrincipal, symbol: '$' },
    { title: 'Total Repay Amount', value: offer?.totalRepayableAmount, symbol: '$' },
  ]

  // Logs
  console.log('constraints:', 'amountInterval:', amountInt, 'termInterval', termInt)
  console.log('offer:', offer)

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ maxHeight: 300, minWidth: 270, borderRadius: 5 }}
    >
      {/* Total Loan */}
      <LoanSlider config={amountConfig} />

      {/* Total Lenght */}
      <LoanSlider config={termConfig} />

      {/* Offer */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        p={2}
        sx={{
          backgroundColor: 'primary.light',
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
        }}
      >
        {offerConfig?.map(({ title, value, symbol }, i) => (
          <Box
            key={i}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            width="100%"
            p={1}
          >
            <Box>
              <Typography sx={{ fontSize: 14 }} color="white" fontWeight="bold">
                {title}
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 14 }} color="secondary.main">
                {value} {symbol}
              </Typography>
            </Box>
          </Box>
        ))}

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width={300}
          mt={6}
        >
          <Button
            component="div"
            sx={{ backgroundColor: 'secondary.light', width: '100%', color: 'white' }}
          >
            Submit
          </Button>

          <Box mt={1}>
            <Typography variant="body2" sx={{ color: 'white', textDecoration: 'underline' }}>
              a benevolent smile?
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
