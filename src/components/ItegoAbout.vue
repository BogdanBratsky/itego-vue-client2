<template>
    <section class="itego-about">
        <div class="container">
            <div class="itego-about__title">
                Itego - это современный взгляд на внедрение технологий IT-аутсорсинга для бизнеса
            </div>
            <div class="itego-about__info">
                <div class="itego-about__info-img">
                    <img src="../assets/images/about.svg" alt="">
                </div>
                <div class="itego-about__info-txt">
                    <header><b>Itego</b> - специализируется на развитии и поддержке IT-инфраструктуры для малых и средних предприятий. </header>
                    <ul>
                        <li>
                            Предлагаем комплексные решения по обновлению, масштабированию и обслуживанию информационных систем, а также обеспечиваем безопасность данных и высокую доступность IT-сервисов.
                        </li>
                        <li>
                            Опыт и профессионализм позволяют нам реализовывать надежные и эффективные IT-решения, отвечающие потребностям развивающегося бизнеса.
                        </li>
                        <li>
                            Готовы стать надежным партнером в области информационных технологий для вашего предприятия.
                        </li>
                    </ul>
                </div>
            </div>
            <div class="itego-about__cards">
                <div class="itego-about__card">
                    <div class="itego-about__card-title">
                        с 2019г
                    </div>
                    помогаем бизнесам наладить IT
                </div>
                <div class="itego-about__card">
                    <div class="itego-about__card-title">
                        >__
                    </div>
                    специалистов готовы решать IT-задачи 24/7
                </div>
                <div class="itego-about__card">
                    <div class="itego-about__card-title">
                        >30
                    </div>
                    клиентов доверяют нам свою инфраструктуру
                </div>
                <div class="itego-about__card">
                    <div class="itego-about__card-title">
                        >__ ____
                    </div>
                    единиц техники уже на нашем обслуживании
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'ItegoAbout'
}
</script>

<style lang="scss">
.itego-about {
    padding: 73px 0;
    background-color: #F5F5F5;
    &__title {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 45px;
        color: #1565C0;
        margin-bottom: 125px;
    }
    &__info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 77px;
        &-img img {
            width: 458px;
        }
        &-txt {
            width: 623px;
            font-family: "Montserrat", sans-serif;
            font-weight: 400;
            font-size: 18px;
            header, li {
                margin-bottom: 21px;
            }
            li::before {
                content: url('../assets/images/marker.svg');
                // margin-right: 10px;
            }
        }
    }
    &__cards {
        display: flex;
        justify-content: space-between;
        margin-bottom: 70px;
    }
    &__card {
        width: 275px;
        padding: 36px 29px;
        background-color: white;
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        // font-size: 18px;
        border-top: 2px solid #1565C0;
        border-left: 2px solid #1565C0;
        box-shadow: 1px 5px 10px #c5c5c5;
        &-title {
            color: #1565C0;
            font-weight: 700;
            font-size: 35px;
        }
    }
}
</style>
