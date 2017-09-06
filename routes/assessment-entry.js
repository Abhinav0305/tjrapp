var express=require('express');

var router=express.Router();
var assessmentModal=require('../modals/assessment-modal');

router.get('/',function(request,response,next){
	assessmentModal.getAssessment(function(error,count){
		if(error){
			console.log('Error assessment entry');
		}else{
			response.json(count);
			console.log('success assessment');
		}
	});
});


router.post('/',function(request,response,next){
	var data={"patient_id" : request.body.patient_id,"gender" : request.body.gender,"age" : request.body.age,"height_ft" : request.body.height_ft,"height_in" : request.body.height_in,"weight_lbs" : request.body.weight_lbs,"use_cane" : request.body.use_cane,"surg_plan" : request.body.surg_plan,"surg_plan_text" : request.body.surg_plan_text,"cig_smoker" : request.body.cig_smoker,"smoke_yr" : request.body.smoke_yr,"cig_packs_day" : request.body.cig_packs_day,"past_smoker" : request.body.past_smoker,"KOOS_knee_problem_awareness" : request.body.KOOS_knee_problem_awareness,"KOOS_modified_lifestyle" : request.body.KOOS_modified_lifestyle,"KOOS_lack_confidence" : request.body.KOOS_lack_confidence,"KOOS_difficulty_general" : request.body.KOOS_difficulty_general,"health_general_vr" : request.body.health_general_vr,"MCCOM_obs_plum_dis" : request.body.MCCOM_obs_plum_dis,"MCCOM_conn_tiss_dis" : request.body.MCCOM_conn_tiss_dis,"MCCOM_diabetes" : request.body.MCCOM_diabetes,"MCCOM_cancer" : request.body.MCCOM_cancer,"MCCOM_liver" : request.body.MCCOM_liver,"MCCOM_peri_vasc_dis" : request.body.MCCOM_peri_vasc_dis,"MCCOM_kidney" : request.body.MCCOM_kidney,"MCCOM_ulcer" : request.body.MCCOM_ulcer,"MCCOM_aids" : request.body.MCCOM_aids,"MCCOM_paralysis" : request.body.MCCOM_paralysis,"MCCOM_ami" : request.body.MCCOM_ami,"MCCOM_carotid" : request.body.MCCOM_carotid,"MCCOM_stroke" : request.body.MCCOM_stroke,"MCCOM_other" : request.body.MCCOM_other,"MCCOM_other_explain" : request.body.MCCOM_other_explain,"OSWE_pain_intensity" : request.body.OSWE_pain_intensity,"KOOS_frequency_pain" : request.body.KOOS_frequency_pain,"KOOS_pain_twisting_pivoting" : request.body.KOOS_pain_twisting_pivoting,"KOOS_pain_straightening" : request.body.KOOS_pain_straightening,"KOOS_pain_bending" : request.body.KOOS_pain_bending,"KOOS_pain_walking_flat" : request.body.KOOS_pain_walking_flat,"KOOS_pain_on_stairs" : request.body.KOOS_pain_on_stairs,"KOOS_pain_in_bed" : request.body.KOOS_pain_in_bed,"KOOS_pain_sitting_lying" : request.body.KOOS_pain_sitting_lying,"KOOS_pain_standing" : request.body.KOOS_pain_standing,"KOOS_pain_nsk" : request.body.KOOS_pain_nsk,"KOOS_pain_rh" : request.body.KOOS_pain_rh,"KOOS_pain_lh" : request.body.KOOS_pain_lh,"KOOS_difficulty_down_stairs" : request.body.KOOS_difficulty_down_stairs,"KOOS_difficulty_up_stairs" : request.body.KOOS_difficulty_up_stairs,"KOOS_diff_rising_from_seat" : request.body.KOOS_diff_rising_from_seat,"KOOS_difficulty_standing" : request.body.KOOS_difficulty_standing,"KOOS_difficulty_bending" : request.body.KOOS_difficulty_bending,"KOOS_difficulty_walking_flat" : request.body.KOOS_difficulty_walking_flat,"KOOS_difficulty_car" : request.body.KOOS_difficulty_car,"KOOS_difficulty_shopping" : request.body.KOOS_difficulty_shopping,"KOOS_difficulty_socks" : request.body.KOOS_difficulty_socks,"KOOS_difficulty_rising_bed" : request.body.KOOS_difficulty_rising_bed,"KOOS_diff_taking_socks_off" : request.body.KOOS_diff_taking_socks_off,"KOOS_difficulty_lying_bed" : request.body.KOOS_difficulty_lying_bed,"KOOS_difficulty_bath" : request.body.KOOS_difficulty_bath,"KOOS_difficulty_sitting" : request.body.KOOS_difficulty_sitting,"KOOS_difficulty_toilet" : request.body.KOOS_difficulty_toilet,"KOOS_difficulty_heavy_domestic" : request.body.KOOS_difficulty_heavy_domestic,"KOOS_difficulty_light_domestic" : request.body.KOOS_difficulty_light_domestic,"creation_date" : request.body.creation_date,"completed_flag" : request.body.completed_flag};
	assessmentModal.addAssessment(data,function(error,count){
		if(error){
			console.log('Error assessment-entry'+error);
		}
		else
		{
			if(response.statusCode == 200)
			{
		  		response.statusCode = 201;
		  		response.statusMessage = "Created";
		  		var res = {"id": count.insertId, "creation_date" : new Date()};
				response.json(res);
				console.log(res);
	  		}
		}
	});
});


module.exports=router;