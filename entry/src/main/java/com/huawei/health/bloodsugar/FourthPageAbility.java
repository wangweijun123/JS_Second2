package com.huawei.health.bloodsugar;

import ohos.aafwk.ability.Ability;
import ohos.aafwk.content.Intent;

public class FourthPageAbility extends Ability {

    @Override
    protected void onStart(Intent intent) {
        super.onStart(intent);
        setMainRoute(FourthPageSlice.class.getName());
    }
}
