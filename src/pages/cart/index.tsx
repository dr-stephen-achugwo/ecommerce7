import type { NextPageWithLayout } from 'next'

import { CartCheckout, CartItemDetail, CartItemImage, CartItemRemove } from 'components/cart'
import { ContentWrapper, Layout, PageSeo } from 'components/layouts'
import { Border, Heading } from 'components/ui'
import { config } from 'lib/config'
import { useCart, useLocale } from 'lib/hooks/common'
import { useFocusItem } from 'lib/hooks/state'
import { paths } from 'lib/paths'

const Cart: NextPageWithLayout = () => {
  const { cart, isEmpty } = useCart()
  const { focusItem } = useFocusItem()
  const { t } = useLocale()

  return (
    <>
      <PageSeo description="" ogImageUrl={config.defaultOGImage} path={paths.cart} title="Cart" />
      <div className="pt-2" />
      <ContentWrapper>
        {cart === undefined || isEmpty ? (
          <>
            <Heading isAutoFocus>{t.bagIsEmpty}</Heading>
            <Border />
          </>
        ) : (
          <>
            <Heading isAutoFocus>{t.bag}</Heading>
            <Border />
            <>
              {cart.lineItems.map((lineItem, i) => (
                <div className="flex flex-wrap justify-between" key={lineItem.id}>
                  <div className="flex w-1/2 flex-col justify-center pt-5 sm:w-full">
                    <CartItemImage
                      focused={focusItem === lineItem.id}
                      lineItem={lineItem}
                      priority={i === 0 || i === 1}
                    />
                  </div>
                  <div className="flex w-1/2 flex-col justify-center pt-5 sm:w-full">
                    <CartItemDetail lineItem={lineItem} />
                    <CartItemRemove cartItemId={`${lineItem.id}`} />
                  </div>
                </div>
              ))}
              <CartCheckout cart={cart} />
            </>
          </>
        )}
      </ContentWrapper>
    </>
  )
}

Cart.getLayout = (page): JSX.Element => <Layout>{page}</Layout>

export default Cart
