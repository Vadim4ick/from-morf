const DeliveryPage = () => {
  return (
    <section className="h-full pb-9 pt-[calc(var(--header-height)_+_48px)] max-mobile:min-h-[100svh] max-mobile:pb-[16px] max-mobile:pt-[calc(var(--header-height)_+_36px)]">
      <div className="container space-y-12">
        <h1 className="text-2xl font-bold">Доставка и оплата</h1>

        {/* Блок: Москва */}
        <DeliveryRegion
          title="Курьерская доставка по Москве"
          duration="1–3 дня"
          cost="Бесплатно для предоплаченных заказов от 30 000 ₽. От 550 ₽ по Москве"
        />

        {/* Блок: Санкт-Петербург */}
        <DeliveryRegion
          title="Курьерская доставка по Санкт-Петербургу"
          duration="2–5 дней"
          cost="Бесплатно для предоплаченных заказов от 30 000 ₽. От 550 ₽ по Санкт-Петербургу"
        />

        {/* Блок: Россия */}
        <DeliveryRegion
          title="Курьерская доставка по России"
          duration="2–8 дней"
          cost="Бесплатно для предоплаченных заказов от 30 000 ₽. От 690 ₽ по России"
        />
      </div>
    </section>
  );
};

const DeliveryRegion = ({
  title,
  duration,
  cost,
}: {
  title: string;
  duration: string;
  cost: string;
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">{title}</h2>

      <div className="md:grid-cols-2 grid gap-4">
        <div>
          <h3 className="font-medium text-gray-700">Сроки</h3>
          <p>{duration}</p>
        </div>

        <div>
          <h3 className="font-medium text-gray-700">Оплата</h3>
          <ul className="list-disc pl-5">
            <li>На сайте (картой)</li>
            <li>
              Наложенным платежом при получении{" "}
              <span className="text-xs text-gray-500">
                (с примеркой, не распространяется на заказы по предоплате*)
              </span>
            </li>
            <li>Долями</li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-gray-700">Стоимость</h3>
          <p>{cost}</p>
        </div>

        <div>
          <h3 className="font-medium text-gray-700">Примерка</h3>
          <ul className="list-disc pl-5">
            <li>15 минут на примерку и выбор</li>
            <li>Можно вернуть неподошедшее курьеру</li>
            <li>Не более 5 изделий в заказе</li>
            <li>Стоимость доставки оплачивается независимо от покупки</li>
            <li>Подготовьте паспорт для получения предоплаченного заказа</li>
          </ul>
        </div>
      </div>

      <p className="mt-2 text-sm text-gray-500">
        Отправка курьером только в будние дни.
      </p>
    </div>
  );
};

export default DeliveryPage;
