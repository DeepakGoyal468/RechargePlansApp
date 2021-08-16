import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import plans from '../../Data/plans.json';
import styles from '../../styles/Plans/planDetailStyles';
const PlanDetail = props => {
  const [categoryPlans, setCategoryPlans] = useState();

  useEffect(() => {
    if (plans[props.value]) {
      setCategoryPlans(plans[props.value]);
    }
  }, [props.value]);

  const renderItems = ({item}) => {
    return (
      <View>
        <TouchableOpacity style={styles.planContainer}>
          <View style={styles.planHeader}>
            <Text style={styles.price}>
              {'\u20B9'}
              {item.price}
            </Text>
            <Text style={styles.selectButton}>Select</Text>
          </View>
          <View style={styles.planValidity}>
            <Text style={{fontSize: 12}}>Validity: {item.validity}</Text>
            {item.data && <Text style={{fontSize: 12}}>Data: {item.data}</Text>}
          </View>
          <Text style={styles.description}>{item.description}</Text>
        </TouchableOpacity>
        <View style={styles.horizontaLine} />
      </View>
    );
  };

  return (
    <View
      style={{
        height: '80%',
      }}>
      {categoryPlans ? (
        <FlatList
          contentContainerStyle={{flexGrow: 1}}
          nestedScrollEnabled={true}
          data={categoryPlans}
          renderItem={renderItems}
          keyExtractor={plan => plan.id}
        />
      ) : (
        <Text style={{marginTop: '50%', alignSelf: 'center'}}>
          No Plans Found
        </Text>
      )}
    </View>
  );
};

export default PlanDetail;
