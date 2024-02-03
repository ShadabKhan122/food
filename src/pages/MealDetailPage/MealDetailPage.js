import React, { useEffect } from 'react'
import CategoryList from '../../components/Category/CategoryList'
import MealSingle from '../../components/Meal/MealSingle'
import { useParams } from 'react-router-dom'
import { useMealContext } from '../../context/mealContext';
import { startFetchSingleMeal } from '../../actions/mealActions';
import Loader from '../../components/Loader/Loader'
 function MealDetailPage() {
  const {id} = useParams();
  const {categories ,dispatch, meal, categoryLoading, mealLoading } = useMealContext();
  useEffect(() => {
    startFetchSingleMeal(dispatch, id);
  },[id] )

  let ingredientsArr = [], measuresArr = [], singleMeal= {};

  if (meal && meal?.length >0) {
    for (let props in meal [0]){
      if(props.includes ('strIngredient')){
         if (meal[0][props]) ingredientsArr.push(meal[0][props])
      }
      if (props.includes('strMeasure')) {
        if(meal[0][props]){
          if(meal[0][props].lenght > 1) {
            measuresArr.push(meal[0][props]);
          }
        }
      }
    }
    singleMeal = {
      id:meal[0]?.idMeal,
      title:meal[0].strMeal,
      category : meal[0]?.strcategory,
      area : meal[0]?.strArea,
      thumbnail : meal[0]?.strMealthumb,
      instructions : meal[0]?.strInstructions,
      source : meal[0]?.strSource,
      tags : meal[0]?.strTags,
      youtude :meal[0]?.strYoutude,
      ingredients : ingredientsArr,
      measures : measuresArr,
    }
  }
  console.log(ingredientsArr,measuresArr)
  return (
    <div className='my-4'>
      {(mealLoading) ? <loader/>: <MealSingle meal ={ singleMeal} />}
      (categoryLoading)? <Loader/> :   <CategoryList categories={categories} />
      
    </div>
  )
}

export default MealDetailPage
