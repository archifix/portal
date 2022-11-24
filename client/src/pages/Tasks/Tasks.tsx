import React, { FC } from "react"
import photo from "../../assets/images/Zolotov_VV_Utverzhdennaya_3.jpg"
// import PageAccord from "./accordion"
import News from "../News/News"
// import Button from "../../ui/button/Button"
import { Link } from "react-router-dom"

const Tasks: FC = () => {
  return (
    <div className="relative ml-5 mr-5">
      <div className="flex flex-row flex-wrap md:flex-nowrap lg:flex-nowrap gap-[30px] mt-[20px]">
        <div className="w-full md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-3/4 3xl:w-3/4">
          <div className="left pt-7 ">
            <h4 className="uppercase font-medium text-xl ">Главная задача</h4>
            <hr className="border-1.5 border-slate-300 mt-[10px] pb-5" />
          </div>
          <div className="flex flex-row flex-wrap md:flex-nowrap lg:flex-nowrap gap-[30px]">
            <div className="static text-justify px-[15px] md:px-0 lg:px-0 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 3xl:w-1/2">
              <header>
                <h4 className="text-justify text-[15px] font-roboto text-custom-dark uppercase font-bold mb-4">
                  Главные направления(задачи) войск национальной гвардии
                  <br />
                  Российской Федерации на 2022 год
                </h4>
              </header>
              <p>
                <img
                  className="float-left pr-1"
                  src={photo}
                  width="157"
                  alt=""
                />
              </p>
              <ol className="post_item-title">
                <li>
                  1. Повышение состояния готовности к выполнению задач при
                  осложнении обстановки в мирное время с учетом прогнозов
                  развития общественно-политической ситуации, в том числе при
                  реализации специальных задач в соответствии с поручениями
                  Президента Российской Федерации.
                </li>
                <li>
                  2. Совершенствование организационной модели управления
                  войсками национальной гвардии в условиях перехода на
                  программно-целевой метод планирования служебно-боевой
                  деятельности, достижение установленных показателей Плана
                  строительства и развития войск на 2021 – 2025 годы и
                  государственной программы Российской Федерации «Обеспечение
                  защиты личности, общества и государства».
                </li>
                <li>
                  3. Сосредоточение усилий на повышении эффективности
                  деятельности соединений и воинских частей оперативного
                  назначения, специальных моторизированных частей, подразделений
                  специального назначения и разведки.
                </li>
                <li>
                  4. Приведение служебно-боевой деятельности соединений и
                  воинских частей по охране важных государственных объектов и
                  специальных грузов в соответствие с руководящими документами.
                </li>
                <li>
                  5. Принятие комплексных мер по укреплению потенциала войск и
                  повышению эффективности решения задач по участию в охране
                  общественного порядка и обеспечении общественной безопасности
                  (обеспечении усиленных мер безопасности), осуществлению
                  государственного контроля в сферах оборота оружия и охранной
                  деятельности в Российской Федерации.
                </li>
                <li>
                  6. Совершенствование механизмов социальной защиты
                  военнослужащих, сотрудников и членов их семей, а также
                  развития кадрового потенциала войск.
                </li>
                <li>
                  7. Интенсификация работы по развитию инфраструктуры и
                  наращиванию темпов технологического развития войск,
                  обеспечению комфортных условий прохождения военной службы
                  (службы) личным составом.
                </li>
                <li>
                  8. Решение задач повышения престижа службы, укрепления имиджа
                  войск национальной гвардии и доверия к ним,
                  совершенствованиесостояния взаимодействия с гражданским
                  обществом и его отдельными социальными институтами.
                </li>
                <li>
                  9. Развитие потенциала научного и научно-технического
                  обеспечения войск в рамках мероприятий проводимого Года науки
                  и технологий в Российской Федерации.
                </li>
              </ol>
            </div>
            <div className="inline-block text-justify px-[15px] md:px-0 lg:px-0 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 3xl:w-1/2">
              <header>
                <h4 className="text-justify text-[15px] font-roboto text-custom-dark uppercase font-bold mb-4">
                  Задачи войск национальной гвардии
                </h4>
              </header>
              <ol className="post_item-title text-align:justify">
                <li>
                  1. Участие в охране общественного порядка, обеспечении
                  общественной безопасности;
                </li>
                <li>
                  2. Охрана важных государственных объектов, специальных грузов,
                  сооружений на коммуникациях в соответствии с перечнями,
                  утвержденными правительством российской федерации;
                </li>
                <li>3. Участие в борьбе с терроризмом и экстремизмом;</li>
                <li>
                  4. Участие в обеспечении режимов чрезвычайного положения,
                  военного положения, правового режима контртеррористической
                  операции;
                </li>
                <li>
                  5. Участие в территориальной обороне российской федерации;
                </li>
                <li>
                  6. Оказание содействия пограничным органам федеральной службы
                  безопасности в охране государственной границы российской
                  федерации;
                </li>
                <li>
                  7. Федеральный государственный контроль (надзор) за
                  соблюдением законодательства российской федерации в области
                  оборота оружия и в области частной охранной и частной
                  детективной деятельности, а также за обеспечением безопасности
                  объектов топливно-энергетического комплекса, за деятельностью
                  подразделений охраны юридических лиц с особыми уставными
                  задачами и подразделений ведомственной охраны;
                </li>
                <li>
                  8. Охрана особо важных и режимных объектов, объектов,
                  подлежащих обязательной охране войсками национальной гвардии,
                  в соответствии с перечнем, утвержденным правительством
                  российской федерации, охрана имущества физических и
                  юридических лиц по договорам;
                </li>
                <li>
                  9. Обеспечение по решению президента российской федерации
                  безопасности высших должностных лиц субъектов российской
                  федерации (руководителей высших исполнительных органов
                  государственной власти субъектов российской федерации) и иных
                  лиц.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tasks
