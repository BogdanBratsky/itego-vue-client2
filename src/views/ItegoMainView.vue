<template>
    <div class="wrap">
        <ItegoHeader/>
        <ItegoBanner/>
    </div>
    <ItegoOutsourcing/>
    <ItegoServices/>
    <ItegoYourProblem/>
    <ItegoComparisons/>
    <ItegoAbout/>
    <!-- <ItegoForm/> -->
    <ItegoIntegration/>
    <ItegoExpert/>
    <ItegoDignities/>
    <!-- <ItegoCalculator/> -->
    <!-- <ItegoStaff/> -->
    <ItegoReviews/>
    <!-- <ItegoFAQ/> -->
    <ItegoQuestions/>
    <ItegoFooter/>
</template>

<script>
import ItegoHeader from '../components/ItegoHeader.vue'
import ItegoBanner from '../components/ItegoBanner.vue'
import ItegoOutsourcing from '../components/ItegoOutsourcing.vue'
import ItegoServices from '../components/ItegoServices.vue'
import ItegoYourProblem from '../components/ItegoYourProblem.vue'
import ItegoComparisons from '../components/ItegoComparisons.vue'
import ItegoAbout from '../components/ItegoAbout.vue'
import ItegoForm from '../components/ItegoForm.vue'
import ItegoIntegration from '../components/ItegoIntegration.vue'
import ItegoExpert from '../components/ItegoExpert.vue'
import ItegoDignities from '../components/ItegoDignities.vue'
import ItegoCalculator from '../components/ItegoCalculator.vue'
import ItegoStaff from '../components/ItegoStaff.vue'
import ItegoReviews from '../components/ItegoReviews.vue'
import ItegoFAQ from '../components/ItegoFAQ.vue'
import ItegoQuestions from '../components/ItegoQuestions.vue'
import ItegoFooter from '../components/ItegoFooter.vue'

export default {
  components: {
    ItegoHeader,
    ItegoBanner,
    ItegoOutsourcing,
    ItegoServices,
    ItegoYourProblem,
    ItegoComparisons,
    ItegoAbout,
    ItegoForm,
    ItegoIntegration,
    ItegoExpert,
    ItegoDignities,
    ItegoCalculator,
    ItegoStaff,
    ItegoReviews,
    ItegoFAQ,
    ItegoQuestions,
    ItegoFooter
  }
}
</script>

<!-- <style>
.wrap {
    background: linear-gradient(to right,
        white 0%,          /* красный от начала */
        white 35%,         /* красный на 30% */
        #C7E7EF 35%,         /* синий начинается с 30% */
        #C7E7EF 100%         /* синий до конца */
    );
}
</style> -->
