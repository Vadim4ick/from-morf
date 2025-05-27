const ReturnPage = () => {
  return (
    <section className="h-full pb-9 pt-[calc(var(--header-height)_+_48px)] max-mobile:min-h-[100svh] max-mobile:pb-[16px] max-mobile:pt-[calc(var(--header-height)_+_36px)]">
      <div className="container space-y-8">
        <h1 className="text-2xl font-bold">Возврат</h1>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Правила возврата</h2>
          <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed">
            <li>
              Бесплатный курьерский возврат по России с возмещением полной
              стоимости товара, исключая цену доставки.
            </li>
            <li>
              Срок оформления возврата — <strong>в течение 14 дней</strong> с
              момента получения заказа.
            </li>
            <li>
              Для обмена необходимо сначала оформить возврат, а затем — новый
              заказ.
            </li>
            <li>
              Возвращаемый товар должен быть в оригинальном виде: с бирками,
              упаковкой, без признаков носки, стирки или повреждений.
            </li>
            <li>
              Срок возврата денежных средств —{" "}
              <strong>3–10 календарных дней</strong> после одобрения возврата. В
              отдельных случаях — до 30 дней (в зависимости от банка).
            </li>
            <li>
              Бракованный товар можно вернуть в течение <strong>30 дней</strong>{" "}
              с момента покупки.
            </li>
            <li>
              Возврат самовывоза возможен только в том магазине, где был получен
              заказ.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">
            Возврат онлайн-заказов по России с доставкой курьером
          </h2>
          <ol className="list-decimal space-y-2 pl-5 text-[15px] leading-relaxed">
            <li>
              Напишите на{" "}
              <a
                href="mailto:from_morf@mail.ru"
                className="text-blue-600 underline"
              >
                from_morf@mail.ru
              </a>{" "}
              и сообщите о желании оформить возврат.
            </li>
            <li>
              Сотрудник клиентского сервиса согласует дату и адрес для забора
              возврата.
            </li>
            <li>
              Распечатайте транспортную накладную, которую мы вышлем вам на
              почту.
            </li>
            <li>
              Заполните заявление на возврат, надежно упакуйте вещи и передайте
              их курьеру.
            </li>
            <li>
              На бесплатный возврат предоставляется <strong>2 попытки</strong>{" "}
              передачи курьеру.
            </li>
            <li>
              Отследить статус доставки возврата можно по номеру транспортной
              накладной.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ReturnPage;
