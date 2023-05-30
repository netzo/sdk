/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact'
import { asset, Head } from '$fresh/runtime.ts'
import { Flex, Text, Title } from '@tremor/react'
import Shell from '../islands/Shell.tsx'

const title = 'Sales Dashboard'
const description =
  'A sales dashboard to track performance of sales teams in real-time, and provides a variety of metrics to help make informed decisions.'

export default () => {
  return (
    <>
      <Head>
        <title>{`${title} | Netzo`}</title>
        <meta name='description' content={description} />
      </Head>

      <main className='p-6'>
        <Flex justifyContent='justify-between' spaceX='space-x-2'>
          <Flex justifyContent='justify-start'>
            <img src={asset('/logo.svg')} className='h-8' />
            <div>
              <Title>{title}</Title>
              <Text marginTop='mt-2'>{description}</Text>
            </div>
          </Flex>
          <a href='https://netzo.io' target='_blank'>
            <img src={asset('/built-with-netzo.svg')} className='h-8' />
          </a>
        </Flex>

        <Shell />
      </main>
    </>
  )
}
