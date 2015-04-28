var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.mhcs_project;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.7.0";
var $strongName = '8518E6A2AB7EBA65861EB0EC62FC0C7B';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 2147483647, $intern_1 = 3.141592653589793, $intern_2 = {3:1, 9:1}, $intern_3 = {3:1}, $intern_4 = {14:1, 15:1, 3:1, 5:1, 4:1}, $intern_5 = {15:1, 37:1, 3:1, 5:1, 4:1}, $intern_6 = {15:1, 38:1, 3:1, 5:1, 4:1}, $intern_7 = {15:1, 39:1, 3:1, 5:1, 4:1}, $intern_8 = {19:1, 3:1, 5:1, 4:1}, $intern_9 = {15:1, 60:1, 3:1, 5:1, 4:1}, $intern_10 = {58:1, 3:1, 9:1}, $intern_11 = {44:1, 3:1, 9:1}, $intern_12 = 4194303, $intern_13 = 524288, $intern_14 = {12:1, 8:1, 11:1, 10:1, 13:1, 7:1, 6:1}, $intern_15 = 1048576, $intern_16 = 4194304, $intern_17 = 16777216, $intern_18 = 33554432, $intern_19 = 67108864, $intern_20 = {12:1, 8:1, 11:1, 10:1, 17:1, 13:1, 7:1, 6:1}, $intern_21 = {12:1, 8:1, 11:1, 10:1, 17:1, 13:1, 41:1, 7:1, 6:1}, $intern_22 = {133:1, 23:1}, $intern_23 = {12:1, 8:1, 11:1, 10:1, 17:1, 13:1, 85:1, 7:1, 6:1}, $intern_24 = {47:1, 23:1}, $intern_25 = {35:1, 3:1, 5:1, 4:1}, $intern_26 = {24:1}, $intern_27 = {3:1, 33:1}, $intern_28 = {301:1, 23:1};
var _, initFnList_0, prototypesByTypeId_0 = {}, permutationId = -1;
function typeMarkerFn(){
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function modernizeBrowser(){
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

function maybeGetClassLiteralFromPlaceHolder_0(entry){
  return entry instanceof Array?entry[0]:null;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeId, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0;
  var createSubclassPrototype = createSubclassPrototype_0;
  var maybeGetClassLiteralFromPlaceHolder = maybeGetClassLiteralFromPlaceHolder_0;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = maybeGetClassLiteralFromPlaceHolder(prototype_0);
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = prototypesByTypeId[typeId] = !superTypeId?{}:createSubclassPrototype(superTypeId);
    _.castableTypeMap$ = castableTypeMap;
    _.constructor = _;
    !superTypeId && (_.typeMarker$ = typeMarkerFn);
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz$ = clazz);
}

function createSubclassPrototype_0(superTypeId){
  var prototypesByTypeId = prototypesByTypeId_0;
  return portableObjCreate(prototypesByTypeId[superTypeId]);
}

function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function registerEntry(){
  return entry_0;
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return isJavaString(this$static)?$equals(this$static, other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals$(other):isJavaArray(this$static)?this$static === other:this$static === other;
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return isJavaString(this$static)?Ljava_lang_String_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz$:isJavaArray(this$static)?this$static.___clazz$:Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return isJavaString(this$static)?getHashCode_0(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode$():isJavaArray(this$static)?getHashCode(this$static):getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals$ = function equals(other){
  return this === other;
}
;
_.getClass$ = function getClass_0(){
  return this.___clazz$;
}
;
_.hashCode$ = function hashCode_0(){
  return getHashCode(this);
}
;
_.toString$ = function toString_0(){
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (hashCode__I__devirtual$(this) >>> 0).toString(16);
}
;
_.toString = function(){
  return this.toString$();
}
;
stringCastMap = {3:1, 338:1, 5:1, 2:1};
modernizeBrowser();
function canCast(src_0, dstId){
  return isJavaString(src_0) && !!stringCastMap[dstId] || src_0.castableTypeMap$ && !!src_0.castableTypeMap$[dstId];
}

function dynamicCast(src_0, dstId){
  if (src_0 != null && !canCast(src_0, dstId)) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastJso(src_0){
  if (src_0 != null && !(!isJavaString(src_0) && !hasTypeMarker(src_0))) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastToString(src_0){
  if (src_0 != null && !isJavaString(src_0)) {
    throw new ClassCastException;
  }
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !instanceofArray(src_0) && hasTypeMarker(src_0);
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfJso(src_0){
  return src_0 != null && !isJavaString(src_0) && !hasTypeMarker(src_0);
}

function instanceofArray(src_0){
  return Array.isArray(src_0);
}

function isJavaArray(src_0){
  return instanceofArray(src_0) && hasTypeMarker(src_0);
}

function isJavaString(src_0){
  return typeof src_0 === 'string';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return ~~Math.max(Math.min(x_0, $intern_0), -2147483648);
}

function throwClassCastExceptionUnlessNull(o){
  if (o != null) {
    throw new ClassCastException;
  }
  return null;
}

var stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function createForInterface(packageName, compoundClassName){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  clazz.modifiers = 2;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId){
  var clazz;
  clazz = createClassObject('', className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  var prototype_0 = prototypesByTypeId_0[typeId];
  return prototype_0;
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz$ = clazz;
}

defineClass(110, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString$ = function toString_15(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0), Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 110);
function $cancel(this$static){
  if (!this$static.isRunning) {
    return;
  }
  this$static.wasStarted = this$static.isStarted;
  this$static.element = null;
  this$static.isRunning = false;
  this$static.isStarted = false;
  if (this$static.requestHandle) {
    this$static.requestHandle.cancel();
    this$static.requestHandle = null;
  }
  this$static.onCancel();
}

function $run(this$static, duration, startTime, element){
  $cancel(this$static);
  this$static.isRunning = true;
  this$static.isStarted = false;
  this$static.duration = duration;
  this$static.startTime = startTime;
  this$static.element = element;
  ++this$static.runId;
  $execute(this$static.callback, now_1());
}

function $run_0(this$static, duration, element){
  $run(this$static, duration, now_1(), element);
}

function $update(this$static, curTime){
  var curRunId, finished, progress;
  curRunId = this$static.runId;
  finished = curTime >= this$static.startTime + this$static.duration;
  if (this$static.isStarted && !finished) {
    progress = (curTime - this$static.startTime) / this$static.duration;
    this$static.onUpdate((1 + Math.cos($intern_1 + progress * $intern_1)) / 2);
    return this$static.isRunning && this$static.runId == curRunId;
  }
  if (!this$static.isStarted && curTime >= this$static.startTime) {
    this$static.isStarted = true;
    this$static.onStart();
    if (!(this$static.isRunning && this$static.runId == curRunId)) {
      return false;
    }
  }
  if (finished) {
    this$static.isRunning = false;
    this$static.isStarted = false;
    this$static.onComplete();
    return false;
  }
  return true;
}

function Animation(){
  Animation_0.call(this, (!instance && (instance = !!$wnd.requestAnimationFrame && !!$wnd.cancelAnimationFrame?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance));
}

function Animation_0(scheduler){
  this.callback = new Animation$1(this);
  this.scheduler = scheduler;
}

defineClass(91, 1, {});
_.onCancel = function onCancel(){
  this.wasStarted && this.onComplete();
}
;
_.onComplete = function onComplete(){
  this.onUpdate((1 + cos_0(6.283185307179586)) / 2);
}
;
_.onStart = function onStart(){
  this.onUpdate((1 + cos_0($intern_1)) / 2);
}
;
_.duration = -1;
_.isRunning = false;
_.isStarted = false;
_.runId = -1;
_.startTime = -1;
_.wasStarted = false;
var Lcom_google_gwt_animation_client_Animation_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation', 91);
function $execute(this$static, timestamp){
  $update(this$static.this$01, timestamp)?(this$static.this$01.requestHandle = this$static.this$01.scheduler.requestAnimationFrame_0(this$static.this$01.callback, this$static.this$01.element)):(this$static.this$01.requestHandle = null);
}

function Animation$1(this$0){
  this.this$01 = this$0;
}

defineClass(154, 1, {}, Animation$1);
_.execute = function execute(timestamp){
  $execute(this, timestamp);
}
;
var Lcom_google_gwt_animation_client_Animation$1_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation/1', 154);
defineClass(323, 1, {});
var instance;
var Lcom_google_gwt_animation_client_AnimationScheduler_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler', 323);
defineClass(92, 1, {92:1});
var Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler/AnimationHandle', 92);
function AnimationSchedulerImplStandard(){
}

function cancelImpl(holder){
  $wnd.cancelAnimationFrame(holder.id);
}

function requestImpl(cb, element){
  var callback = $entry(function(){
    var time = now_1();
    cb.execute(time);
  }
  );
  var handle = $wnd.requestAnimationFrame(callback, element);
  return {id:handle};
}

defineClass(294, 323, {}, AnimationSchedulerImplStandard);
_.requestAnimationFrame_0 = function requestAnimationFrame(callback, element){
  var handle;
  handle = requestImpl(callback, element);
  return new AnimationSchedulerImplStandard$1(handle);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard', 294);
function AnimationSchedulerImplStandard$1(val$handle){
  this.val$handle2 = val$handle;
}

defineClass(295, 92, {92:1}, AnimationSchedulerImplStandard$1);
_.cancel = function cancel(){
  cancelImpl(this.val$handle2);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard/1', 295);
function $cancelAnimationFrame(this$static, requestId){
  $remove_13(this$static.animationRequests, requestId);
  this$static.animationRequests.array.length == 0 && $cancel_0(this$static.timer);
}

function $updateAnimations(this$static){
  var curAnimations, duration, requestId, requestId$index, requestId$max;
  curAnimations = initDim(Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit, {347:1, 3:1}, 108, this$static.animationRequests.array.length, 0, 1);
  curAnimations = dynamicCast($toArray_0(this$static.animationRequests, curAnimations), 347);
  duration = new Duration;
  for (requestId$index = 0 , requestId$max = curAnimations.length; requestId$index < requestId$max; ++requestId$index) {
    requestId = curAnimations[requestId$index];
    $remove_13(this$static.animationRequests, requestId);
    $execute(requestId.callback, duration.start_0);
  }
  this$static.animationRequests.array.length > 0 && $schedule(this$static.timer, max_0(5, 16 - (now_1() - duration.start_0)));
}

function AnimationSchedulerImplTimer(){
  this.animationRequests = new ArrayList;
  this.timer = new AnimationSchedulerImplTimer$1(this);
}

defineClass(296, 323, {}, AnimationSchedulerImplTimer);
_.requestAnimationFrame_0 = function requestAnimationFrame_0(callback, element){
  var requestId;
  requestId = new AnimationSchedulerImplTimer$AnimationHandleImpl(this, callback);
  $add_8(this.animationRequests, requestId);
  this.animationRequests.array.length == 1 && $schedule(this.timer, 16);
  return requestId;
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer', 296);
function $cancel_0(this$static){
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0(this$static.timerId.value_0):clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw new IllegalArgumentException_0('must be non-negative');
  }
  !!this$static.timerId && $cancel_0(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
}

function Timer(){
}

function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

defineClass(101, 1, {});
_.fire = function fire(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  this.run();
}
;
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 101);
function AnimationSchedulerImplTimer$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(297, 101, {}, AnimationSchedulerImplTimer$1);
_.run = function run(){
  $updateAnimations(this.this$01);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/1', 297);
function AnimationSchedulerImplTimer$AnimationHandleImpl(this$0, callback){
  this.this$01 = this$0;
  this.callback = callback;
}

defineClass(108, 92, {92:1, 108:1}, AnimationSchedulerImplTimer$AnimationHandleImpl);
_.cancel = function cancel_0(){
  $cancelAnimationFrame(this.this$01, this);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/AnimationHandleImpl', 108);
function $getAriaValue(value_0){
  var buf, item_0, item$index, item$max;
  buf = new StringBuilder;
  for (item$index = 0 , item$max = value_0.length; item$index < item$max; ++item$index) {
    item_0 = value_0[item$index];
    $append_0((buf.string += '' + item_0 , buf), ' ');
  }
  return $trim(buf.string);
}

function $set(this$static, element, values){
  $setAttribute(element, this$static.name_0, $getAriaValue(values));
}

function Attribute(name_0){
  this.name_0 = name_0;
}

defineClass(129, 1, {});
var Lcom_google_gwt_aria_client_Attribute_2_classLit = createForClass('com.google.gwt.aria.client', 'Attribute', 129);
function AriaValueAttribute(name_0){
  Attribute.call(this, name_0);
}

defineClass(63, 129, {}, AriaValueAttribute);
var Lcom_google_gwt_aria_client_AriaValueAttribute_2_classLit = createForClass('com.google.gwt.aria.client', 'AriaValueAttribute', 63);
function PrimitiveValueAttribute(name_0){
  Attribute.call(this, name_0);
}

defineClass(107, 129, {}, PrimitiveValueAttribute);
var Lcom_google_gwt_aria_client_PrimitiveValueAttribute_2_classLit = createForClass('com.google.gwt.aria.client', 'PrimitiveValueAttribute', 107);
function $clinit_State(){
  $clinit_State = emptyMethod;
  new PrimitiveValueAttribute('aria-busy');
  new AriaValueAttribute('aria-checked');
  new PrimitiveValueAttribute('aria-disabled');
  new AriaValueAttribute('aria-expanded');
  new AriaValueAttribute('aria-grabbed');
  HIDDEN = new PrimitiveValueAttribute('aria-hidden');
  new AriaValueAttribute('aria-invalid');
  new AriaValueAttribute('aria-pressed');
  new AriaValueAttribute('aria-selected');
}

var HIDDEN;
function Duration(){
  this.start_0 = now_1();
}

defineClass(127, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 127);
function isScript(){
  return true;
}

function $initCause(this$static, cause){
  checkState_0(!this$static.cause);
  checkCriticalArgument(cause != this$static, 'Self-causation not permitted');
  this$static.cause = cause;
  return this$static;
}

function $toString(this$static){
  var className, msg;
  className = $getName(this$static.___clazz$);
  msg = this$static.getMessage();
  return msg != null?className + ': ' + msg:className;
}

function Throwable(message, cause){
  this.cause = cause;
  this.detailMessage = message;
  captureStackTrace(this, this.detailMessage);
}

defineClass(9, 1, $intern_2);
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.toString$ = function toString_1(){
  return $toString(this);
}
;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 9);
function Exception(message){
  this.detailMessage = message;
  captureStackTrace(this, this.detailMessage);
}

defineClass(54, 9, $intern_2);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 54);
function RuntimeException(){
  captureStackTrace(this, this.detailMessage);
}

function RuntimeException_0(message){
  Exception.call(this, message);
}

function RuntimeException_1(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(18, 54, $intern_2, RuntimeException_0);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 18);
defineClass(135, 18, $intern_2);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 135);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(dynamicCastJso(exception)):isJavaString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(dynamicCastJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  this.cause = null;
  this.detailMessage = null;
  this.description = '';
  this.e = e;
  this.description = '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(34, 135, {34:1, 3:1, 9:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  return $ensureInit(this) , this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 34);
function $push(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function $push_0(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function $setLength(this$static, newLength){
  this$static.length = newLength;
}

function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

function escapeChar(c, escapeTable){
  var lookedUp = escapeTable_0[c.charCodeAt(0)];
  return lookedUp == null?c:lookedUp;
}

function escapeJsonForEval(toEscape){
  var escapeTable = getEscapeTable();
  var s = toEscape.replace(/[\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb]/g, function(x_0){
    return escapeChar(x_0, escapeTable);
  }
  );
  return s;
}

function escapeValue(toEscape){
  var escapeTable = getEscapeTable();
  var s = toEscape.replace(/[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g, function(x_0){
    return escapeChar(x_0, escapeTable);
  }
  );
  return '"' + s + '"';
}

function getEscapeTable(){
  !escapeTable_0 && (escapeTable_0 = initEscapeTable());
  return escapeTable_0;
}

function initEscapeTable(){
  var out = ['\\u0000', '\\u0001', '\\u0002', '\\u0003', '\\u0004', '\\u0005', '\\u0006', '\\u0007', '\\b', '\\t', '\\n', '\\u000B', '\\f', '\\r', '\\u000E', '\\u000F', '\\u0010', '\\u0011', '\\u0012', '\\u0013', '\\u0014', '\\u0015', '\\u0016', '\\u0017', '\\u0018', '\\u0019', '\\u001A', '\\u001B', '\\u001C', '\\u001D', '\\u001E', '\\u001F'];
  out[34] = '\\"';
  out[92] = '\\\\';
  out[173] = '\\u00ad';
  out[1536] = '\\u0600';
  out[1537] = '\\u0601';
  out[1538] = '\\u0602';
  out[1539] = '\\u0603';
  out[1757] = '\\u06dd';
  out[1807] = '\\u070f';
  out[6068] = '\\u17b4';
  out[6069] = '\\u17b5';
  out[8203] = '\\u200b';
  out[8204] = '\\u200c';
  out[8205] = '\\u200d';
  out[8206] = '\\u200e';
  out[8207] = '\\u200f';
  out[8232] = '\\u2028';
  out[8233] = '\\u2029';
  out[8234] = '\\u202a';
  out[8235] = '\\u202b';
  out[8236] = '\\u202c';
  out[8237] = '\\u202d';
  out[8238] = '\\u202e';
  out[8288] = '\\u2060';
  out[8289] = '\\u2061';
  out[8290] = '\\u2062';
  out[8291] = '\\u2063';
  out[8292] = '\\u2064';
  out[8298] = '\\u206a';
  out[8299] = '\\u206b';
  out[8300] = '\\u206c';
  out[8301] = '\\u206d';
  out[8302] = '\\u206e';
  out[8303] = '\\u206f';
  out[65279] = '\\ufeff';
  out[65529] = '\\ufff9';
  out[65530] = '\\ufffa';
  out[65531] = '\\ufffb';
  return out;
}

var escapeTable_0;
defineClass(304, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 304);
function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  return function(){
    if (isScript()) {
      return entry0(jsFunction, this, arguments);
    }
     else {
      var __0 = entry0(jsFunction, this, arguments);
      __0 != null && (__0 = __0.val);
      return __0;
    }
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry;
  initialEntry = enter();
  try {
    return apply_0(jsFunction, thisObj, args);
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function getHashCode(o){
  return o.$H || (o.$H = ++sNextHashId);
}

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, sNextHashId = 0, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function $flushPostEventPumpCommands(this$static){
  var oldDeferred;
  if (this$static.deferredCommands) {
    oldDeferred = this$static.deferredCommands;
    this$static.deferredCommands = null;
    !this$static.incrementalCommands && (this$static.incrementalCommands = []);
    runScheduledTasks(oldDeferred, this$static.incrementalCommands);
  }
  !!this$static.incrementalCommands && (this$static.incrementalCommands = $runRepeatingTasks(this$static.incrementalCommands));
}

function $isWorkQueued(this$static){
  return !!this$static.deferredCommands || !!this$static.incrementalCommands;
}

function $maybeSchedulePostEventPumpCommands(this$static){
  if (!this$static.shouldBeRunning) {
    this$static.shouldBeRunning = true;
    !this$static.flusher && (this$static.flusher = new SchedulerImpl$Flusher(this$static));
    scheduleFixedDelayImpl(this$static.flusher, 1);
    !this$static.rescue && (this$static.rescue = new SchedulerImpl$Rescuer(this$static));
    scheduleFixedDelayImpl(this$static.rescue, 50);
  }
}

function $runRepeatingTasks(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i, length_0, newTasks, t;
  length_0 = tasks.length;
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = new Duration;
  while (now_1() - duration.start_0 < 16) {
    executedSomeTask = false;
    for (i = 0; i < length_0; i++) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      executedSomeTask = true;
      if (!t[0].execute_0()) {
        tasks[i] = null;
        canceledSomeTasks = true;
      }
    }
    if (!executedSomeTask) {
      break;
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length_0; i++) {
      !!tasks[i] && $push(newTasks, tasks[i]);
    }
    return newTasks.length == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}

function $scheduleDeferred(this$static, cmd){
  this$static.deferredCommands = push_0(this$static.deferredCommands, [cmd, false]);
  $maybeSchedulePostEventPumpCommands(this$static);
}

function $scheduleFinally(this$static, cmd){
  this$static.finallyCommands = push_0(this$static.finallyCommands, [cmd, false]);
}

function SchedulerImpl(){
}

function execute_0(cmd){
  return cmd.execute_0();
}

function push_0(queue, task){
  !queue && (queue = []);
  $push(queue, task);
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].execute_0() && (rescheduled = push_0(rescheduled, t)):t[0].execute_1();
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 9)) {
        e = $e0;
        reportToBrowser(instanceOf(e, 34)?dynamicCast(e, 34).getThrown():e);
      }
       else 
        throw unwrap($e0);
    }
  }
  return rescheduled;
}

function scheduleFixedDelayImpl(cmd, delayMs){
  $clinit_SchedulerImpl();
  function callback(){
    var ret = $entry(execute_0)(cmd);
    !isScript() && (ret = ret == true);
    ret && $wnd.setTimeout(callback, delayMs);
  }

  $wnd.setTimeout(callback, delayMs);
}

defineClass(249, 304, {}, SchedulerImpl);
_.flushRunning = false;
_.shouldBeRunning = false;
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 249);
function SchedulerImpl$Flusher(this$0){
  this.this$01 = this$0;
}

defineClass(250, 1, {}, SchedulerImpl$Flusher);
_.execute_0 = function execute_1(){
  this.this$01.flushRunning = true;
  $flushPostEventPumpCommands(this.this$01);
  this.this$01.flushRunning = false;
  return this.this$01.shouldBeRunning = $isWorkQueued(this.this$01);
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Flusher', 250);
function SchedulerImpl$Rescuer(this$0){
  this.this$01 = this$0;
}

defineClass(251, 1, {}, SchedulerImpl$Rescuer);
_.execute_0 = function execute_2(){
  this.this$01.flushRunning && scheduleFixedDelayImpl(this.this$01.flusher, 1);
  return this.this$01.shouldBeRunning;
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Rescuer', 251);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !(!!Error.stackTraceLimit || 'stack' in new Error);
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(throwable, reference){
  $clinit_StackTraceCreator();
  collector.collect(throwable, reference);
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

var collector;
defineClass(315, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 315);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(136, 315, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(t, thrownIgnored){
  var seen = {}, name_1;
  t.fnStack = [];
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    t.fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 136);
function $clinit_StackTraceCreator$CollectorModern(){
  $clinit_StackTraceCreator$CollectorModern = emptyMethod;
  Error.stackTraceLimit = 64;
}

defineClass(316, 315, {});
_.collect = function collect_0(t, jsThrown){
  function fixIE(e){
    if (!('stack' in e)) {
      try {
        throw e;
      }
       catch (ignored) {
      }
    }
    return e;
  }

  var backingJsError;
  typeof jsThrown == 'string'?(backingJsError = fixIE(new Error(jsThrown))):jsThrown instanceof Object && 'stack' in jsThrown?(backingJsError = jsThrown):(backingJsError = fixIE(new Error));
  t.__gwt$backingJsError = backingJsError;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 316);
function StackTraceCreator$CollectorModernNoSourceMap(){
  $clinit_StackTraceCreator$CollectorModern();
}

defineClass(137, 316, {}, StackTraceCreator$CollectorModernNoSourceMap);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 137);
function checkCriticalArgument(expression, errorMessage){
  if (!expression) {
    throw new IllegalArgumentException_0('' + errorMessage);
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw new NoSuchElementException;
  }
}

function checkElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkNotNull(reference){
  if (!reference) {
    throw new NullPointerException;
  }
  return reference;
}

function checkPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkState(expression){
  if (!expression) {
    throw new IllegalStateException;
  }
}

function checkState_0(expression){
  if (!expression) {
    throw new IllegalStateException_0("Can't overwrite cause");
  }
}

function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function $removeFromParent(this$static){
  var parent_0;
  parent_0 = $getParentElement(this$static);
  !!parent_0 && parent_0.removeChild(this$static);
}

function $replaceChild(this$static, newChild, oldChild){
  return this$static.replaceChild(newChild, oldChild);
}

function is(o){
  try {
    return !!o && !!o.nodeType;
  }
   catch (e) {
    return false;
  }
}

function $addClassName(this$static, className){
  var idx, oldClassName;
  className = trimClassName(className);
  oldClassName = $getClassName(this$static);
  idx = indexOfName(oldClassName, className);
  if (idx == -1) {
    oldClassName.length > 0?$setClassName(this$static, oldClassName + ' ' + className):$setClassName(this$static, className);
    return true;
  }
  return false;
}

function $getClassName(this$static){
  return this$static.className || '';
}

function $getPropertyInt(this$static, name_0){
  return parseInt(this$static[name_0]) | 0;
}

function $getPropertyString(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function $getSubPixelOffsetWidth(this$static){
  return this$static.offsetWidth || 0;
}

function $removeClassName(this$static, className){
  var begin, end, idx, newClassName, oldStyle;
  className = trimClassName(className);
  oldStyle = $getClassName(this$static);
  idx = indexOfName(oldStyle, className);
  if (idx != -1) {
    begin = $trim(oldStyle.substr(0, idx));
    end = $trim($substring(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    $setClassName(this$static, newClassName);
    return true;
  }
  return false;
}

function $setAttribute(this$static, name_0, value_0){
  this$static.setAttribute(name_0, value_0);
}

function $setClassName(this$static, className){
  this$static.className = className || '';
}

function $setId(this$static, id_0){
  this$static.id = id_0;
}

function $setInnerHTML(this$static, html){
  this$static.innerHTML = html || '';
}

function $setPropertyInt(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $setPropertyString(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $setTabIndex(this$static, tabIndex){
  this$static.tabIndex = tabIndex;
}

function indexOfName(nameList, name_0){
  var idx, last, lastPos;
  idx = nameList.indexOf(name_0);
  while (idx != -1) {
    if (idx == 0 || nameList.charCodeAt(idx - 1) == 32) {
      last = idx + name_0.length;
      lastPos = nameList.length;
      if (last == lastPos || last < lastPos && nameList.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = nameList.indexOf(name_0, idx + 1);
  }
  return idx;
}

function is_0(o){
  if (is(o)) {
    return !!o && o.nodeType == 1;
  }
  return false;
}

function trimClassName(className){
  className = $trim(className);
  return className;
}

function $play(this$static){
  this$static.play();
}

function $setSrc(this$static, url_0){
  this$static.src = url_0;
}

function $createInputElement(doc, type_0){
  var e = doc.createElement('INPUT');
  e.type = type_0;
  return e;
}

function $eventGetAltKey(evt){
  return !!evt.altKey;
}

function $eventGetCtrlKey(evt){
  return !!evt.ctrlKey;
}

function $eventGetKeyCode(evt){
  return evt.keyCode | 0;
}

function $eventGetMetaKey(evt){
  return !!evt.metaKey;
}

function $eventGetShiftKey(evt){
  return !!evt.shiftKey;
}

function $eventGetSubPixelClientX(evt){
  return evt.clientX || 0;
}

function $eventGetSubPixelClientY(evt){
  return evt.clientY || 0;
}

function $eventStopPropagation(evt){
  evt.stopPropagation();
}

function $getFirstChildElement(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function $getParentElement(node){
  var parent_0 = node.parentNode;
  (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null);
  return parent_0;
}

function $selectAdd(select, option, before){
  select.add(option, before);
}

function $createInputRadioElement(doc, name_0){
  var elem = doc.createElement('INPUT');
  elem.type = 'radio';
  elem.name = name_0;
  elem.value = 'on';
  return elem;
}

function $dispatchEvent(target, evt){
  target.dispatchEvent(evt);
}

function $eventPreventDefault(evt){
  evt.preventDefault();
}

function $setInnerText(elem, text_0){
  elem.textContent = text_0 || '';
}

function $createScriptElement(doc, source){
  var elem;
  elem = doc.createElement('script');
  $setInnerText(elem, source);
  return elem;
}

function $eventGetCurrentTarget(event_0){
  return event_0.currentTarget || $wnd;
}

function $isRTL(elem){
  return elem.ownerDocument.defaultView.getComputedStyle(elem, '').direction == 'rtl';
}

function $getAbsoluteLeft(elem){
  var left;
  left = $getBoundingClientRectLeft(elem) + $wnd.pageXOffset;
  $isRTL(elem) && (left += $getParentOffsetDelta(elem));
  return left | 0;
}

function $getBoundingClientRectLeft(elem){
  try {
    return elem.getBoundingClientRect().left;
  }
   catch (e) {
    return 0;
  }
}

function $getBoundingClientRectTop(elem){
  try {
    return elem.getBoundingClientRect().top;
  }
   catch (e) {
    return 0;
  }
}

function $getParentOffsetDelta(elem){
  var offsetParent = elem.offsetParent;
  if (offsetParent) {
    return offsetParent.offsetWidth - offsetParent.clientWidth;
  }
  return 0;
}

function $getTabIndex(elem){
  return elem.tabIndex < 65535?elem.tabIndex:-(elem.tabIndex % 65535) - 1;
}

function $selectRemoveOption(select, index_0){
  try {
    select.remove(index_0);
  }
   catch (e) {
    select.removeChild(select.childNodes[index_0]);
  }
}

function isOrHasChildImpl(parent_0, child){
  if (parent_0.nodeType != 1 && parent_0.nodeType != 9) {
    return parent_0 == child;
  }
  if (child.nodeType != 1) {
    child = child.parentNode;
    if (!child) {
      return false;
    }
  }
  if (parent_0.nodeType == 9) {
    return parent_0 === child || parent_0.body && parent_0.body.contains(child);
  }
   else {
    return parent_0 === child || parent_0.contains(child);
  }
}

function $createUniqueId(this$static){
  !this$static.gwt_uid && (this$static.gwt_uid = 1);
  return 'gwt-uid-' + this$static.gwt_uid++;
}

function $getClientHeight(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientHeight | 0;
}

function $getClientWidth(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientWidth | 0;
}

function $getScrollHeight(this$static){
  return (($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollHeight || 0) | 0;
}

function $getScrollWidth(this$static){
  return (($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollWidth || 0) | 0;
}

function $setSrc_0(this$static, src_0){
  this$static.src = src_0;
}

function $isChecked(this$static){
  return !!this$static.checked;
}

function $isDefaultChecked(this$static){
  return !!this$static.defaultChecked;
}

function $setAccessKey(this$static, accessKey){
  this$static.accessKey = accessKey;
}

function $setChecked(this$static, checked){
  this$static.checked = checked;
}

function $setDefaultChecked(this$static, defaultChecked){
  this$static.defaultChecked = defaultChecked;
}

function $setDisabled(this$static, disabled){
  this$static.disabled = disabled;
}

function $setHtmlFor(this$static, htmlFor){
  this$static.htmlFor = htmlFor;
}

function $setSelectedIndex(this$static, index_0){
  this$static.selectedIndex = index_0;
}

function $setSize(this$static, size_0){
  this$static.size = size_0;
}

function $setPropertyImpl(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $toString_0(this$static){
  return this$static.name_0 != null?this$static.name_0:'' + this$static.ordinal;
}

function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(4, 1, {3:1, 5:1, 4:1});
_.equals$ = function equals_0(other){
  return this === other;
}
;
_.hashCode$ = function hashCode_1(){
  return getHashCode(this);
}
;
_.toString$ = function toString_2(){
  return $toString_0(this);
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 4);
function $clinit_Style$Display(){
  $clinit_Style$Display = emptyMethod;
  NONE = new Style$Display$1;
  BLOCK = new Style$Display$2;
  INLINE = new Style$Display$3;
  INLINE_BLOCK = new Style$Display$4;
  INLINE_TABLE = new Style$Display$5;
  LIST_ITEM = new Style$Display$6;
  RUN_IN = new Style$Display$7;
  TABLE = new Style$Display$8;
  TABLE_CAPTION = new Style$Display$9;
  TABLE_COLUMN_GROUP = new Style$Display$10;
  TABLE_HEADER_GROUP = new Style$Display$11;
  TABLE_FOOTER_GROUP = new Style$Display$12;
  TABLE_ROW_GROUP = new Style$Display$13;
  TABLE_CELL = new Style$Display$14;
  TABLE_COLUMN = new Style$Display$15;
  TABLE_ROW = new Style$Display$16;
  INITIAL = new Style$Display$17;
}

function Style$Display(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_0(){
  $clinit_Style$Display();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Display_2_classLit, 1), $intern_3, 14, 0, [NONE, BLOCK, INLINE, INLINE_BLOCK, INLINE_TABLE, LIST_ITEM, RUN_IN, TABLE, TABLE_CAPTION, TABLE_COLUMN_GROUP, TABLE_HEADER_GROUP, TABLE_FOOTER_GROUP, TABLE_ROW_GROUP, TABLE_CELL, TABLE_COLUMN, TABLE_ROW, INITIAL]);
}

defineClass(14, 4, $intern_4);
var BLOCK, INITIAL, INLINE, INLINE_BLOCK, INLINE_TABLE, LIST_ITEM, NONE, RUN_IN, TABLE, TABLE_CAPTION, TABLE_CELL, TABLE_COLUMN, TABLE_COLUMN_GROUP, TABLE_FOOTER_GROUP, TABLE_HEADER_GROUP, TABLE_ROW, TABLE_ROW_GROUP;
var Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display', 14, values_0);
function Style$Display$1(){
  Style$Display.call(this, 'NONE', 0);
}

defineClass(192, 14, $intern_4, Style$Display$1);
var Lcom_google_gwt_dom_client_Style$Display$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/1', 192, null);
function Style$Display$10(){
  Style$Display.call(this, 'TABLE_COLUMN_GROUP', 9);
}

defineClass(201, 14, $intern_4, Style$Display$10);
var Lcom_google_gwt_dom_client_Style$Display$10_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/10', 201, null);
function Style$Display$11(){
  Style$Display.call(this, 'TABLE_HEADER_GROUP', 10);
}

defineClass(202, 14, $intern_4, Style$Display$11);
var Lcom_google_gwt_dom_client_Style$Display$11_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/11', 202, null);
function Style$Display$12(){
  Style$Display.call(this, 'TABLE_FOOTER_GROUP', 11);
}

defineClass(203, 14, $intern_4, Style$Display$12);
var Lcom_google_gwt_dom_client_Style$Display$12_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/12', 203, null);
function Style$Display$13(){
  Style$Display.call(this, 'TABLE_ROW_GROUP', 12);
}

defineClass(204, 14, $intern_4, Style$Display$13);
var Lcom_google_gwt_dom_client_Style$Display$13_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/13', 204, null);
function Style$Display$14(){
  Style$Display.call(this, 'TABLE_CELL', 13);
}

defineClass(205, 14, $intern_4, Style$Display$14);
var Lcom_google_gwt_dom_client_Style$Display$14_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/14', 205, null);
function Style$Display$15(){
  Style$Display.call(this, 'TABLE_COLUMN', 14);
}

defineClass(206, 14, $intern_4, Style$Display$15);
var Lcom_google_gwt_dom_client_Style$Display$15_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/15', 206, null);
function Style$Display$16(){
  Style$Display.call(this, 'TABLE_ROW', 15);
}

defineClass(207, 14, $intern_4, Style$Display$16);
var Lcom_google_gwt_dom_client_Style$Display$16_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/16', 207, null);
function Style$Display$17(){
  Style$Display.call(this, 'INITIAL', 16);
}

defineClass(208, 14, $intern_4, Style$Display$17);
var Lcom_google_gwt_dom_client_Style$Display$17_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/17', 208, null);
function Style$Display$2(){
  Style$Display.call(this, 'BLOCK', 1);
}

defineClass(193, 14, $intern_4, Style$Display$2);
var Lcom_google_gwt_dom_client_Style$Display$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/2', 193, null);
function Style$Display$3(){
  Style$Display.call(this, 'INLINE', 2);
}

defineClass(194, 14, $intern_4, Style$Display$3);
var Lcom_google_gwt_dom_client_Style$Display$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/3', 194, null);
function Style$Display$4(){
  Style$Display.call(this, 'INLINE_BLOCK', 3);
}

defineClass(195, 14, $intern_4, Style$Display$4);
var Lcom_google_gwt_dom_client_Style$Display$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/4', 195, null);
function Style$Display$5(){
  Style$Display.call(this, 'INLINE_TABLE', 4);
}

defineClass(196, 14, $intern_4, Style$Display$5);
var Lcom_google_gwt_dom_client_Style$Display$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/5', 196, null);
function Style$Display$6(){
  Style$Display.call(this, 'LIST_ITEM', 5);
}

defineClass(197, 14, $intern_4, Style$Display$6);
var Lcom_google_gwt_dom_client_Style$Display$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/6', 197, null);
function Style$Display$7(){
  Style$Display.call(this, 'RUN_IN', 6);
}

defineClass(198, 14, $intern_4, Style$Display$7);
var Lcom_google_gwt_dom_client_Style$Display$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/7', 198, null);
function Style$Display$8(){
  Style$Display.call(this, 'TABLE', 7);
}

defineClass(199, 14, $intern_4, Style$Display$8);
var Lcom_google_gwt_dom_client_Style$Display$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/8', 199, null);
function Style$Display$9(){
  Style$Display.call(this, 'TABLE_CAPTION', 8);
}

defineClass(200, 14, $intern_4, Style$Display$9);
var Lcom_google_gwt_dom_client_Style$Display$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/9', 200, null);
function $clinit_Style$Overflow(){
  $clinit_Style$Overflow = emptyMethod;
  VISIBLE = new Style$Overflow$1;
  HIDDEN_0 = new Style$Overflow$2;
  SCROLL = new Style$Overflow$3;
  AUTO = new Style$Overflow$4;
}

function Style$Overflow(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1(){
  $clinit_Style$Overflow();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, 1), $intern_3, 37, 0, [VISIBLE, HIDDEN_0, SCROLL, AUTO]);
}

defineClass(37, 4, $intern_5);
var AUTO, HIDDEN_0, SCROLL, VISIBLE;
var Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow', 37, values_1);
function Style$Overflow$1(){
  Style$Overflow.call(this, 'VISIBLE', 0);
}

defineClass(209, 37, $intern_5, Style$Overflow$1);
var Lcom_google_gwt_dom_client_Style$Overflow$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/1', 209, null);
function Style$Overflow$2(){
  Style$Overflow.call(this, 'HIDDEN', 1);
}

defineClass(210, 37, $intern_5, Style$Overflow$2);
var Lcom_google_gwt_dom_client_Style$Overflow$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/2', 210, null);
function Style$Overflow$3(){
  Style$Overflow.call(this, 'SCROLL', 2);
}

defineClass(211, 37, $intern_5, Style$Overflow$3);
var Lcom_google_gwt_dom_client_Style$Overflow$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/3', 211, null);
function Style$Overflow$4(){
  Style$Overflow.call(this, 'AUTO', 3);
}

defineClass(212, 37, $intern_5, Style$Overflow$4);
var Lcom_google_gwt_dom_client_Style$Overflow$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/4', 212, null);
function $clinit_Style$Position(){
  $clinit_Style$Position = emptyMethod;
  STATIC = new Style$Position$1;
  RELATIVE = new Style$Position$2;
  ABSOLUTE = new Style$Position$3;
  FIXED = new Style$Position$4;
}

function Style$Position(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_2(){
  $clinit_Style$Position();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Position_2_classLit, 1), $intern_3, 38, 0, [STATIC, RELATIVE, ABSOLUTE, FIXED]);
}

defineClass(38, 4, $intern_6);
var ABSOLUTE, FIXED, RELATIVE, STATIC;
var Lcom_google_gwt_dom_client_Style$Position_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position', 38, values_2);
function Style$Position$1(){
  Style$Position.call(this, 'STATIC', 0);
}

defineClass(213, 38, $intern_6, Style$Position$1);
var Lcom_google_gwt_dom_client_Style$Position$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/1', 213, null);
function Style$Position$2(){
  Style$Position.call(this, 'RELATIVE', 1);
}

defineClass(214, 38, $intern_6, Style$Position$2);
var Lcom_google_gwt_dom_client_Style$Position$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/2', 214, null);
function Style$Position$3(){
  Style$Position.call(this, 'ABSOLUTE', 2);
}

defineClass(215, 38, $intern_6, Style$Position$3);
var Lcom_google_gwt_dom_client_Style$Position$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/3', 215, null);
function Style$Position$4(){
  Style$Position.call(this, 'FIXED', 3);
}

defineClass(216, 38, $intern_6, Style$Position$4);
var Lcom_google_gwt_dom_client_Style$Position$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/4', 216, null);
function $clinit_Style$TextAlign(){
  $clinit_Style$TextAlign = emptyMethod;
  CENTER = new Style$TextAlign$1;
  JUSTIFY = new Style$TextAlign$2;
  LEFT = new Style$TextAlign$3;
  RIGHT = new Style$TextAlign$4;
}

function Style$TextAlign(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_3(){
  $clinit_Style$TextAlign();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, 1), $intern_3, 39, 0, [CENTER, JUSTIFY, LEFT, RIGHT]);
}

defineClass(39, 4, $intern_7);
var CENTER, JUSTIFY, LEFT, RIGHT;
var Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign', 39, values_3);
function Style$TextAlign$1(){
  Style$TextAlign.call(this, 'CENTER', 0);
}

defineClass(217, 39, $intern_7, Style$TextAlign$1);
var Lcom_google_gwt_dom_client_Style$TextAlign$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/1', 217, null);
function Style$TextAlign$2(){
  Style$TextAlign.call(this, 'JUSTIFY', 1);
}

defineClass(218, 39, $intern_7, Style$TextAlign$2);
var Lcom_google_gwt_dom_client_Style$TextAlign$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/2', 218, null);
function Style$TextAlign$3(){
  Style$TextAlign.call(this, 'LEFT', 2);
}

defineClass(219, 39, $intern_7, Style$TextAlign$3);
var Lcom_google_gwt_dom_client_Style$TextAlign$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/3', 219, null);
function Style$TextAlign$4(){
  Style$TextAlign.call(this, 'RIGHT', 3);
}

defineClass(220, 39, $intern_7, Style$TextAlign$4);
var Lcom_google_gwt_dom_client_Style$TextAlign$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/4', 220, null);
function $clinit_Style$Unit(){
  $clinit_Style$Unit = emptyMethod;
  PX = new Style$Unit$1;
  PCT = new Style$Unit$2;
  EM = new Style$Unit$3;
  EX = new Style$Unit$4;
  PT = new Style$Unit$5;
  PC = new Style$Unit$6;
  IN = new Style$Unit$7;
  CM = new Style$Unit$8;
  MM = new Style$Unit$9;
}

function Style$Unit(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_4(){
  $clinit_Style$Unit();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Unit_2_classLit, 1), $intern_3, 19, 0, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

defineClass(19, 4, $intern_8);
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
var Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit', 19, values_4);
function Style$Unit$1(){
  Style$Unit.call(this, 'PX', 0);
}

defineClass(183, 19, $intern_8, Style$Unit$1);
_.getType = function getType(){
  return 'px';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/1', 183, null);
function Style$Unit$2(){
  Style$Unit.call(this, 'PCT', 1);
}

defineClass(184, 19, $intern_8, Style$Unit$2);
_.getType = function getType_0(){
  return '%';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/2', 184, null);
function Style$Unit$3(){
  Style$Unit.call(this, 'EM', 2);
}

defineClass(185, 19, $intern_8, Style$Unit$3);
_.getType = function getType_1(){
  return 'em';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/3', 185, null);
function Style$Unit$4(){
  Style$Unit.call(this, 'EX', 3);
}

defineClass(186, 19, $intern_8, Style$Unit$4);
_.getType = function getType_2(){
  return 'ex';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/4', 186, null);
function Style$Unit$5(){
  Style$Unit.call(this, 'PT', 4);
}

defineClass(187, 19, $intern_8, Style$Unit$5);
_.getType = function getType_3(){
  return 'pt';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/5', 187, null);
function Style$Unit$6(){
  Style$Unit.call(this, 'PC', 5);
}

defineClass(188, 19, $intern_8, Style$Unit$6);
_.getType = function getType_4(){
  return 'pc';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/6', 188, null);
function Style$Unit$7(){
  Style$Unit.call(this, 'IN', 6);
}

defineClass(189, 19, $intern_8, Style$Unit$7);
_.getType = function getType_5(){
  return 'in';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/7', 189, null);
function Style$Unit$8(){
  Style$Unit.call(this, 'CM', 7);
}

defineClass(190, 19, $intern_8, Style$Unit$8);
_.getType = function getType_6(){
  return 'cm';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/8', 190, null);
function Style$Unit$9(){
  Style$Unit.call(this, 'MM', 8);
}

defineClass(191, 19, $intern_8, Style$Unit$9);
_.getType = function getType_7(){
  return 'mm';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/9', 191, null);
function $clinit_Style$Visibility(){
  $clinit_Style$Visibility = emptyMethod;
  VISIBLE_0 = new Style$Visibility$1;
  HIDDEN_1 = new Style$Visibility$2;
}

function Style$Visibility(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_5(){
  $clinit_Style$Visibility();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, 1), $intern_3, 60, 0, [VISIBLE_0, HIDDEN_1]);
}

defineClass(60, 4, $intern_9);
var HIDDEN_1, VISIBLE_0;
var Lcom_google_gwt_dom_client_Style$Visibility_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility', 60, values_5);
function Style$Visibility$1(){
  Style$Visibility.call(this, 'VISIBLE', 0);
}

defineClass(221, 60, $intern_9, Style$Visibility$1);
var Lcom_google_gwt_dom_client_Style$Visibility$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility/1', 221, null);
function Style$Visibility$2(){
  Style$Visibility.call(this, 'HIDDEN', 1);
}

defineClass(222, 60, $intern_9, Style$Visibility$2);
var Lcom_google_gwt_dom_client_Style$Visibility$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility/2', 222, null);
function $clinit_StyleInjector(){
  $clinit_StyleInjector = emptyMethod;
  toInject = [];
  toInjectAtEnd = [];
  toInjectAtStart = [];
  flusher = new StyleInjector$1;
}

function flush(){
  $clinit_StyleInjector();
  var css, maybeReturn, toReturn;
  toReturn = null;
  if (toInjectAtStart.length != 0) {
    css = toInjectAtStart.join('');
    maybeReturn = $injectStyleSheetAtStart(($clinit_StyleInjector$StyleInjectorImpl() , css));
    !toInjectAtStart && (toReturn = maybeReturn);
    $setLength(toInjectAtStart, 0);
  }
  if (toInject.length != 0) {
    css = toInject.join('');
    maybeReturn = $injectStyleSheet(($clinit_StyleInjector$StyleInjectorImpl() , css));
    !toInject && (toReturn = maybeReturn);
    $setLength(toInject, 0);
  }
  if (toInjectAtEnd.length != 0) {
    css = toInjectAtEnd.join('');
    maybeReturn = $injectStyleSheetAtEnd(($clinit_StyleInjector$StyleInjectorImpl() , css));
    !toInjectAtEnd && (toReturn = maybeReturn);
    $setLength(toInjectAtEnd, 0);
  }
  needsInjection = false;
  return toReturn;
}

function schedule(){
  $clinit_StyleInjector();
  if (!needsInjection) {
    needsInjection = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), flusher);
  }
}

var flusher, needsInjection = false, toInject, toInjectAtEnd, toInjectAtStart;
function StyleInjector$1(){
}

defineClass(299, 1, {}, StyleInjector$1);
_.execute_1 = function execute_3(){
  ($clinit_StyleInjector() , needsInjection) && flush();
}
;
var Lcom_google_gwt_dom_client_StyleInjector$1_2_classLit = createForClass('com.google.gwt.dom.client', 'StyleInjector/1', 299);
function $clinit_StyleInjector$StyleInjectorImpl(){
  $clinit_StyleInjector$StyleInjectorImpl = emptyMethod;
  $clinit_StyleInjector$StyleInjectorImplIE();
}

function $clinit_StyleInjector$StyleInjectorImplIE(){
  $clinit_StyleInjector$StyleInjectorImplIE = emptyMethod;
  $clinit_StyleInjector$StyleInjectorImpl();
  styleSheetLengths = initDim(I_classLit, $intern_3, 0, 31, 7, 1);
}

function $appendToStyleSheet(idx, contents, append){
  var style;
  style = $doc.styleSheets[idx];
  append?(style.cssText += contents , undefined):(style.cssText = contents + style.cssText , undefined);
  return style;
}

function $createNewStyleSheet(contents){
  var style;
  style = $doc.createStyleSheet();
  style.cssText = contents;
  return style;
}

function $injectStyleSheet(contents){
  var i, len, numStyles, shortestIdx, shortestLen;
  numStyles = getDocumentStyleCount();
  if (numStyles < 31) {
    return $createNewStyleSheet(contents);
  }
   else {
    shortestLen = $intern_0;
    shortestIdx = -1;
    for (i = 0; i < 31; i++) {
      len = styleSheetLengths[i];
      len == 0 && (len = styleSheetLengths[i] = $doc.styleSheets[i].cssText.length);
      if (len <= shortestLen) {
        shortestLen = len;
        shortestIdx = i;
      }
    }
    styleSheetLengths[shortestIdx] += contents.length;
    return $appendToStyleSheet(shortestIdx, contents, true);
  }
}

function $injectStyleSheetAtEnd(contents){
  var documentStyleCount;
  documentStyleCount = getDocumentStyleCount();
  if (documentStyleCount == 0) {
    return $createNewStyleSheet(contents);
  }
  return $appendToStyleSheet(documentStyleCount - 1, contents, true);
}

function $injectStyleSheetAtStart(contents){
  if (getDocumentStyleCount() == 0) {
    return $createNewStyleSheet(contents);
  }
  return $appendToStyleSheet(0, contents, false);
}

function getDocumentStyleCount(){
  return $doc.styleSheets.length;
}

var styleSheetLengths;
defineClass(328, 1, {});
_.toString$ = function toString_3(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event', 328);
function $overrideSource(this$static, source){
  this$static.source = source;
}

defineClass(329, 328, {});
_.revive = function revive(){
  this.dead = false;
  this.source = null;
}
;
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent', 329);
function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (registered) {
    types = dynamicCast($unsafeGet(registered, nativeEvent.type), 33);
    if (types) {
      for (type$iterator = types.iterator(); type$iterator.hasNext();) {
        type_0 = dynamicCast(type$iterator.next(), 43);
        currentNative = type_0.flyweight.nativeEvent;
        currentRelativeElem = type_0.flyweight.relativeElem;
        $setNativeEvent(type_0.flyweight, nativeEvent);
        $setRelativeElement(type_0.flyweight, relativeElem);
        $fireEvent_0(handlerSource, type_0.flyweight);
        $setNativeEvent(type_0.flyweight, currentNative);
        $setRelativeElement(type_0.flyweight, currentRelativeElem);
      }
    }
  }
}

defineClass(330, 329, {});
_.getAssociatedType = function getAssociatedType(){
  return this.getAssociatedType_0();
}
;
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent', 330);
function $clinit_ChangeEvent(){
  $clinit_ChangeEvent = emptyMethod;
  TYPE = new DomEvent$Type('change', new ChangeEvent);
}

function ChangeEvent(){
}

defineClass(227, 330, {}, ChangeEvent);
_.dispatch = function dispatch(handler){
  dynamicCast(handler, 301).onChange(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_0(){
  return TYPE;
}
;
var TYPE;
var Lcom_google_gwt_event_dom_client_ChangeEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ChangeEvent', 227);
defineClass(331, 330, {});
var Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'HumanInputEvent', 331);
function $getX(this$static){
  var relativeElem, e, left;
  relativeElem = this$static.relativeElem;
  if (relativeElem) {
    return e = this$static.nativeEvent , ($eventGetSubPixelClientX(e) | 0) - $getAbsoluteLeft(relativeElem) + (left = (relativeElem.scrollLeft || 0) | 0 , $isRTL(relativeElem) && (left = -left) , left) + (relativeElem.ownerDocument , $wnd.pageXOffset | 0);
  }
  return $eventGetSubPixelClientX(this$static.nativeEvent) | 0;
}

function $getY(this$static){
  var relativeElem, e;
  relativeElem = this$static.relativeElem;
  if (relativeElem) {
    return e = this$static.nativeEvent , ($eventGetSubPixelClientY(e) | 0) - ($getBoundingClientRectTop(relativeElem) + $wnd.pageYOffset | 0) + ((relativeElem.scrollTop || 0) | 0) + (relativeElem.ownerDocument , $wnd.pageYOffset | 0);
  }
  return $eventGetSubPixelClientY(this$static.nativeEvent) | 0;
}

defineClass(332, 331, {});
var Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseEvent', 332);
function $clinit_ClickEvent(){
  $clinit_ClickEvent = emptyMethod;
  TYPE_0 = new DomEvent$Type('click', new ClickEvent);
}

function ClickEvent(){
}

defineClass(223, 332, {}, ClickEvent);
_.dispatch = function dispatch_0(handler){
  dynamicCast(handler, 47).onClick(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_1(){
  return TYPE_0;
}
;
var TYPE_0;
var Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ClickEvent', 223);
defineClass(224, 1, {});
_.hashCode$ = function hashCode_2(){
  return this.index_0;
}
;
_.toString$ = function toString_4(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event/Type', 224);
function GwtEvent$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(61, 224, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent/Type', 61);
function DomEvent$Type(eventName, flyweight){
  var types;
  GwtEvent$Type.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap);
  types = dynamicCast($unsafeGet(registered, eventName), 33);
  if (!types) {
    types = new ArrayList;
    $unsafePut(registered, eventName, types);
  }
  types.add_1(this);
  this.name_0 = eventName;
}

defineClass(43, 61, {43:1}, DomEvent$Type);
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent/Type', 43);
function $clinit_MouseDownEvent(){
  $clinit_MouseDownEvent = emptyMethod;
  TYPE_1 = new DomEvent$Type('mousedown', new MouseDownEvent);
}

function $dispatch(this$static, handler){
  $beginDragging(handler.this$01, this$static);
}

function MouseDownEvent(){
}

defineClass(281, 332, {}, MouseDownEvent);
_.dispatch = function dispatch_1(handler){
  $dispatch(this, dynamicCast(handler, 341));
}
;
_.getAssociatedType_0 = function getAssociatedType_2(){
  return TYPE_1;
}
;
var TYPE_1;
var Lcom_google_gwt_event_dom_client_MouseDownEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseDownEvent', 281);
function $clinit_MouseMoveEvent(){
  $clinit_MouseMoveEvent = emptyMethod;
  TYPE_2 = new DomEvent$Type('mousemove', new MouseMoveEvent);
}

function $dispatch_0(this$static, handler){
  $continueDragging(handler.this$01, this$static);
}

function MouseMoveEvent(){
}

defineClass(283, 332, {}, MouseMoveEvent);
_.dispatch = function dispatch_2(handler){
  $dispatch_0(this, dynamicCast(handler, 345));
}
;
_.getAssociatedType_0 = function getAssociatedType_3(){
  return TYPE_2;
}
;
var TYPE_2;
var Lcom_google_gwt_event_dom_client_MouseMoveEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseMoveEvent', 283);
function $clinit_MouseOutEvent(){
  $clinit_MouseOutEvent = emptyMethod;
  TYPE_3 = new DomEvent$Type('mouseout', new MouseOutEvent);
}

function MouseOutEvent(){
}

defineClass(285, 332, {}, MouseOutEvent);
_.dispatch = function dispatch_3(handler){
  dynamicCast(handler, 343);
}
;
_.getAssociatedType_0 = function getAssociatedType_4(){
  return TYPE_3;
}
;
var TYPE_3;
var Lcom_google_gwt_event_dom_client_MouseOutEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseOutEvent', 285);
function $clinit_MouseOverEvent(){
  $clinit_MouseOverEvent = emptyMethod;
  TYPE_4 = new DomEvent$Type('mouseover', new MouseOverEvent);
}

function MouseOverEvent(){
}

defineClass(284, 332, {}, MouseOverEvent);
_.dispatch = function dispatch_4(handler){
  dynamicCast(handler, 344);
}
;
_.getAssociatedType_0 = function getAssociatedType_5(){
  return TYPE_4;
}
;
var TYPE_4;
var Lcom_google_gwt_event_dom_client_MouseOverEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseOverEvent', 284);
function $clinit_MouseUpEvent(){
  $clinit_MouseUpEvent = emptyMethod;
  TYPE_5 = new DomEvent$Type('mouseup', new MouseUpEvent);
}

function $dispatch_1(this$static, handler){
  $endDragging(handler.this$01, this$static);
}

function MouseUpEvent(){
}

defineClass(282, 332, {}, MouseUpEvent);
_.dispatch = function dispatch_5(handler){
  $dispatch_1(this, dynamicCast(handler, 342));
}
;
_.getAssociatedType_0 = function getAssociatedType_6(){
  return TYPE_5;
}
;
var TYPE_5;
var Lcom_google_gwt_event_dom_client_MouseUpEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseUpEvent', 282);
function $unsafeGet(this$static, key){
  return this$static.map_0[key];
}

function $unsafePut(this$static, key, value_0){
  this$static.map_0[key] = value_0;
}

function PrivateMap(){
  this.map_0 = {};
}

defineClass(266, 1, {}, PrivateMap);
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client', 'PrivateMap', 266);
function fire_0(){
  return null;
}

function CloseEvent_0(){
}

function fire_1(source){
  var event_0;
  if (TYPE_6) {
    event_0 = new CloseEvent_0;
    source.fireEvent(event_0);
  }
}

defineClass(289, 329, {}, CloseEvent_0);
_.dispatch = function dispatch_6(handler){
  dynamicCast(handler, 346);
  detachWidgets();
}
;
_.getAssociatedType = function getAssociatedType_7(){
  return TYPE_6;
}
;
var TYPE_6;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'CloseEvent', 289);
function ResizeEvent(width_0){
  this.width_0 = width_0;
}

function fire_2(source, width_0){
  var event_0;
  if (TYPE_7) {
    event_0 = new ResizeEvent(width_0);
    $fireEvent(source, event_0);
  }
}

defineClass(271, 329, {}, ResizeEvent);
_.dispatch = function dispatch_7(handler){
  dynamicCast(handler, 133).onResize(this);
}
;
_.getAssociatedType = function getAssociatedType_8(){
  return TYPE_7;
}
;
_.width_0 = 0;
var TYPE_7;
var Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ResizeEvent', 271);
function fire_3(){
}

function $dispatch_2(handler){
  handler.this$01.autoHideOnHistoryEvents && handler.this$01.hide(false);
}

function ValueChangeEvent(){
}

function fire_4(source){
  var event_0;
  if (TYPE_8) {
    event_0 = new ValueChangeEvent;
    $fireEvent(source.handlers, event_0);
  }
}

function fireIfNotEqual(source, oldValue, newValue){
  var event_0;
  if (!!TYPE_8 && oldValue != newValue && (!oldValue || !(!!newValue && newValue.value_0 == oldValue.value_0))) {
    event_0 = new ValueChangeEvent;
    !!source.handlerManager && $fireEvent(source.handlerManager, event_0);
  }
}

defineClass(130, 329, {}, ValueChangeEvent);
_.dispatch = function dispatch_8(handler){
  $dispatch_2(dynamicCast(handler, 340));
}
;
_.getAssociatedType = function getAssociatedType_9(){
  return TYPE_8;
}
;
var TYPE_8;
var Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ValueChangeEvent', 130);
function $addHandler(this$static, type_0, handler){
  return new LegacyHandlerWrapper($doAdd(this$static.eventBus, type_0, handler));
}

function $fireEvent(this$static, event_0){
  var e, oldSource;
  !event_0.dead || event_0.revive();
  oldSource = event_0.source;
  $overrideSource(event_0, this$static.source);
  try {
    $doFire(this$static.eventBus, event_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 58)) {
      e = $e0;
      throw new UmbrellaException_0(e.causes);
    }
     else 
      throw unwrap($e0);
  }
   finally {
    oldSource == null?(event_0.dead = true , event_0.source = null):(event_0.source = oldSource);
  }
}

function $isEventHandled(this$static, e){
  return $isEventHandled_0(this$static.eventBus, e);
}

function HandlerManager(source){
  HandlerManager_0.call(this, source, false);
}

function HandlerManager_0(source, fireInReverseOrder){
  this.eventBus = new HandlerManager$Bus(fireInReverseOrder);
  this.source = source;
}

defineClass(72, 1, {8:1}, HandlerManager, HandlerManager_0);
_.fireEvent = function fireEvent(event_0){
  $fireEvent(this, event_0);
}
;
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager', 72);
defineClass(333, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'EventBus', 333);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_8(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  if (!type_0) {
    throw new NullPointerException_0('Cannot add a handler with a null type');
  }
  if (!handler) {
    throw new NullPointerException_0('Cannot add a null handler');
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2(this$static, type_0, handler)):$doAddNow(this$static, type_0, null, handler);
  return new SimpleEventBus$1(this$static, type_0, handler);
}

function $doAddNow(this$static, type_0, source, handler){
  var l;
  l = $ensureHandlerList(this$static, type_0, source);
  l.add_1(handler);
}

function $doFire(this$static, event_0){
  var causes, e, handler, handlers, it;
  if (!event_0) {
    throw new NullPointerException_0('Cannot fire null event');
  }
  try {
    ++this$static.firingDepth;
    handlers = $getDispatchList(this$static, event_0.getAssociatedType());
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_1()):handlers.listIterator();
    while (this$static.isReverseOrder?it.hasPrevious():it.hasNext()) {
      handler = this$static.isReverseOrder?it.previous():it.next();
      try {
        event_0.dispatch(dynamicCast(handler, 23));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 9)) {
          e = $e0;
          !causes && (causes = new HashSet);
          $add_9(causes, e);
        }
         else 
          throw unwrap($e0);
      }
    }
    if (causes) {
      throw new UmbrellaException(causes);
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $doRemoveNow(this$static, type_0, source, handler){
  var l, removed, sourceMap;
  l = $getHandlerList(this$static, type_0, source);
  removed = l.remove_2(handler);
  removed && l.isEmpty() && (sourceMap = dynamicCast($get_3(this$static.map_0, type_0), 65) , dynamicCast($remove_15(sourceMap.hashCodeMap, source), 33) , sourceMap.size_0 == 0 && $remove_10(this$static.map_0, type_0) , undefined);
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = dynamicCast($get_3(this$static.map_0, type_0), 65);
  if (!sourceMap) {
    sourceMap = new HashMap;
    $put(this$static.map_0, type_0, sourceMap);
  }
  handlers = dynamicCast(getEntryValueOrNull($getEntry(sourceMap.hashCodeMap, source)), 33);
  if (!handlers) {
    handlers = new ArrayList;
    $put_0(sourceMap.hashCodeMap, source, handlers);
  }
  return handlers;
}

function $getDispatchList(this$static, type_0){
  var directHandlers;
  directHandlers = $getHandlerList(this$static, type_0, null);
  return directHandlers;
}

function $getHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = dynamicCast($get_3(this$static.map_0, type_0), 65);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = dynamicCast(getEntryValueOrNull($getEntry(sourceMap.hashCodeMap, source)), 33);
  if (!handlers) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new AbstractList$IteratorImpl(this$static.deferredDeltas); c$iterator.i < c$iterator.this$01_0.size_1();) {
        c = (checkCriticalElement(c$iterator.i < c$iterator.this$01_0.size_1()) , dynamicCast(c$iterator.this$01_0.get_0(c$iterator.last = c$iterator.i++), 302));
        c.execute_1();
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

function $isEventHandled_0(this$static, eventKey){
  return $containsKey(this$static.map_0, eventKey);
}

defineClass(257, 333, {});
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus', 257);
function $doRemove(this$static, type_0, source, handler){
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$3(this$static, type_0, source, handler)):$doRemoveNow(this$static, type_0, source, handler);
}

function HandlerManager$Bus(fireInReverseOrder){
  this.map_0 = new HashMap;
  this.isReverseOrder = fireInReverseOrder;
}

defineClass(258, 257, {}, HandlerManager$Bus);
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager/Bus', 258);
function LegacyHandlerWrapper(real){
  this.real = real;
}

defineClass(267, 1, {}, LegacyHandlerWrapper);
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared', 'LegacyHandlerWrapper', 267);
function UmbrellaException(causes){
  RuntimeException_1.call(this, makeMessage(causes), makeCause(causes));
  this.causes = causes;
}

function makeCause(causes){
  var iterator;
  iterator = causes.iterator();
  if (!iterator.hasNext()) {
    return null;
  }
  return dynamicCast(iterator.next(), 9);
}

function makeMessage(causes){
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder_0(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator(); t$iterator.hasNext();) {
    t = dynamicCast(t$iterator.next(), 9);
    first?(first = false):(b.string += '; ' , b);
    $append_0(b, t.getMessage());
  }
  return b.string;
}

defineClass(58, 18, $intern_10, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared', 'UmbrellaException', 58);
function UmbrellaException_0(causes){
  UmbrellaException.call(this, causes);
}

defineClass(115, 58, $intern_10, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared', 'UmbrellaException', 115);
function $cancel_1(this$static){
  var xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  $clearOnReadyStateChange(xhr);
  xhr.abort();
}

function $fireOnResponseReceived(this$static, callback){
  var response, xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  response = new Request$RequestImplIE8And9$1(xhr);
  callback.onResponseReceived(this$static, response);
}

function $fireOnTimeout(this$static){
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_1(this$static);
  this$static.callback.onError(this$static, new RequestTimeoutException(this$static.timeoutMillis));
}

function Request(xmlHttpRequest, timeoutMillis, callback){
  this.timer = new Request$1(this);
  if (!xmlHttpRequest) {
    throw new NullPointerException;
  }
  if (timeoutMillis < 0) {
    throw new IllegalArgumentException;
  }
  this.callback = callback;
  this.timeoutMillis = timeoutMillis;
  this.xmlHttpRequest = xmlHttpRequest;
  timeoutMillis > 0 && $schedule(this.timer, timeoutMillis);
}

defineClass(273, 1, {}, Request);
_.timeoutMillis = 0;
var Lcom_google_gwt_http_client_Request_2_classLit = createForClass('com.google.gwt.http.client', 'Request', 273);
function Request$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(276, 101, {}, Request$1);
_.run = function run_0(){
  $fireOnTimeout(this.this$01);
}
;
var Lcom_google_gwt_http_client_Request$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/1', 276);
defineClass(334, 1, {});
var Lcom_google_gwt_http_client_Response_2_classLit = createForClass('com.google.gwt.http.client', 'Response', 334);
defineClass(274, 334, {});
var Lcom_google_gwt_http_client_ResponseImpl_2_classLit = createForClass('com.google.gwt.http.client', 'ResponseImpl', 274);
function $getStatusCode(this$static){
  var statusCode;
  statusCode = this$static.xmlHttpRequest.status;
  return statusCode == 1223?204:statusCode;
}

function Request$RequestImplIE8And9$1($anonymous0){
  this.xmlHttpRequest = $anonymous0;
}

defineClass(275, 274, {}, Request$RequestImplIE8And9$1);
var Lcom_google_gwt_http_client_Request$RequestImplIE8And9$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/RequestImplIE8And9/1', 275);
function $clinit_RequestBuilder(){
  $clinit_RequestBuilder = emptyMethod;
  new RequestBuilder$Method('DELETE');
  GET = new RequestBuilder$Method('GET');
  new RequestBuilder$Method('HEAD');
  new RequestBuilder$Method('POST');
  new RequestBuilder$Method('PUT');
}

function $doSend(this$static, callback){
  var e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = new $wnd.XMLHttpRequest;
  try {
    $open(xmlHttpRequest, this$static.httpMethod, this$static.url_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 34)) {
      e = $e0;
      requestPermissionException = new RequestPermissionException(this$static.url_0);
      $initCause(requestPermissionException, new RequestException(e.getMessage()));
      throw requestPermissionException;
    }
     else 
      throw unwrap($e0);
  }
  xmlHttpRequest.setRequestHeader('Content-Type', 'text/plain; charset=utf-8');
  this$static.includeCredentials && (xmlHttpRequest.withCredentials = true , undefined);
  request = new Request(xmlHttpRequest, this$static.timeoutMillis, callback);
  $setOnReadyStateChange(xmlHttpRequest, new RequestBuilder$1(request, callback));
  try {
    xmlHttpRequest.send(null);
  }
   catch ($e1) {
    $e1 = wrap($e1);
    if (instanceOf($e1, 34)) {
      e = $e1;
      throw new RequestException(e.getMessage());
    }
     else 
      throw unwrap($e1);
  }
  return request;
}

function $sendRequest(this$static, callback){
  throwIfNull('callback', callback);
  return $doSend(this$static, callback);
}

function RequestBuilder(httpMethod, url_0){
  $clinit_RequestBuilder();
  RequestBuilder_0.call(this, !httpMethod?null:httpMethod.name_0, url_0);
}

function RequestBuilder_0(httpMethod, url_0){
  throwIfEmptyOrNull('httpMethod', httpMethod);
  throwIfEmptyOrNull('url', url_0);
  this.httpMethod = httpMethod;
  this.url_0 = url_0;
}

defineClass(106, 1, {}, RequestBuilder);
_.includeCredentials = false;
_.timeoutMillis = 0;
var GET;
var Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder', 106);
function RequestBuilder$1(val$request, val$callback){
  this.val$request2 = val$request;
  this.val$callback3 = val$callback;
}

defineClass(272, 1, {}, RequestBuilder$1);
_.onReadyStateChange = function onReadyStateChange(xhr){
  if (xhr.readyState == 4) {
    $clearOnReadyStateChange(xhr);
    $fireOnResponseReceived(this.val$request2, this.val$callback3);
  }
}
;
var Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/1', 272);
function RequestBuilder$Method(name_0){
  this.name_0 = name_0;
}

defineClass(74, 1, {}, RequestBuilder$Method);
_.toString$ = function toString_5(){
  return this.name_0;
}
;
var Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/Method', 74);
function RequestException(message){
  Exception.call(this, message);
}

defineClass(44, 54, $intern_11, RequestException);
var Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestException', 44);
function RequestPermissionException(url_0){
  RequestException.call(this, 'The URL ' + url_0 + ' is invalid or violates the same-origin security restriction');
}

defineClass(288, 44, $intern_11, RequestPermissionException);
var Lcom_google_gwt_http_client_RequestPermissionException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestPermissionException', 288);
function RequestTimeoutException(timeoutMillis){
  RequestException.call(this, 'A request timeout has expired after ' + timeoutMillis + ' ms');
}

defineClass(293, 44, $intern_11, RequestTimeoutException);
var Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestTimeoutException', 293);
function throwIfEmptyOrNull(name_0, value_0){
  throwIfNull(name_0, value_0);
  if (0 == $trim(value_0).length) {
    throw new IllegalArgumentException_0(name_0 + ' cannot be empty');
  }
}

function throwIfNull(name_0, value_0){
  if (null == value_0) {
    throw new NullPointerException_0(name_0 + ' cannot be null');
  }
}

function getDirectionOnElement(elem){
  var dirPropertyValue;
  dirPropertyValue = $getPropertyString(elem, 'dir');
  if ($equalsIgnoreCase('rtl', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , RTL;
  }
   else if ($equalsIgnoreCase('ltr', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , LTR;
  }
  return $clinit_HasDirection$Direction() , DEFAULT;
}

function setDirectionOnElement(elem, direction){
  switch (direction.ordinal) {
    case 0:
      {
        $setPropertyString(elem, 'dir', 'rtl');
        break;
      }

    case 1:
      {
        $setPropertyString(elem, 'dir', 'ltr');
        break;
      }

    case 2:
      {
        getDirectionOnElement(elem) != ($clinit_HasDirection$Direction() , DEFAULT) && $setPropertyString(elem, 'dir', '');
        break;
      }

  }
}

function $clinit_HasDirection$Direction(){
  $clinit_HasDirection$Direction = emptyMethod;
  RTL = new HasDirection$Direction('RTL', 0);
  LTR = new HasDirection$Direction('LTR', 1);
  DEFAULT = new HasDirection$Direction('DEFAULT', 2);
}

function HasDirection$Direction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_6(){
  $clinit_HasDirection$Direction();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit, 1), $intern_3, 70, 0, [RTL, LTR, DEFAULT]);
}

defineClass(70, 4, {70:1, 3:1, 5:1, 4:1}, HasDirection$Direction);
var DEFAULT, LTR, RTL;
var Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForEnum('com.google.gwt.i18n.client', 'HasDirection/Direction', 70, values_6);
defineClass(337, 1, {});
var Lcom_google_gwt_json_client_JSONValue_2_classLit = createForClass('com.google.gwt.json.client', 'JSONValue', 337);
function $get(this$static, index_0){
  var v = this$static.jsArray[index_0];
  var func = ($clinit_JSONParser() , typeMap)[typeof v];
  return func?func(v):throwUnknownTypeException(typeof v);
}

function JSONArray(arr){
  this.jsArray = arr;
}

defineClass(87, 337, {87:1}, JSONArray);
_.equals$ = function equals_1(other){
  if (!instanceOf(other, 87)) {
    return false;
  }
  return this.jsArray == dynamicCast(other, 87).jsArray;
}
;
_.hashCode$ = function hashCode_3(){
  return getHashCode(this.jsArray);
}
;
_.toString$ = function toString_6(){
  var c, i, sb;
  sb = new StringBuilder_0('[');
  for (i = 0 , c = this.jsArray.length; i < c; i++) {
    i > 0 && (sb.string += ',' , sb);
    $append(sb, $get(this, i));
  }
  sb.string += ']';
  return sb.string;
}
;
var Lcom_google_gwt_json_client_JSONArray_2_classLit = createForClass('com.google.gwt.json.client', 'JSONArray', 87);
function $clinit_JSONBoolean(){
  $clinit_JSONBoolean = emptyMethod;
  FALSE = new JSONBoolean(false);
  TRUE = new JSONBoolean(true);
}

function JSONBoolean(value_0){
  this.value_0 = value_0;
}

defineClass(132, 337, {}, JSONBoolean);
_.toString$ = function toString_7(){
  return $clinit_Boolean() , '' + this.value_0;
}
;
_.value_0 = false;
var FALSE, TRUE;
var Lcom_google_gwt_json_client_JSONBoolean_2_classLit = createForClass('com.google.gwt.json.client', 'JSONBoolean', 132);
function JSONException(message){
  RuntimeException_0.call(this, message);
}

function JSONException_0(cause){
  this.detailMessage = !cause?null:$toString(cause);
  this.cause = cause;
  captureStackTrace(this, this.detailMessage);
}

defineClass(109, 18, $intern_2, JSONException, JSONException_0);
var Lcom_google_gwt_json_client_JSONException_2_classLit = createForClass('com.google.gwt.json.client', 'JSONException', 109);
function $clinit_JSONNull(){
  $clinit_JSONNull = emptyMethod;
  instance_0 = new JSONNull;
}

function JSONNull(){
}

defineClass(298, 337, {}, JSONNull);
_.toString$ = function toString_8(){
  return 'null';
}
;
var instance_0;
var Lcom_google_gwt_json_client_JSONNull_2_classLit = createForClass('com.google.gwt.json.client', 'JSONNull', 298);
function JSONNumber(value_0){
  this.value_0 = value_0;
}

defineClass(46, 337, {46:1}, JSONNumber);
_.equals$ = function equals_2(other){
  if (!instanceOf(other, 46)) {
    return false;
  }
  return this.value_0 == dynamicCast(other, 46).value_0;
}
;
_.hashCode$ = function hashCode_4(){
  return round_int((new Double(this.value_0)).value_0);
}
;
_.toString$ = function toString_9(){
  return this.value_0 + '';
}
;
_.value_0 = 0;
var Lcom_google_gwt_json_client_JSONNumber_2_classLit = createForClass('com.google.gwt.json.client', 'JSONNumber', 46);
function $computeKeys0(this$static, result){
  var jsObject = this$static.jsObject;
  var i = 0;
  for (var key in jsObject) {
    jsObject.hasOwnProperty(key) && (result[i++] = key);
  }
  return result;
}

function $get_0(this$static, key){
  if (key == null) {
    throw new NullPointerException;
  }
  return $get0(this$static, key);
}

function $get0(this$static, key){
  var jsObject = this$static.jsObject;
  var v;
  key = String(key);
  jsObject.hasOwnProperty(key) && (v = jsObject[key]);
  var func = ($clinit_JSONParser() , typeMap)[typeof v];
  var ret = func?func(v):throwUnknownTypeException(typeof v);
  return ret;
}

function JSONObject(jsValue){
  this.jsObject = jsValue;
}

defineClass(64, 337, {64:1}, JSONObject);
_.equals$ = function equals_3(other){
  if (!instanceOf(other, 64)) {
    return false;
  }
  return this.jsObject == dynamicCast(other, 64).jsObject;
}
;
_.hashCode$ = function hashCode_5(){
  return getHashCode(this.jsObject);
}
;
_.toString$ = function toString_10(){
  var first, key, key$index, key$max, keys_0, sb;
  sb = new StringBuilder_0('{');
  first = true;
  keys_0 = $computeKeys0(this, initDim(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 4, 1));
  for (key$index = 0 , key$max = keys_0.length; key$index < key$max; ++key$index) {
    key = keys_0[key$index];
    first?(first = false):(sb.string += ', ' , sb);
    $append_0(sb, escapeValue(key));
    sb.string += ':';
    $append(sb, $get_0(this, key));
  }
  sb.string += '}';
  return sb.string;
}
;
var Lcom_google_gwt_json_client_JSONObject_2_classLit = createForClass('com.google.gwt.json.client', 'JSONObject', 64);
function $clinit_JSONParser(){
  $clinit_JSONParser = emptyMethod;
  typeMap = {'boolean':createBoolean, number:createNumber, string:createString, object:createObject, 'function':createObject, undefined:createUndefined};
}

function createBoolean(v){
  return $clinit_JSONBoolean() , v?TRUE:FALSE;
}

function createNumber(v){
  return new JSONNumber(v);
}

function createObject(o){
  if (!o) {
    return $clinit_JSONNull() , instance_0;
  }
  var v = o.valueOf?o.valueOf():o;
  if (v !== o) {
    var func = typeMap[typeof v];
    return func?func(v):throwUnknownTypeException(typeof v);
  }
   else if (o instanceof Array || o instanceof $wnd.Array) {
    return new JSONArray(o);
  }
   else {
    return new JSONObject(o);
  }
}

function createString(v){
  return new JSONString(v);
}

function createUndefined(){
  return null;
}

function evaluate(json, strict){
  var v;
  if (strict) {
    try {
      v = JSON.parse(json);
    }
     catch (e) {
      return throwJSONException('Error parsing JSON: ' + e);
    }
  }
   else {
    json = escapeJsonForEval(json);
    try {
      v = eval('(' + json + ')');
    }
     catch (e) {
      return throwJSONException('Error parsing JSON: ' + e);
    }
  }
  var func = typeMap[typeof v];
  return func?func(v):throwUnknownTypeException(typeof v);
}

function parse_0(jsonString){
  $clinit_JSONParser();
  var ex;
  if (jsonString == null) {
    throw new NullPointerException;
  }
  if (jsonString.length == 0) {
    throw new IllegalArgumentException_0('empty argument');
  }
  try {
    return evaluate(jsonString, false);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 34)) {
      ex = $e0;
      throw new JSONException_0(ex);
    }
     else 
      throw unwrap($e0);
  }
}

function throwJSONException(message){
  throw new JSONException(message);
}

function throwUnknownTypeException(typeString){
  $clinit_JSONParser();
  throw new JSONException("Unexpected typeof result '" + typeString + "'; please report this bug to the GWT team");
}

var typeMap;
function JSONString(value_0){
  if (value_0 == null) {
    throw new NullPointerException;
  }
  this.value_0 = value_0;
}

defineClass(75, 337, {75:1}, JSONString);
_.equals$ = function equals_4(other){
  if (!instanceOf(other, 75)) {
    return false;
  }
  return $equals(this.value_0, dynamicCast(other, 75).value_0);
}
;
_.hashCode$ = function hashCode_6(){
  return getHashCode_0(this.value_0);
}
;
_.toString$ = function toString_11(){
  return escapeValue(this.value_0);
}
;
var Lcom_google_gwt_json_client_JSONString_2_classLit = createForClass('com.google.gwt.json.client', 'JSONString', 75);
function cloneSubrange(array, toIndex){
  var result;
  result = array.slice(0, toIndex);
  initValues(getClass__Ljava_lang_Class___devirtual$(array), array.castableTypeMap$, array.__elementTypeId$, array.__elementTypeCategory$, result);
  return result;
}

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function initDim(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  initValues(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initValues(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz$ = arrayClass;
  array.castableTypeMap$ = castableTypeMap;
  array.typeMarker$ = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 6:
      initValue = {l:0, m:0, h:0};
      break;
    case 7:
      initValue = 0;
      break;
    case 8:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function nativeArraySplice(src_0, srcOfs, dest, destOfs, len, overwrite){
  if (src_0 === dest) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  for (var batchStart = srcOfs, end = srcOfs + len; batchStart < end;) {
    var batchEnd = Math.min(batchStart + 10000, end);
    len = batchEnd - batchStart;
    Array.prototype.splice.apply(dest, [destOfs, overwrite?len:0].concat(src_0.slice(batchStart, batchEnd)));
    batchStart = batchEnd;
    destOfs += len;
  }
}

function setCheck(array, index_0, value_0){
  var elementTypeId;
  if (value_0 != null) {
    switch (array.__elementTypeCategory$) {
      case 4:
        if (!isJavaString(value_0)) {
          throw new ArrayStoreException;
        }

        break;
      case 0:
        {
          elementTypeId = array.__elementTypeId$;
          if (!canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

      case 2:
        if (!(!isJavaString(value_0) && !hasTypeMarker(value_0))) {
          throw new ArrayStoreException;
        }

        break;
      case 1:
        {
          elementTypeId = array.__elementTypeId$;
          if (!(!isJavaString(value_0) && !hasTypeMarker(value_0)) && !canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

    }
  }
  return array[index_0] = value_0;
}

function cacheJavaScriptException(e, jse){
  if (e && typeof e == 'object') {
    try {
      e.__gwt$exception = jse;
    }
     catch (ignored) {
    }
  }
}

function unwrap(e){
  var jse;
  if (instanceOf(e, 34)) {
    jse = dynamicCast(e, 34);
    if (maskUndefined(jse.e) !== maskUndefined(($clinit_JavaScriptException() , NOT_SET))) {
      return maskUndefined(jse.e) === maskUndefined(NOT_SET)?null:jse.e;
    }
  }
  return e;
}

function wrap(e){
  var jse;
  if (instanceOf(e, 9)) {
    return e;
  }
  jse = e && e.__gwt$exception;
  if (!jse) {
    jse = new JavaScriptException(e);
    captureStackTrace(jse, e);
    cacheJavaScriptException(e, jse);
  }
  return jse;
}

function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_12;
  a1 = value_0 >> 22 & $intern_12;
  a2 = value_0 < 0?1048575:0;
  return create0(a0, a1, a2);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function fromInt(value_0){
  var rebase, result;
  if (value_0 > -129 && value_0 < 128) {
    rebase = value_0 + 128;
    boxedValues == null && (boxedValues = initDim(Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit, $intern_3, 351, 256, 0, 1));
    result = boxedValues[rebase];
    !result && (result = boxedValues[rebase] = create(value_0));
    return result;
  }
  return create(value_0);
}

var boxedValues;
function $clinit_LongLib$Const(){
  $clinit_LongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_12, $intern_12, 524287);
  MIN_VALUE = create0(0, 0, $intern_13);
  fromInt(1);
  fromInt(2);
  ZERO = fromInt(0);
}

var MAX_VALUE, MIN_VALUE, ZERO;
function hasTypeMarker(o){
  return o.typeMarker$ === typeMarkerFn;
}

function init(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad();
  $onModuleLoad_0();
}

function $adjustHorizontalConstraints(this$static, parentWidth, l){
  var leftPx, rightPx, widthPx;
  leftPx = l.left_0 * $getUnitSize(this$static, l.leftUnit, false);
  rightPx = l.right * $getUnitSize(this$static, l.rightUnit, false);
  widthPx = l.width_0 * $getUnitSize(this$static, l.widthUnit, false);
  if (l.setLeft && !l.setTargetLeft) {
    l.setLeft = false;
    if (l.setWidth) {
      l.setTargetRight = true;
      l.sourceRight = (parentWidth - (leftPx + widthPx)) / $getUnitSize(this$static, l.targetRightUnit, false);
    }
     else {
      l.setTargetWidth = true;
      l.sourceWidth = (parentWidth - (leftPx + rightPx)) / $getUnitSize(this$static, l.targetWidthUnit, false);
    }
  }
   else if (l.setWidth && !l.setTargetWidth) {
    l.setWidth = false;
    if (l.setLeft) {
      l.setTargetRight = true;
      l.sourceRight = (parentWidth - (leftPx + widthPx)) / $getUnitSize(this$static, l.targetRightUnit, false);
    }
     else {
      l.setTargetLeft = true;
      l.sourceLeft = (parentWidth - (rightPx + widthPx)) / $getUnitSize(this$static, l.targetLeftUnit, false);
    }
  }
   else if (l.setRight && !l.setTargetRight) {
    l.setRight = false;
    if (l.setWidth) {
      l.setTargetLeft = true;
      l.sourceLeft = (parentWidth - (rightPx + widthPx)) / $getUnitSize(this$static, l.targetLeftUnit, false);
    }
     else {
      l.setTargetWidth = true;
      l.sourceWidth = (parentWidth - (leftPx + rightPx)) / $getUnitSize(this$static, l.targetWidthUnit, false);
    }
  }
  l.setLeft = l.setTargetLeft;
  l.setRight = l.setTargetRight;
  l.setWidth = l.setTargetWidth;
  l.leftUnit = l.targetLeftUnit;
  l.rightUnit = l.targetRightUnit;
  l.widthUnit = l.targetWidthUnit;
}

function $adjustVerticalConstraints(this$static, parentHeight, l){
  var bottomPx, heightPx, topPx;
  topPx = l.top_0 * $getUnitSize(this$static, l.topUnit, true);
  bottomPx = l.bottom * $getUnitSize(this$static, l.bottomUnit, true);
  heightPx = l.height * $getUnitSize(this$static, l.heightUnit, true);
  if (l.setTop && !l.setTargetTop) {
    l.setTop = false;
    if (l.setHeight) {
      l.setTargetBottom = true;
      l.sourceBottom = (parentHeight - (topPx + heightPx)) / $getUnitSize(this$static, l.targetBottomUnit, true);
    }
     else {
      l.setTargetHeight = true;
      l.sourceHeight = (parentHeight - (topPx + bottomPx)) / $getUnitSize(this$static, l.targetHeightUnit, true);
    }
  }
   else if (l.setHeight && !l.setTargetHeight) {
    l.setHeight = false;
    if (l.setTop) {
      l.setTargetBottom = true;
      l.sourceBottom = (parentHeight - (topPx + heightPx)) / $getUnitSize(this$static, l.targetBottomUnit, true);
    }
     else {
      l.setTargetTop = true;
      l.sourceTop = (parentHeight - (bottomPx + heightPx)) / $getUnitSize(this$static, l.targetTopUnit, true);
    }
  }
   else if (l.setBottom && !l.setTargetBottom) {
    l.setBottom = false;
    if (l.setHeight) {
      l.setTargetTop = true;
      l.sourceTop = (parentHeight - (bottomPx + heightPx)) / $getUnitSize(this$static, l.targetTopUnit, true);
    }
     else {
      l.setTargetHeight = true;
      l.sourceHeight = (parentHeight - (topPx + bottomPx)) / $getUnitSize(this$static, l.targetHeightUnit, true);
    }
  }
  l.setTop = l.setTargetTop;
  l.setBottom = l.setTargetBottom;
  l.setHeight = l.setTargetHeight;
  l.topUnit = l.targetTopUnit;
  l.bottomUnit = l.targetBottomUnit;
  l.heightUnit = l.targetHeightUnit;
}

function $attachChild(this$static, child, before, userObject){
  var container, layer;
  container = $attachChild_0(this$static.parentElem, child, before);
  layer = new Layout$Layer(container, child, userObject);
  $add_8(this$static.layers, layer);
  return layer;
}

function $getUnitSize(this$static, unit, vertical){
  return $getUnitSizeInPixels(this$static.impl, this$static.parentElem, unit, vertical);
}

function $layout(this$static, duration, callback){
  var l, l$iterator, l$iterator0, parentHeight, parentWidth;
  !!this$static.animation && $cancel(this$static.animation);
  if (duration == 0) {
    for (l$iterator0 = new AbstractList$IteratorImpl(this$static.layers); l$iterator0.i < l$iterator0.this$01_0.size_1();) {
      l = (checkCriticalElement(l$iterator0.i < l$iterator0.this$01_0.size_1()) , dynamicCast(l$iterator0.this$01_0.get_0(l$iterator0.last = l$iterator0.i++), 26));
      l.left_0 = l.sourceLeft = l.targetLeft;
      l.top_0 = l.sourceTop = l.targetTop;
      l.right = l.sourceRight = l.targetRight;
      l.bottom = l.sourceBottom = l.targetBottom;
      l.width_0 = l.sourceWidth = l.targetWidth;
      l.height = l.sourceHeight = l.targetHeight;
      l.setLeft = l.setTargetLeft;
      l.setTop = l.setTargetTop;
      l.setRight = l.setTargetRight;
      l.setBottom = l.setTargetBottom;
      l.setWidth = l.setTargetWidth;
      l.setHeight = l.setTargetHeight;
      l.leftUnit = l.targetLeftUnit;
      l.topUnit = l.targetTopUnit;
      l.rightUnit = l.targetRightUnit;
      l.bottomUnit = l.targetBottomUnit;
      l.widthUnit = l.targetWidthUnit;
      l.heightUnit = l.targetHeightUnit;
      $layout_0(this$static.impl, l);
    }
    !!callback && !!callback.this$01.callback && $doAfterLayout(callback.this$01.callback.this$11.this$01);
    return;
  }
  parentWidth = this$static.parentElem.clientWidth | 0;
  parentHeight = this$static.parentElem.clientHeight | 0;
  for (l$iterator = new AbstractList$IteratorImpl(this$static.layers); l$iterator.i < l$iterator.this$01_0.size_1();) {
    l = (checkCriticalElement(l$iterator.i < l$iterator.this$01_0.size_1()) , dynamicCast(l$iterator.this$01_0.get_0(l$iterator.last = l$iterator.i++), 26));
    $adjustHorizontalConstraints(this$static, parentWidth, l);
    $adjustVerticalConstraints(this$static, parentHeight, l);
  }
  this$static.animation = new Layout$1(this$static, callback);
  $run_0(this$static.animation, duration, this$static.parentElem);
}

function $removeChild_0(this$static, layer){
  $removeChild_1(layer.container, layer.child);
  $remove_13(this$static.layers, layer);
}

function Layout(parent_0){
  this.impl = new LayoutImplIE8;
  this.layers = new ArrayList;
  this.parentElem = parent_0;
  $initParent(this.impl, parent_0);
}

defineClass(116, 1, {}, Layout);
var Lcom_google_gwt_layout_client_Layout_2_classLit = createForClass('com.google.gwt.layout.client', 'Layout', 116);
function $onComplete(this$static){
  this$static.this$01.animation = null;
  $layout(this$static.this$01, 0, null);
  !!this$static.val$callback2 && $onAnimationComplete(this$static.val$callback2);
}

function Layout$1(this$0, val$callback){
  this.this$01 = this$0;
  this.val$callback2 = val$callback;
  Animation.call(this);
}

defineClass(153, 91, {}, Layout$1);
_.onCancel = function onCancel_0(){
  $onComplete(this);
}
;
_.onComplete = function onComplete_0(){
  $onComplete(this);
}
;
_.onUpdate = function onUpdate(progress){
  var l, l$iterator, child;
  for (l$iterator = new AbstractList$IteratorImpl(this.this$01.layers); l$iterator.i < l$iterator.this$01_0.size_1();) {
    l = (checkCriticalElement(l$iterator.i < l$iterator.this$01_0.size_1()) , dynamicCast(l$iterator.this$01_0.get_0(l$iterator.last = l$iterator.i++), 26));
    l.setTargetLeft && (l.left_0 = l.sourceLeft + (l.targetLeft - l.sourceLeft) * progress);
    l.setTargetRight && (l.right = l.sourceRight + (l.targetRight - l.sourceRight) * progress);
    l.setTargetTop && (l.top_0 = l.sourceTop + (l.targetTop - l.sourceTop) * progress);
    l.setTargetBottom && (l.bottom = l.sourceBottom + (l.targetBottom - l.sourceBottom) * progress);
    l.setTargetWidth && (l.width_0 = l.sourceWidth + (l.targetWidth - l.sourceWidth) * progress);
    l.setTargetHeight && (l.height = l.sourceHeight + (l.targetHeight - l.sourceHeight) * progress);
    $layout_0(this.this$01.impl, l);
    !!this.val$callback2 && (child = l.userObject , instanceOf(child, 41) && dynamicCast(child, 41).onResize_0() , undefined);
  }
}
;
var Lcom_google_gwt_layout_client_Layout$1_2_classLit = createForClass('com.google.gwt.layout.client', 'Layout/1', 153);
function $setLeftRight(this$static, leftUnit, rightUnit){
  this$static.setTargetLeft = this$static.setTargetRight = true;
  this$static.setTargetWidth = false;
  this$static.targetLeft = 0;
  this$static.targetRight = 0;
  this$static.targetLeftUnit = leftUnit;
  this$static.targetRightUnit = rightUnit;
}

function $setLeftWidth(this$static, left, leftUnit, widthUnit){
  this$static.setTargetLeft = this$static.setTargetWidth = true;
  this$static.setTargetRight = false;
  this$static.targetLeft = left;
  this$static.targetWidth = 100;
  this$static.targetLeftUnit = leftUnit;
  this$static.targetWidthUnit = widthUnit;
}

function $setTopBottom(this$static, topUnit, bottomUnit){
  this$static.setTargetTop = this$static.setTargetBottom = true;
  this$static.setTargetHeight = false;
  this$static.targetTop = 2.5;
  this$static.targetBottom = 0;
  this$static.targetTopUnit = topUnit;
  this$static.targetBottomUnit = bottomUnit;
}

function $setTopHeight(this$static, top_0, topUnit, height, heightUnit){
  this$static.setTargetTop = this$static.setTargetHeight = true;
  this$static.setTargetBottom = false;
  this$static.targetTop = top_0;
  this$static.targetHeight = height;
  this$static.targetTopUnit = topUnit;
  this$static.targetHeightUnit = heightUnit;
}

function Layout$Layer(container, child, userObject){
  this.targetLeftUnit = ($clinit_Style$Unit() , PX);
  this.targetTopUnit = PX;
  this.targetRightUnit = PX;
  this.targetBottomUnit = PX;
  this.container = container;
  this.child = child;
  this.userObject = userObject;
}

defineClass(26, 1, {26:1}, Layout$Layer);
_.bottom = 0;
_.height = 0;
_.left_0 = 0;
_.right = 0;
_.setBottom = false;
_.setHeight = false;
_.setLeft = false;
_.setRight = false;
_.setTargetBottom = true;
_.setTargetHeight = false;
_.setTargetLeft = true;
_.setTargetRight = true;
_.setTargetTop = true;
_.setTargetWidth = false;
_.setTop = false;
_.setWidth = false;
_.sourceBottom = 0;
_.sourceHeight = 0;
_.sourceLeft = 0;
_.sourceRight = 0;
_.sourceTop = 0;
_.sourceWidth = 0;
_.targetBottom = 0;
_.targetHeight = 0;
_.targetLeft = 0;
_.targetRight = 0;
_.targetTop = 0;
_.targetWidth = 0;
_.top_0 = 0;
_.vPos = 2;
_.visible = true;
_.width_0 = 0;
var Lcom_google_gwt_layout_client_Layout$Layer_2_classLit = createForClass('com.google.gwt.layout.client', 'Layout/Layer', 26);
function $clinit_LayoutImpl(){
  $clinit_LayoutImpl = emptyMethod;
  fixedRuler = createRuler(($clinit_Style$Unit() , CM), CM);
  $appendChild($doc.body, fixedRuler);
}

function $attachChild_0(parent_0, child, before){
  var beforeContainer, container;
  container = $doc.createElement('div');
  container.appendChild(child);
  $setPropertyImpl(container.style, 'position', ($clinit_Style$Position() , 'absolute'));
  $setPropertyImpl(container.style, 'overflow', ($clinit_Style$Overflow() , 'hidden'));
  $fillParent(child);
  beforeContainer = null;
  !!before && (beforeContainer = $getParentElement(before));
  parent_0.insertBefore(container, beforeContainer);
  return container;
}

function $fillParent(elem){
  var style;
  style = elem.style;
  $setPropertyImpl(style, 'position', ($clinit_Style$Position() , 'absolute'));
  $setPropertyImpl(style, 'left', ($clinit_Style$Unit() , '0.0px'));
  $setPropertyImpl(style, 'top', '0.0px');
  $setPropertyImpl(style, 'right', '0.0px');
  $setPropertyImpl(style, 'bottom', '0.0px');
}

function $getUnitSizeInPixels(this$static, parent_0, unit, vertical){
  if (!unit) {
    return 1;
  }
  switch (unit.ordinal) {
    case 1:
      return (vertical?parent_0.clientHeight | 0:parent_0.clientWidth | 0) / 100;
    case 2:
      return ($getSubPixelOffsetWidth(this$static.relativeRuler) | 0) / 10;
    case 3:
      return ((this$static.relativeRuler.offsetHeight || 0) | 0) / 10;
    case 7:
      return ($getSubPixelOffsetWidth(fixedRuler) | 0) * 0.1;
    case 8:
      return ($getSubPixelOffsetWidth(fixedRuler) | 0) * 0.01;
    case 6:
      return ($getSubPixelOffsetWidth(fixedRuler) | 0) * 0.254;
    case 4:
      return ($getSubPixelOffsetWidth(fixedRuler) | 0) * 0.00353;
    case 5:
      return ($getSubPixelOffsetWidth(fixedRuler) | 0) * 0.0423;
    default:case 0:
      return 1;
  }
}

function $initParent(this$static, parent_0){
  $setPropertyImpl(parent_0.style, 'position', ($clinit_Style$Position() , 'relative'));
  $appendChild(parent_0, this$static.relativeRuler = createRuler(($clinit_Style$Unit() , EM), EX));
}

function $removeChild_1(container, child){
  var style;
  $removeFromParent(container);
  $getParentElement(child) == container && $removeFromParent(child);
  style = child.style;
  $setPropertyImpl(style, 'position', '');
  $setPropertyImpl(style, 'left', '');
  $setPropertyImpl(style, 'top', '');
  $setPropertyImpl(style, 'width', '');
  $setPropertyImpl(style, 'height', '');
}

function createRuler(widthUnit, heightUnit){
  var ruler, style;
  ruler = $doc.createElement('div');
  $setInnerHTML(ruler, '&nbsp;');
  style = ruler.style;
  $setPropertyImpl(style, 'position', ($clinit_Style$Position() , 'absolute'));
  $setPropertyImpl(style, 'zIndex', '-32767');
  $setPropertyImpl(style, 'top', -20 + heightUnit.getType());
  $setPropertyImpl(style, 'width', 10 + widthUnit.getType());
  $setPropertyImpl(style, 'height', 10 + heightUnit.getType());
  $setPropertyImpl(style, 'visibility', ($clinit_Style$Visibility() , 'hidden'));
  $set(($clinit_State() , HIDDEN), ruler, initValues(getClassLiteralForArray(Ljava_lang_Boolean_2_classLit, 1), $intern_3, 56, 0, [($clinit_Boolean() , $clinit_Boolean() , TRUE_0)]));
  return ruler;
}

defineClass(335, 1, {});
var fixedRuler;
var Lcom_google_gwt_layout_client_LayoutImpl_2_classLit = createForClass('com.google.gwt.layout.client', 'LayoutImpl', 335);
function $layout_0(this$static, layer){
  var oldDisplay, style;
  style = layer.container.style;
  setLayer(layer.container, layer);
  if (layer.visible) {
    oldDisplay = style['display'];
    $setPropertyImpl(style, 'display', '');
    oldDisplay.length > 0 && $updateVisibility(this$static, layer.container);
  }
   else {
    $setPropertyImpl(style, 'display', ($clinit_Style$Display() , 'none'));
  }
  layer.setLeft?$setValue(this$static, layer, 'left', layer.left_0, layer.leftUnit, false, false):$setPropertyImpl(style, 'left', '');
  layer.setRight?$setValue(this$static, layer, 'right', layer.right, layer.rightUnit, false, false):$setPropertyImpl(style, 'right', '');
  layer.setTop?$setValue(this$static, layer, 'top', layer.top_0, layer.topUnit, true, false):$setPropertyImpl(style, 'top', '');
  layer.setBottom?$setValue(this$static, layer, 'bottom', layer.bottom, layer.bottomUnit, true, false):$setPropertyImpl(style, 'bottom', '');
  layer.setWidth?$setValue(this$static, layer, 'width', layer.width_0, layer.widthUnit, false, true):$setPropertyImpl(style, 'width', '');
  layer.setHeight?$setValue(this$static, layer, 'height', layer.height, layer.heightUnit, true, true):$setPropertyImpl(style, 'height', '');
  style = layer.child.style;
  switch (2) {
    case 2:
      $setPropertyImpl(style, 'left', ($clinit_Style$Unit() , '0.0px'));
      $setPropertyImpl(style, 'right', '0.0px');
  }
  switch (layer.vPos) {
    case 0:
      $setPropertyImpl(style, 'top', ($clinit_Style$Unit() , '0.0px'));
      $setPropertyImpl(style, 'bottom', '');
      break;
    case 1:
      $setPropertyImpl(style, 'top', '');
      $setPropertyImpl(style, 'bottom', ($clinit_Style$Unit() , '0.0px'));
      break;
    case 2:
      $setPropertyImpl(style, 'top', ($clinit_Style$Unit() , '0.0px'));
      $setPropertyImpl(style, 'bottom', '0.0px');
  }
}

function $removeLayerRefs(parent_0){
  for (var i = 0; i < parent_0.childNodes.length; ++i) {
    var container = parent_0.childNodes[i];
    container.__layer && (container.__layer = null);
  }
}

function $setValue(this$static, layer, prop, value_0, unit, vertical, noNegative){
  switch (unit.ordinal) {
    case 0:
    case 1:
      break;
    default:value_0 = value_0 * $getUnitSizeInPixels(this$static, layer.container, unit, vertical);
      value_0 = round_int(value_0 + 0.5);
      unit = ($clinit_Style$Unit() , PX);
  }
  noNegative && value_0 < 0 && (value_0 = 0);
  layer.container.style[prop] = value_0 + unit.getType();
}

function $updateVisibility(this$static, container){
  var i, layer, node, nodes;
  layer = container.__layer;
  !!layer && $layout_0(this$static, layer);
  nodes = container.childNodes;
  for (i = 0; i < nodes.length; ++i) {
    node = nodes[i];
    node.nodeType == 1 && $updateVisibility(this$static, node);
  }
}

function LayoutImplIE8(){
  $clinit_LayoutImpl();
}

function setLayer(container, layer){
  container.__layer = layer;
}

defineClass(280, 335, {}, LayoutImplIE8);
var Lcom_google_gwt_layout_client_LayoutImplIE8_2_classLit = createForClass('com.google.gwt.layout.client', 'LayoutImplIE8', 280);
function $getElement(this$static){
  return $clinit_DOM() , this$static.element;
}

function $replaceNode(node, newNode){
  var p = node.parentNode;
  if (!p) {
    return;
  }
  p.insertBefore(newNode, node);
  p.removeChild(node);
}

function $resolvePotentialElement(){
  throw new UnsupportedOperationException;
}

function $setElement(this$static, elem){
  $setElement_0(this$static, ($clinit_DOM() , elem));
}

function $setElement_0(this$static, elem){
  this$static.element = elem;
}

function $setHeight(this$static, height){
  ($clinit_DOM() , this$static.element).style['height'] = height;
}

function $setSize_0(this$static){
  ($clinit_DOM() , this$static.element).style['width'] = '1500px';
  this$static.element.style['height'] = '600px';
}

function $setStyleName(this$static, style){
  $setClassName(this$static.getStyleElement(), style);
}

function $setStyleName_0(this$static, style, add_0){
  setStyleName(this$static.getStyleElement(), style, add_0);
}

function $setWidth(this$static, width_0){
  ($clinit_DOM() , this$static.element).style['width'] = width_0;
}

function $sinkBitlessEvent(this$static, eventTypeName){
  $clinit_DOM();
  $sinkBitlessEvent_0(this$static.element, eventTypeName);
}

function getStylePrimaryName(elem){
  var fullClassName, spaceIdx;
  fullClassName = $getClassName(elem);
  spaceIdx = fullClassName.indexOf(' ');
  if (spaceIdx >= 0) {
    return fullClassName.substr(0, spaceIdx);
  }
  return fullClassName;
}

function setStyleName(elem, style, add_0){
  if (!elem) {
    throw new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw new IllegalArgumentException_0('Style names cannot be empty');
  }
  add_0?$addClassName(elem, style):$removeClassName(elem, style);
}

function setStylePrimaryName(elem, style){
  if (!elem) {
    throw new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw new IllegalArgumentException_0('Style names cannot be empty');
  }
  updatePrimaryAndDependentStyleNames(elem, style);
}

function setVisible(elem, visible){
  elem.style.display = visible?'':'none';
  visible?elem.removeAttribute('aria-hidden'):elem.setAttribute('aria-hidden', 'true');
}

function updatePrimaryAndDependentStyleNames(elem, newPrimaryStyle){
  var classes = (elem.className || '').split(/\s+/);
  if (!classes) {
    return;
  }
  var oldPrimaryStyle = classes[0];
  var oldPrimaryStyleLen = oldPrimaryStyle.length;
  classes[0] = newPrimaryStyle;
  for (var i = 1, n = classes.length; i < n; i++) {
    var name_0 = classes[i];
    name_0.length > oldPrimaryStyleLen && name_0.charAt(oldPrimaryStyleLen) == '-' && name_0.indexOf(oldPrimaryStyle) == 0 && (classes[i] = newPrimaryStyle + name_0.substring(oldPrimaryStyleLen));
  }
  elem.className = classes.join(' ');
}

defineClass(7, 1, {10:1, 7:1});
_.getStyleElement = function getStyleElement(){
  return $clinit_DOM() , this.element;
}
;
_.resolvePotentialElement = function resolvePotentialElement(){
  return $resolvePotentialElement();
}
;
_.setHeight_0 = function setHeight(height){
  $setHeight(this, height);
}
;
_.setVisible = function setVisible_0(visible){
  setVisible(($clinit_DOM() , this.element), visible);
}
;
_.setWidth_0 = function setWidth(width_0){
  $setWidth(this, width_0);
}
;
_.toString$ = function toString_12(){
  if (!this.element) {
    return '(null handle)';
  }
  return ($clinit_DOM() , this.element).outerHTML;
}
;
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject', 7);
function $addDomHandler(this$static, handler, type_0){
  var typeInt;
  typeInt = getTypeInt(type_0.name_0);
  typeInt == -1?$sinkBitlessEvent(this$static, type_0.name_0):this$static.sinkEvents(typeInt);
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $fireEvent_0(this$static, event_0){
  !!this$static.handlerManager && $fireEvent(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.isAttached()) {
    throw new IllegalStateException_0("Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.attached = true;
  $clinit_DOM();
  setEventListener(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && this$static.sinkEvents(bitsToAdd);
  this$static.doAttachChildren();
  this$static.onLoad();
}

function $onBrowserEvent(this$static, event_0){
  var related;
  switch ($clinit_DOM() , $eventGetTypeInt(event_0.type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget;
      if (!!related && isOrHasChildImpl(this$static.element, related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this$static, this$static.element);
}

function $onDetach(this$static){
  if (!this$static.isAttached()) {
    throw new IllegalStateException_0("Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    this$static.onUnload();
  }
   finally {
    try {
      this$static.doDetachChildren();
    }
     finally {
      $clinit_DOM();
      setEventListener(this$static.element, null);
      this$static.attached = false;
    }
  }
}

function $removeFromParent_0(this$static){
  if (!this$static.parent_0) {
    $clinit_RootPanel();
    $contains_0(widgetsToDetach, this$static) && detachNow(this$static);
  }
   else if (instanceOf(this$static.parent_0, 17)) {
    dynamicCast(this$static.parent_0, 17).remove_0(this$static);
  }
   else if (this$static.parent_0) {
    throw new IllegalStateException_0("This widget's parent does not implement HasWidgets");
  }
}

function $replaceElement(this$static, elem){
  this$static.attached && ($clinit_DOM() , setEventListener(this$static.element, null));
  !!this$static.element && $replaceNode(this$static.element, elem);
  this$static.element = elem;
  this$static.attached && ($clinit_DOM() , setEventListener(this$static.element, this$static));
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.isAttached() && this$static.onDetach();
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw new IllegalStateException_0('Cannot set a new parent without first clearing the old parent');
    }
    this$static.parent_0 = parent_0;
    parent_0.isAttached() && this$static.onAttach();
  }
}

function $sinkEvents(this$static, eventBitsToAdd){
  this$static.eventsToSink == -1?($clinit_DOM() , $sinkEvents_0(this$static.element, eventBitsToAdd | (this$static.element.__eventBits || 0))):(this$static.eventsToSink |= eventBitsToAdd);
}

defineClass(6, 7, $intern_14);
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.fireEvent = function fireEvent_0(event_0){
  $fireEvent_0(this, event_0);
}
;
_.isAttached = function isAttached(){
  return this.attached;
}
;
_.onAttach = function onAttach(){
  $onAttach(this);
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  $onBrowserEvent(this, event_0);
}
;
_.onDetach = function onDetach(){
  $onDetach(this);
}
;
_.onLoad = function onLoad(){
}
;
_.onUnload = function onUnload(){
}
;
_.sinkEvents = function sinkEvents(eventBitsToAdd){
  $sinkEvents(this, eventBitsToAdd);
}
;
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Widget', 6);
function $setEnabled(this$static, enabled){
  ($clinit_DOM() , this$static.element)['disabled'] = !enabled;
}

function FocusWidget(elem){
  $setElement_0(this, ($clinit_DOM() , elem));
}

defineClass(96, 6, $intern_14);
_.getTabIndex = function getTabIndex(){
  return $getTabIndex(($clinit_DOM() , this.element));
}
;
_.onAttach = function onAttach_0(){
  var tabIndex;
  $onAttach(this);
  tabIndex = this.getTabIndex();
  -1 == tabIndex && this.setTabIndex(0);
}
;
_.setTabIndex = function setTabIndex(index_0){
  $setTabIndex(($clinit_DOM() , this.element), index_0);
}
;
var Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FocusWidget', 96);
function $getMediaElement(this$static){
  return $clinit_DOM() , this$static.element;
}

defineClass(171, 96, $intern_14);
var Lcom_google_gwt_media_client_MediaBase_2_classLit = createForClass('com.google.gwt.media.client', 'MediaBase', 171);
function Audio_0(element){
  $setElement_0(this, ($clinit_DOM() , element));
}

function createIfSupported(){
  var element;
  !detector && (detector = new Audio$AudioElementSupportDetectedMaybe);
  element = $doc.createElement('audio');
  if (!element.canPlayType) {
    return null;
  }
  return new Audio_0(element);
}

defineClass(172, 171, $intern_14, Audio_0);
var detector;
var Lcom_google_gwt_media_client_Audio_2_classLit = createForClass('com.google.gwt.media.client', 'Audio', 172);
defineClass(325, 1, {});
var Lcom_google_gwt_media_client_Audio$AudioElementSupportDetector_2_classLit = createForClass('com.google.gwt.media.client', 'Audio/AudioElementSupportDetector', 325);
function Audio$AudioElementSupportDetectedMaybe(){
}

defineClass(173, 325, {}, Audio$AudioElementSupportDetectedMaybe);
var Lcom_google_gwt_media_client_Audio$AudioElementSupportDetectedMaybe_2_classLit = createForClass('com.google.gwt.media.client', 'Audio/AudioElementSupportDetectedMaybe', 173);
var instance_1;
function CommonResources_Bundle_ie9_default_InlineClientBundleGenerator(){
}

defineClass(291, 1, {}, CommonResources_Bundle_ie9_default_InlineClientBundleGenerator);
var inlineBlockStyle;
var Lcom_google_gwt_resources_client_CommonResources_1Bundle_1ie9_1default_1InlineClientBundleGenerator_2_classLit = createForClass('com.google.gwt.resources.client', 'CommonResources_Bundle_ie9_default_InlineClientBundleGenerator', 291);
function $ensureInjected(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '.GPBYFDEH{position:relative;display:inline-block;}');
    schedule();
    return true;
  }
  return false;
}

function CommonResources_Bundle_ie9_default_InlineClientBundleGenerator$1(){
}

defineClass(292, 1, {}, CommonResources_Bundle_ie9_default_InlineClientBundleGenerator$1);
_.injected = false;
var Lcom_google_gwt_resources_client_CommonResources_1Bundle_1ie9_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.google.gwt.resources.client', 'CommonResources_Bundle_ie9_default_InlineClientBundleGenerator/1', 292);
function $clinit_CommonResources_Bundle_ie9_default_InlineClientBundleGenerator$inlineBlockStyleInitializer(){
  $clinit_CommonResources_Bundle_ie9_default_InlineClientBundleGenerator$inlineBlockStyleInitializer = emptyMethod;
  inlineBlockStyle = new CommonResources_Bundle_ie9_default_InlineClientBundleGenerator$1;
}

function SafeUriString(uri_0){
  this.uri_0 = uri_0;
}

defineClass(105, 1, {303:1, 105:1}, SafeUriString);
_.equals$ = function equals_5(obj){
  if (!instanceOf(obj, 303)) {
    return false;
  }
  return $equals(this.uri_0, dynamicCast(dynamicCast(obj, 303), 105).uri_0);
}
;
_.hashCode$ = function hashCode_7(){
  return getHashCode_0(this.uri_0);
}
;
var Lcom_google_gwt_safehtml_shared_SafeUriString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeUriString', 105);
function $clinit_UriUtils(){
  $clinit_UriUtils = emptyMethod;
  new RegExp('%5B', 'g');
  new RegExp('%5D', 'g');
}

function $getItem(this$static, key){
  return $getItem_0(this$static.storage, key);
}

function $removeItem(this$static, key){
  $removeItem_0(this$static.storage, key);
}

function $setItem(this$static, key, data_0){
  $setItem_0(this$static.storage, key, data_0);
}

function Storage_0(){
  this.storage = 'localStorage';
}

defineClass(103, 1, {}, Storage_0);
var localStorage_0;
var Lcom_google_gwt_storage_client_Storage_2_classLit = createForClass('com.google.gwt.storage.client', 'Storage', 103);
function $clinit_Storage$StorageSupportDetector(){
  $clinit_Storage$StorageSupportDetector = emptyMethod;
  localStorageSupported = checkStorageSupport('localStorage');
  checkStorageSupport('sessionStorage');
}

function checkStorageSupport(storage){
  var c = '_gwt_dummy_';
  try {
    $wnd[storage].setItem(c, c);
    $wnd[storage].removeItem(c);
    return true;
  }
   catch (e) {
    return false;
  }
}

var localStorageSupported = false;
function $getItem_0(storage, key){
  return $wnd[storage].getItem(key);
}

function $removeItem_0(storage, key){
  $getItem_0(storage, key);
  $wnd[storage].removeItem(key);
}

function $setItem_0(storage, key, data_0){
  $getItem_0(storage, key);
  $wnd[storage].setItem(key, data_0);
}

defineClass(336, 1, {});
var Lcom_google_gwt_text_shared_AbstractRenderer_2_classLit = createForClass('com.google.gwt.text.shared', 'AbstractRenderer', 336);
function PassthroughParser(){
}

defineClass(278, 1, {}, PassthroughParser);
var INSTANCE_0;
var Lcom_google_gwt_text_shared_testing_PassthroughParser_2_classLit = createForClass('com.google.gwt.text.shared.testing', 'PassthroughParser', 278);
function PassthroughRenderer(){
}

defineClass(277, 336, {}, PassthroughRenderer);
var INSTANCE_1;
var Lcom_google_gwt_text_shared_testing_PassthroughRenderer_2_classLit = createForClass('com.google.gwt.text.shared.testing', 'PassthroughRenderer', 277);
function $clinit_DOM(){
  $clinit_DOM = emptyMethod;
  $clinit_DOMImplStandard();
}

function dispatchEvent_0(evt, elem){
  $clinit_DOM();
  var eventListener;
  eventListener = getEventListener(elem);
  if (!eventListener) {
    return false;
  }
  dispatchEvent_1(evt, elem, eventListener);
  return true;
}

function dispatchEvent_1(evt, elem, listener){
  $clinit_DOM();
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(evt.type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function insertChild(parent_0, child, index_0){
  $clinit_DOM();
  $insertChild(parent_0, resolve(child), index_0);
}

function isPotential(o){
  $clinit_DOM();
  try {
    return !!o && !!o.__gwt_resolve;
  }
   catch (e) {
    return false;
  }
}

function previewEvent(evt){
  $clinit_DOM();
  var ret;
  ret = fire_5(handlers_0, evt);
  if (!ret && !!evt) {
    $eventStopPropagation(evt);
    $eventPreventDefault(evt);
  }
  return ret;
}

function releaseCapture(elem){
  $clinit_DOM();
  !!sCaptureElem && elem == sCaptureElem && (sCaptureElem = null);
  $maybeInitializeEventSystem();
  ($clinit_DOMImplStandard() , captureElem) == elem && (captureElem = null);
}

function resolve(maybePotential){
  $clinit_DOM();
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

function setCapture(elem){
  $clinit_DOM();
  sCaptureElem = elem;
  $maybeInitializeEventSystem();
  $clinit_DOMImplStandard();
  captureElem = elem;
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 4, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals('CSS1Compat', allowedModes[0]) && $equals('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function $getTypeInt(this$static){
  return $clinit_DOM() , $eventGetTypeInt(this$static.type);
}

function addNativePreviewHandler(handler){
  $clinit_DOM();
  $maybeInitializeEventSystem();
  !TYPE_9 && (TYPE_9 = new GwtEvent$Type);
  if (!handlers_0) {
    handlers_0 = new HandlerManager_0(null, true);
    singleton = new Event$NativePreviewEvent;
  }
  return $addHandler(handlers_0, TYPE_9, handler);
}

function getTypeInt(typeName){
  return $eventGetTypeInt(($clinit_DOM() , typeName));
}

function sinkEvents_0(elem){
  $clinit_DOM();
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, 32768);
}

var handlers_0;
function $dispatch_3(this$static, handler){
  $previewNativeEvent(handler.this$01, this$static);
  singleton.isFirstHandler = false;
}

function $revive(this$static){
  this$static.dead = false;
  this$static.source = null;
  this$static.isCanceled = false;
  this$static.isConsumed = false;
  this$static.isFirstHandler = true;
  this$static.nativeEvent = null;
}

function $setNativeEvent_0(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function Event$NativePreviewEvent(){
}

function fire_5(handlers, nativeEvent){
  var lastIsCanceled, lastIsConsumed, lastIsFirstHandler, lastNativeEvent, ret;
  if (!!TYPE_9 && !!handlers && $isEventHandled(handlers, TYPE_9)) {
    lastIsCanceled = singleton.isCanceled;
    lastIsConsumed = singleton.isConsumed;
    lastIsFirstHandler = singleton.isFirstHandler;
    lastNativeEvent = singleton.nativeEvent;
    $revive(singleton);
    $setNativeEvent_0(singleton, nativeEvent);
    $fireEvent(handlers, singleton);
    ret = !(singleton.isCanceled && !singleton.isConsumed);
    singleton.isCanceled = lastIsCanceled;
    singleton.isConsumed = lastIsConsumed;
    singleton.isFirstHandler = lastIsFirstHandler;
    singleton.nativeEvent = lastNativeEvent;
    return ret;
  }
  return true;
}

defineClass(236, 329, {}, Event$NativePreviewEvent);
_.dispatch = function dispatch_9(handler){
  $dispatch_3(this, dynamicCast(handler, 339));
}
;
_.getAssociatedType = function getAssociatedType_10(){
  return TYPE_9;
}
;
_.revive = function revive_0(){
  $revive(this);
}
;
_.isCanceled = false;
_.isConsumed = false;
_.isFirstHandler = false;
var TYPE_9, singleton;
var Lcom_google_gwt_user_client_Event$NativePreviewEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Event/NativePreviewEvent', 236);
function $clinit_History(){
  $clinit_History = emptyMethod;
  new History$HistoryImpl;
  historyEventSource = new History$HistoryEventSource;
  token = getDecodedHash();
}

function addValueChangeHandler(handler){
  $clinit_History();
  return $addValueChangeHandler(historyEventSource, handler);
}

function getDecodedHash(){
  var hashToken, href_0, hashLoc;
  hashToken = (href_0 = $wnd.location.href , hashLoc = href_0.indexOf('#') , hashLoc > 0?href_0.substring(hashLoc):'');
  if (hashToken == null || !hashToken.length) {
    return '';
  }
  return $decodeHistoryToken(__substr(hashToken, 1, hashToken.length - 1));
}

function onHashChanged(){
  $clinit_History();
  var hashToken;
  hashToken = getDecodedHash();
  if (!$equals(hashToken, token)) {
    token = hashToken;
    fire_4(historyEventSource);
  }
}

var historyEventSource, token;
function $addValueChangeHandler(this$static, handler){
  return $addHandler(this$static.handlers, (!TYPE_8 && (TYPE_8 = new GwtEvent$Type) , TYPE_8), handler);
}

function History$HistoryEventSource(){
  this.handlers = new HandlerManager(null);
}

defineClass(286, 1, {8:1}, History$HistoryEventSource);
_.fireEvent = function fireEvent_1(event_0){
  $fireEvent(this.handlers, event_0);
}
;
var Lcom_google_gwt_user_client_History$HistoryEventSource_2_classLit = createForClass('com.google.gwt.user.client', 'History/HistoryEventSource', 286);
function $decodeHistoryToken(historyToken){
  return $wnd.decodeURI(historyToken.replace('%23', '#'));
}

function History$HistoryImpl(){
  var handler;
  handler = $entry(onHashChanged);
  $wnd.addEventListener('hashchange', handler, false);
}

defineClass(287, 1, {}, History$HistoryImpl);
var Lcom_google_gwt_user_client_History$HistoryImpl_2_classLit = createForClass('com.google.gwt.user.client', 'History/HistoryImpl', 287);
function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_6?TYPE_6:(TYPE_6 = new GwtEvent$Type), handler);
}

function addHandler(type_0, handler){
  return $addHandler((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1), type_0, handler);
}

function addResizeHandler(handler){
  maybeInitializeCloseHandlers();
  maybeInitializeResizeHandlers();
  return addHandler((!TYPE_7 && (TYPE_7 = new GwtEvent$Type) , TYPE_7), handler);
}

function alert_0(msg){
  $wnd.alert(msg);
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initHandler('function __gwt_initWindowCloseHandler(beforeunload, unload) {\n  var wnd = window\n  , oldOnBeforeUnload = wnd.onbeforeunload\n  , oldOnUnload = wnd.onunload;\n  \n  wnd.onbeforeunload = function(evt) {\n    var ret, oldRet;\n    try {\n      ret = beforeunload();\n    } finally {\n      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);\n    }\n    // Avoid returning null as IE6 will coerce it into a string.\n    // Ensure that "" gets returned properly.\n    if (ret != null) {\n      return ret;\n    }\n    if (oldRet != null) {\n      return oldRet;\n    }\n    // returns undefined.\n  };\n  \n  wnd.onunload = function(evt) {\n    try {\n      unload();\n    } finally {\n      oldOnUnload && oldOnUnload(evt);\n      wnd.onresize = null;\n      wnd.onscroll = null;\n      wnd.onbeforeunload = null;\n      wnd.onunload = null;\n    }\n  };\n  \n  // Remove the reference once we\'ve initialize the handler\n  wnd.__gwt_initWindowCloseHandler = undefined;\n}\n', new WindowImplIE$1);
    closeHandlersInitialized = true;
  }
}

function maybeInitializeResizeHandlers(){
  if (!resizeHandlersInitialized) {
    $initHandler("function __gwt_initWindowResizeHandler(resize) {\n  var wnd = window, oldOnResize = wnd.onresize;\n  \n  wnd.onresize = function(evt) {\n    try {\n      resize();\n    } finally {\n      oldOnResize && oldOnResize(evt);\n    }\n  };\n  \n  // Remove the reference once we've initialize the handler\n  wnd.__gwt_initWindowResizeHandler = undefined;\n}\n", new WindowImplIE$2);
    resizeHandlersInitialized = true;
  }
}

function onClosed(){
  closeHandlersInitialized && fire_1((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1));
}

function onClosing(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent;
    !!handlers_1 && $fireEvent(handlers_1, event_0);
    return null;
  }
  return null;
}

function onResize(){
  var height, width_0;
  if (resizeHandlersInitialized) {
    width_0 = $getClientWidth($doc);
    height = $getClientHeight($doc);
    if (lastResizeWidth != width_0 || lastResizeHeight != height) {
      lastResizeWidth = width_0;
      lastResizeHeight = height;
      fire_2((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1), width_0);
    }
  }
}

var closeHandlersInitialized = false, handlers_1, lastResizeHeight = 0, lastResizeWidth = 0, resizeHandlersInitialized = false;
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = emptyMethod;
  TYPE_10 = new GwtEvent$Type;
}

function Window$ClosingEvent(){
  $clinit_Window$ClosingEvent();
}

defineClass(256, 329, {}, Window$ClosingEvent);
_.dispatch = function dispatch_10(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_11(){
  return TYPE_10;
}
;
var TYPE_10;
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ClosingEvent', 256);
function Window$WindowHandlers(){
  HandlerManager.call(this, null);
}

defineClass(102, 72, {8:1}, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client', 'Window/WindowHandlers', 102);
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return 65536;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return $intern_13;
    case 'touchstart':
      return $intern_15;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return $intern_16;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return $intern_17;
    case 'gesturechange':
      return $intern_18;
    case 'gestureend':
      return $intern_19;
    default:return -1;
  }
}

function $getEventsSunk(elem){
  return elem.__eventBits || 0;
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    eventSystemIsInitialized = true;
  }
}

function getEventListener(elem){
  var maybeListener = elem.__listener;
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 11)?maybeListener:null;
}

function setEventListener(elem, listener){
  elem.__listener = listener;
}

var eventSystemIsInitialized = false;
function $clinit_DOMImplStandard(){
  $clinit_DOMImplStandard = emptyMethod;
  bitlessEventDispatchers = {_default_:dispatchEvent_3, dragenter:dispatchDragEvent, dragover:dispatchDragEvent};
  captureEventDispatchers = {click:dispatchCapturedMouseEvent, dblclick:dispatchCapturedMouseEvent, mousedown:dispatchCapturedMouseEvent, mouseup:dispatchCapturedMouseEvent, mousemove:dispatchCapturedMouseEvent, mouseover:dispatchCapturedMouseEvent, mouseout:dispatchCapturedMouseEvent, mousewheel:dispatchCapturedMouseEvent, keydown:dispatchCapturedEvent, keyup:dispatchCapturedEvent, keypress:dispatchCapturedEvent, touchstart:dispatchCapturedMouseEvent, touchend:dispatchCapturedMouseEvent, touchmove:dispatchCapturedMouseEvent, touchcancel:dispatchCapturedMouseEvent, gesturestart:dispatchCapturedMouseEvent, gestureend:dispatchCapturedMouseEvent, gesturechange:dispatchCapturedMouseEvent};
}

function $getChild(elem, index_0){
  var count = 0, child = elem.firstChild;
  while (child) {
    if (child.nodeType == 1) {
      if (index_0 == count)
        return child;
      ++count;
    }
    child = child.nextSibling;
  }
  return null;
}

function $getChildCount(elem){
  var count = 0, child = elem.firstChild;
  while (child) {
    child.nodeType == 1 && ++count;
    child = child.nextSibling;
  }
  return count;
}

function $initEventSystem(){
  dispatchEvent_2 = $entry(dispatchEvent_3);
  dispatchUnhandledEvent = $entry(dispatchUnhandledEvent_0);
  var foreach = foreach_0;
  var bitlessEvents = bitlessEventDispatchers;
  foreach(bitlessEvents, function(e, fn){
    bitlessEvents[e] = $entry(fn);
  }
  );
  var captureEvents_0 = captureEventDispatchers;
  foreach(captureEvents_0, function(e, fn){
    captureEvents_0[e] = $entry(fn);
  }
  );
  foreach(captureEvents_0, function(e, fn){
    $wnd.addEventListener(e, fn, true);
  }
  );
}

function $insertChild(parent_0, toAdd, index_0){
  var count = 0, child = parent_0.firstChild, before = null;
  while (child) {
    if (child.nodeType == 1) {
      if (count == index_0) {
        before = child;
        break;
      }
      ++count;
    }
    child = child.nextSibling;
  }
  parent_0.insertBefore(toAdd, before);
}

function $sinkBitlessEvent_0(elem, eventTypeName){
  $maybeInitializeEventSystem();
  $sinkBitlessEventImpl(elem, eventTypeName);
  $equals('dragover', eventTypeName) && $sinkBitlessEventImpl(elem, 'dragenter');
}

function $sinkBitlessEventImpl(elem, eventTypeName){
  var dispatchMap = bitlessEventDispatchers;
  var dispatcher = dispatchMap[eventTypeName] || dispatchMap['_default_'];
  elem.addEventListener(eventTypeName, dispatcher, false);
}

function $sinkEvents_0(elem, bits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, bits);
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?dispatchEvent_2:null);
  chMask & 2 && (elem.ondblclick = bits & 2?dispatchEvent_2:null);
  chMask & 4 && (elem.onmousedown = bits & 4?dispatchEvent_2:null);
  chMask & 8 && (elem.onmouseup = bits & 8?dispatchEvent_2:null);
  chMask & 16 && (elem.onmouseover = bits & 16?dispatchEvent_2:null);
  chMask & 32 && (elem.onmouseout = bits & 32?dispatchEvent_2:null);
  chMask & 64 && (elem.onmousemove = bits & 64?dispatchEvent_2:null);
  chMask & 128 && (elem.onkeydown = bits & 128?dispatchEvent_2:null);
  chMask & 256 && (elem.onkeypress = bits & 256?dispatchEvent_2:null);
  chMask & 512 && (elem.onkeyup = bits & 512?dispatchEvent_2:null);
  chMask & 1024 && (elem.onchange = bits & 1024?dispatchEvent_2:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?dispatchEvent_2:null);
  chMask & 4096 && (elem.onblur = bits & 4096?dispatchEvent_2:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?dispatchEvent_2:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?dispatchEvent_2:null);
  chMask & 32768 && (elem.onload = bits & 32768?dispatchUnhandledEvent:null);
  chMask & 65536 && (elem.onerror = bits & 65536?dispatchEvent_2:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?dispatchEvent_2:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?dispatchEvent_2:null);
  chMask & $intern_13 && (elem.onpaste = bits & $intern_13?dispatchEvent_2:null);
  chMask & $intern_15 && (elem.ontouchstart = bits & $intern_15?dispatchEvent_2:null);
  chMask & 2097152 && (elem.ontouchmove = bits & 2097152?dispatchEvent_2:null);
  chMask & $intern_16 && (elem.ontouchend = bits & $intern_16?dispatchEvent_2:null);
  chMask & 8388608 && (elem.ontouchcancel = bits & 8388608?dispatchEvent_2:null);
  chMask & $intern_17 && (elem.ongesturestart = bits & $intern_17?dispatchEvent_2:null);
  chMask & $intern_18 && (elem.ongesturechange = bits & $intern_18?dispatchEvent_2:null);
  chMask & $intern_19 && (elem.ongestureend = bits & $intern_19?dispatchEvent_2:null);
}

function dispatchCapturedEvent(evt){
  previewEvent(evt);
}

function dispatchCapturedMouseEvent(evt){
  var cancelled;
  cancelled = !previewEvent(evt);
  if (cancelled || !captureElem) {
    return;
  }
  dispatchEvent_0(evt, captureElem) && $eventStopPropagation(evt);
}

function dispatchDragEvent(evt){
  $eventPreventDefault(evt);
  dispatchEvent_3(evt);
}

function dispatchEvent_3(evt){
  var element;
  element = getFirstAncestorWithListener(evt);
  if (!element) {
    return;
  }
  dispatchEvent_1(evt, element.nodeType != 1?null:element, getEventListener(element));
}

function dispatchUnhandledEvent_0(evt){
  var element;
  element = $eventGetCurrentTarget(evt);
  $setPropertyString(element, '__gwtLastUnhandledEvent', evt.type);
  dispatchEvent_3(evt);
}

function getFirstAncestorWithListener(evt){
  var curElem;
  curElem = $eventGetCurrentTarget(evt);
  while (!!curElem && !getEventListener(curElem)) {
    curElem = curElem.parentNode;
  }
  return curElem;
}

var bitlessEventDispatchers, captureElem, captureEventDispatchers, dispatchEvent_2, dispatchUnhandledEvent;
function $get_1(this$static, elem){
  var index_0;
  index_0 = getIndex(elem);
  if (index_0 < 0) {
    return null;
  }
  return dynamicCast($get_4(this$static.uiObjectList, index_0), 7);
}

function $removeByElement(this$static, elem){
  var index_0;
  index_0 = getIndex(elem);
  elem['__uiObjectID'] = null;
  $set_0(this$static.uiObjectList, index_0);
}

function ElementMapperImpl(){
  this.uiObjectList = new ArrayList;
}

function getIndex(elem){
  var index_0 = elem['__uiObjectID'];
  return index_0 == null?-1:index_0;
}

defineClass(279, 1, {}, ElementMapperImpl);
var Lcom_google_gwt_user_client_impl_ElementMapperImpl_2_classLit = createForClass('com.google.gwt.user.client.impl', 'ElementMapperImpl', 279);
function foreach_0(map_0, fn){
  for (var e in map_0) {
    map_0.hasOwnProperty(e) && fn(e, map_0[e]);
  }
}

function $initHandler(initFunc, cmd){
  var scriptElem;
  scriptElem = $createScriptElement($doc, initFunc);
  $appendChild($doc.body, scriptElem);
  cmd.execute_1();
  $removeChild($doc.body, scriptElem);
}

function WindowImplIE$1(){
}

defineClass(269, 1, {}, WindowImplIE$1);
_.execute_1 = function execute_4(){
  $wnd.__gwt_initWindowCloseHandler($entry(onClosing), $entry(onClosed));
}
;
var Lcom_google_gwt_user_client_impl_WindowImplIE$1_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplIE/1', 269);
function WindowImplIE$2(){
}

defineClass(270, 1, {}, WindowImplIE$2);
_.execute_1 = function execute_5(){
  $wnd.__gwt_initWindowResizeHandler($entry(onResize));
}
;
var Lcom_google_gwt_user_client_impl_WindowImplIE$2_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplIE/2', 270);
function $adopt(this$static, child){
  $setParent(child, this$static);
}

function $clear(this$static){
  var it;
  it = new WidgetCollection$WidgetIterator(this$static.children_0);
  while (it.index_0 < it.this$01.size_0) {
    $next_1(it);
    $remove_9(it);
  }
}

defineClass(322, 6, $intern_20);
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Panel', 322);
function $add(this$static, child, container){
  $removeFromParent_0(child);
  $add_6(this$static.children_0, child);
  $clinit_DOM();
  $appendChild(container, resolve(child.element));
  $setParent(child, this$static);
}

function $adjustIndex(this$static, child, beforeIndex){
  var idx;
  $checkIndexBoundsForInsertion(this$static, beforeIndex);
  if (child.parent_0 == this$static) {
    idx = $indexOf(this$static.children_0, child);
    idx < beforeIndex && --beforeIndex;
  }
  return beforeIndex;
}

function $checkIndexBoundsForAccess(this$static, index_0){
  if (index_0 < 0 || index_0 >= this$static.children_0.size_0) {
    throw new IndexOutOfBoundsException;
  }
}

function $checkIndexBoundsForInsertion(this$static, index_0){
  if (index_0 < 0 || index_0 > this$static.children_0.size_0) {
    throw new IndexOutOfBoundsException;
  }
}

function $getWidget(this$static, index_0){
  return $get_2(this$static.children_0, index_0);
}

function $getWidgetIndex(this$static, child){
  return $indexOf(this$static.children_0, child);
}

function $insert(this$static, child, container, beforeIndex){
  beforeIndex = $adjustIndex(this$static, child, beforeIndex);
  $removeFromParent_0(child);
  $insert_6(this$static.children_0, child, beforeIndex);
  insertChild(container, ($clinit_DOM() , child.element), beforeIndex);
  $setParent(child, this$static);
}

function $remove(this$static, index_0){
  return $remove_0(this$static, $get_2(this$static.children_0, index_0));
}

function $remove_0(this$static, w){
  var elem;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = ($clinit_DOM() , w.element);
    $removeChild((null , $getParentElement(elem)), elem);
    $remove_8(this$static.children_0, w);
  }
  return true;
}

function ComplexPanel(){
  this.children_0 = new WidgetCollection(this);
}

defineClass(69, 322, $intern_20);
_.iterator = function iterator_0(){
  return new WidgetCollection$WidgetIterator(this.children_0);
}
;
_.remove_0 = function remove_0(w){
  return $remove_0(this, w);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ComplexPanel', 69);
function $add_0(this$static, w){
  $add(this$static, w, ($clinit_DOM() , this$static.element));
}

function $remove_1(this$static, w){
  var removed;
  removed = $remove_0(this$static, w);
  removed && changeToStaticPositioning(($clinit_DOM() , w.element));
  return removed;
}

function changeToStaticPositioning(elem){
  $setPropertyImpl(elem.style, 'left', '');
  $setPropertyImpl(elem.style, 'top', '');
  $setPropertyImpl(elem.style, 'position', '');
}

defineClass(239, 69, $intern_20);
_.remove_0 = function remove_1(w){
  return $remove_1(this, w);
}
;
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbsolutePanel', 239);
function $clinit_AttachDetachException(){
  $clinit_AttachDetachException = emptyMethod;
  attachCommand = new AttachDetachException$1;
  detachCommand = new AttachDetachException$2;
}

function AttachDetachException(causes){
  UmbrellaException_0.call(this, causes);
}

function tryCommand(hasWidgets, c){
  $clinit_AttachDetachException();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext();) {
    w = dynamicCast(w$iterator.next(), 6);
    try {
      c.execute_2(w);
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 9)) {
        e = $e0;
        !caught && (caught = new HashSet);
        $add_9(caught, e);
      }
       else 
        throw unwrap($e0);
    }
  }
  if (caught) {
    throw new AttachDetachException(caught);
  }
}

defineClass(149, 115, $intern_10, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException', 149);
function AttachDetachException$1(){
}

defineClass(150, 1, {}, AttachDetachException$1);
_.execute_2 = function execute_6(w){
  w.onAttach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/1', 150);
function AttachDetachException$2(){
}

defineClass(151, 1, {}, AttachDetachException$2);
_.execute_2 = function execute_7(w){
  w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/2', 151);
function ButtonBase(elem){
  FocusWidget.call(this, elem);
}

defineClass(117, 96, $intern_14);
var Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ButtonBase', 117);
function Button(html){
  var e;
  ButtonBase.call(this, (e = $doc.createElement('BUTTON') , e.setAttribute('type', 'button') , e));
  $setClassName(($clinit_DOM() , this.element), 'gwt-Button');
  $setInnerHTML(this.element, html);
}

function Button_0(handler){
  Button.call(this, 'Close');
  $addDomHandler(this, handler, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
}

defineClass(20, 117, $intern_14, Button, Button_0);
var Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Button', 20);
function $getWidgetTd(this$static, w){
  if (w.parent_0 != this$static) {
    return null;
  }
  return $clinit_DOM() , $clinit_DOM() , $getParentElement(w.element);
}

function $setCellHorizontalAlignment(td, align_0){
  $setPropertyString(($clinit_DOM() , td), 'align', align_0.textAlignString);
}

function $setCellHorizontalAlignment_0(this$static, w, align_0){
  var td;
  td = $getWidgetTd(this$static, w);
  !!td && $setPropertyString(($clinit_DOM() , td), 'align', align_0.textAlignString);
}

function $setCellVerticalAlignment(td, align_0){
  $setCellVerticalAlignment_0(($clinit_DOM() , td), align_0);
}

function $setCellVerticalAlignment_0(td, align_0){
  $setPropertyImpl(td.style, 'verticalAlign', align_0.verticalAlignString);
}

function $setSpacing(this$static, spacing){
  $setPropertyInt(this$static.table, 'cellSpacing', spacing);
}

function CellPanel(){
  ComplexPanel.call(this);
  this.table = ($clinit_DOM() , $doc.createElement('table'));
  this.body_0 = $doc.createElement('tbody');
  $appendChild(this.table, resolve(this.body_0));
  $setElement(this, this.table);
}

defineClass(93, 69, $intern_20);
var Lcom_google_gwt_user_client_ui_CellPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CellPanel', 93);
function $getValue(this$static){
  return this$static.attached?($clinit_Boolean() , $isChecked(this$static.inputElem)?TRUE_0:FALSE_0):($clinit_Boolean() , $isDefaultChecked(this$static.inputElem)?TRUE_0:FALSE_0);
}

function $replaceInputElement(this$static, elem){
  var accessKey, checked, enabled, formValue, newInputElem, sunkEvents, tabIndex, uid;
  newInputElem = elem;
  tabIndex = $getTabIndex(this$static.inputElem);
  checked = (this$static.attached?($clinit_Boolean() , $isChecked(this$static.inputElem)?TRUE_0:FALSE_0):($clinit_Boolean() , $isDefaultChecked(this$static.inputElem)?TRUE_0:FALSE_0)).value_0;
  enabled = !this$static.inputElem.disabled;
  formValue = this$static.inputElem.value;
  uid = this$static.inputElem.id;
  accessKey = this$static.inputElem.accessKey;
  sunkEvents = ($clinit_DOM() , $getEventsSunk(this$static.inputElem));
  setEventListener(this$static.inputElem, null);
  $replaceChild(this$static.element, newInputElem, this$static.inputElem);
  $sinkEvents_0(elem, $getEventsSunk(this$static.inputElem));
  $sinkEvents_0(this$static.inputElem, 0);
  this$static.inputElem = newInputElem;
  $sinkEvents_0(this$static.inputElem, sunkEvents);
  $setId(this$static.inputElem, uid);
  $equals('', accessKey) || $setAccessKey(this$static.inputElem, accessKey);
  !!this$static.inputElem && $setTabIndex(this$static.inputElem, tabIndex);
  $setValue_0(this$static, ($clinit_Boolean() , checked?TRUE_0:FALSE_0));
  $setDisabled(this$static.inputElem, !enabled);
  enabled?$setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-' + 'disabled', false):$setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-' + 'disabled', true);
  $setAttribute(this$static.inputElem, 'value', formValue);
  this$static.attached && setEventListener(this$static.inputElem, this$static);
}

function $setText(this$static, text_0){
  $setTextOrHtml(this$static.directionalTextHelper, text_0, false);
}

function $setValue_0(this$static, value_0){
  var oldValue;
  !value_0 && (value_0 = ($clinit_Boolean() , FALSE_0));
  oldValue = this$static.attached?($clinit_Boolean() , $isChecked(this$static.inputElem)?TRUE_0:FALSE_0):($clinit_Boolean() , $isDefaultChecked(this$static.inputElem)?TRUE_0:FALSE_0);
  $setChecked(this$static.inputElem, value_0.value_0);
  $setDefaultChecked(this$static.inputElem, value_0.value_0);
  if (!!oldValue && oldValue.value_0 == value_0.value_0) {
    return;
  }
}

function CheckBox(){
  var e;
  CheckBox_0.call(this, ($clinit_DOM() , e = $doc.createElement('INPUT') , e.type = 'checkbox' , e.value = 'on' , e));
  $setClassName(this.element, 'gwt-CheckBox');
}

function CheckBox_0(elem){
  var uid;
  ButtonBase.call(this, ($clinit_DOM() , $doc.createElement('span')));
  this.inputElem = elem;
  this.labelElem = $doc.createElement('label');
  $appendChild(this.element, this.inputElem);
  $appendChild(this.element, this.labelElem);
  uid = $createUniqueId($doc);
  $setPropertyString(this.inputElem, 'id', uid);
  $setHtmlFor(this.labelElem, uid);
  this.directionalTextHelper = new DirectionalTextHelper(this.labelElem);
  !!this.inputElem && $setTabIndex(this.inputElem, 0);
}

function CheckBox_1(label_0){
  CheckBox.call(this);
  $setTextOrHtml(this.directionalTextHelper, label_0, false);
}

defineClass(29, 117, $intern_14, CheckBox, CheckBox_1);
_.getTabIndex = function getTabIndex_0(){
  return $getTabIndex(this.inputElem);
}
;
_.onLoad = function onLoad_0(){
  $clinit_DOM();
  setEventListener(this.inputElem, this);
}
;
_.onUnload = function onUnload_0(){
  $clinit_DOM();
  setEventListener(this.inputElem, null);
  $setValue_0(this, this.attached?($clinit_Boolean() , $isChecked(this.inputElem)?TRUE_0:FALSE_0):($clinit_Boolean() , $isDefaultChecked(this.inputElem)?TRUE_0:FALSE_0));
}
;
_.setTabIndex = function setTabIndex_0(index_0){
  !!this.inputElem && $setTabIndex(this.inputElem, index_0);
}
;
_.sinkEvents = function sinkEvents_1(eventBitsToAdd){
  this.eventsToSink == -1?($clinit_DOM() , $sinkEvents_0(this.inputElem, eventBitsToAdd | $getEventsSunk(this.inputElem))):this.eventsToSink == -1?($clinit_DOM() , $sinkEvents_0(this.element, eventBitsToAdd | (this.element.__eventBits || 0))):(this.eventsToSink |= eventBitsToAdd);
}
;
var Lcom_google_gwt_user_client_ui_CheckBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CheckBox', 29);
function $checkInit(this$static){
  if (!this$static.widget) {
    throw new IllegalStateException_0('initWidget() is not called yet');
  }
}

function $initWidget(this$static, widget){
  var elem;
  if (this$static.widget) {
    throw new IllegalStateException_0('Composite.initWidget() may only be called once.');
  }
  $removeFromParent_0(widget);
  elem = ($clinit_DOM() , widget.element);
  $setElement_0(this$static, elem);
  ($clinit_PotentialElement() , isPotential(elem)) && $setResolver(elem, this$static);
  this$static.widget = widget;
  $setParent(widget, this$static);
}

defineClass(320, 6, $intern_14);
_.isAttached = function isAttached_0(){
  if (this.widget) {
    return this.widget.attached;
  }
  return false;
}
;
_.onAttach = function onAttach_1(){
  $checkInit(this);
  if (this.eventsToSink != -1) {
    $sinkEvents(this.widget, this.eventsToSink);
    this.eventsToSink = -1;
  }
  $onAttach(this.widget);
  $clinit_DOM();
  setEventListener(this.element, this);
}
;
_.onBrowserEvent = function onBrowserEvent_0(event_0){
  $onBrowserEvent(this, event_0);
  $onBrowserEvent(this.widget, event_0);
}
;
_.onDetach = function onDetach_0(){
  $onDetach_0(this.widget);
}
;
_.resolvePotentialElement = function resolvePotentialElement_0(){
  $setElement_0(this, ($clinit_DOM() , $resolvePotentialElement()));
  return this.element;
}
;
var Lcom_google_gwt_user_client_ui_Composite_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Composite', 320);
function $animate(this$static, duration){
  $schedule_1(this$static.layoutCmd, duration);
}

function $doAfterLayout(this$static){
  var layer;
  if (this$static.hidingWidget) {
    layer = dynamicCast(this$static.hidingWidget.layoutData, 26);
    $setWidgetVisible(this$static.hidingWidget, layer, false);
    $layout(this$static.layout, 0, null);
    this$static.hidingWidget = null;
  }
}

function $doBeforeLayout(this$static){
  var direction, hDirection, newIndex, newLayer, oldIndex, oldLayer, vDirection;
  oldLayer = !this$static.lastVisibleWidget?null:dynamicCast(this$static.lastVisibleWidget.layoutData, 26);
  newLayer = !this$static.visibleWidget?null:dynamicCast(this$static.visibleWidget.layoutData, 26);
  oldIndex = $getWidgetIndex(this$static, this$static.lastVisibleWidget);
  newIndex = $getWidgetIndex(this$static, this$static.visibleWidget);
  direction = oldIndex < newIndex?100:-100;
  vDirection = this$static.isAnimationVertical?direction:0;
  hDirection = this$static.isAnimationVertical?0:direction;
  this$static.hidingWidget = null;
  if (this$static.visibleWidget != this$static.lastVisibleWidget) {
    if (oldLayer) {
      $setTopHeight(oldLayer, 0, ($clinit_Style$Unit() , PCT), 100, PCT);
      $setLeftWidth(oldLayer, 0, PCT, PCT);
      $setWidgetVisible(this$static.lastVisibleWidget, oldLayer, true);
    }
    if (newLayer) {
      $setTopHeight(newLayer, vDirection, ($clinit_Style$Unit() , PCT), 100, PCT);
      $setLeftWidth(newLayer, hDirection, PCT, PCT);
      $setWidgetVisible(this$static.visibleWidget, newLayer, true);
    }
    $layout(this$static.layout, 0, null);
    this$static.hidingWidget = this$static.lastVisibleWidget;
  }
  if (oldLayer) {
    $setTopHeight(oldLayer, -vDirection, ($clinit_Style$Unit() , PCT), 100, PCT);
    $setLeftWidth(oldLayer, -hDirection, PCT, PCT);
    $setWidgetVisible(this$static.lastVisibleWidget, oldLayer, true);
  }
  if (newLayer) {
    $setTopHeight(newLayer, 0, ($clinit_Style$Unit() , PCT), 100, PCT);
    $setLeftWidth(newLayer, 0, PCT, PCT);
    $setWidgetVisible(this$static.visibleWidget, newLayer, true);
  }
  this$static.lastVisibleWidget = this$static.visibleWidget;
}

function $insert_0(this$static, widget, beforeIndex){
  var before;
  before = beforeIndex < this$static.children_0.size_0?$get_2(this$static.children_0, beforeIndex):null;
  $insert_1(this$static, widget, before);
}

function $insert_1(this$static, widget, before){
  var children, index_0, layer;
  $removeFromParent_0(widget);
  children = this$static.children_0;
  if (!before) {
    $insert_6(children, widget, children.size_0);
  }
   else {
    index_0 = $indexOf(children, before);
    $insert_6(children, widget, index_0);
  }
  layer = $attachChild(this$static.layout, ($clinit_DOM() , widget.element), before?before.element:null, widget);
  layer.visible = false;
  setVisible(widget.element, false);
  widget.layoutData = layer;
  $setParent(widget, this$static);
  $schedule_1(this$static.layoutCmd, 0);
}

function $remove_2(this$static, w){
  var layer, removed;
  removed = $remove_0(this$static, w);
  if (removed) {
    layer = dynamicCast(w.layoutData, 26);
    $removeChild_0(this$static.layout, layer);
    w.layoutData = null;
    this$static.visibleWidget == w && (this$static.visibleWidget = null);
    this$static.hidingWidget == w && (this$static.hidingWidget = null);
    this$static.lastVisibleWidget == w && (this$static.lastVisibleWidget = null);
  }
  return removed;
}

function $setWidgetVisible(w, layer, visible){
  layer.visible = visible;
  w.setVisible(visible);
}

function $showWidget(this$static, index_0){
  $checkIndexBoundsForAccess(this$static, index_0);
  $showWidget_0(this$static, $get_2(this$static.children_0, index_0));
}

function $showWidget_0(this$static, widget){
  if (widget == this$static.visibleWidget) {
    return;
  }
  this$static.visibleWidget = widget;
  $animate(this$static, !widget?0:this$static.animationDuration);
}

defineClass(144, 69, $intern_21);
_.onAttach = function onAttach_2(){
  $onAttach(this);
}
;
_.onDetach = function onDetach_1(){
  $onDetach(this);
  $removeLayerRefs(this.layout.parentElem);
}
;
_.onResize_0 = function onResize_0(){
  var child, child$iterator;
  for (child$iterator = new WidgetCollection$WidgetIterator(this.children_0); child$iterator.index_0 < child$iterator.this$01.size_0;) {
    child = $next_1(child$iterator);
    instanceOf(child, 41) && dynamicCast(child, 41).onResize_0();
  }
}
;
_.remove_0 = function remove_2(w){
  return $remove_2(this, w);
}
;
_.animationDuration = 0;
_.isAnimationVertical = false;
var Lcom_google_gwt_user_client_ui_DeckLayoutPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DeckLayoutPanel', 144);
function $schedule_0(this$static, duration, callback){
  this$static.duration = duration;
  this$static.callback = callback;
  this$static.canceled = false;
  if (!this$static.scheduled) {
    this$static.scheduled = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), this$static);
  }
}

function LayoutCommand(layout){
  this.layout = layout;
}

defineClass(114, 1, {}, LayoutCommand);
_.doBeforeLayout = function doBeforeLayout(){
}
;
_.execute_1 = function execute_8(){
  this.scheduled = false;
  if (this.canceled) {
    return;
  }
  this.doBeforeLayout();
  $layout(this.layout, this.duration, new LayoutCommand$1(this));
}
;
_.schedule = function schedule_0(duration, callback){
  $schedule_0(this, duration, callback);
}
;
_.canceled = false;
_.duration = 0;
_.scheduled = false;
var Lcom_google_gwt_user_client_ui_LayoutCommand_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LayoutCommand', 114);
function $schedule_1(this$static, duration){
  $schedule_0(this$static, duration, new DeckLayoutPanel$DeckAnimateCommand$1(this$static));
}

function DeckLayoutPanel$DeckAnimateCommand(this$0, layout){
  this.this$01 = this$0;
  LayoutCommand.call(this, layout);
}

defineClass(147, 114, {}, DeckLayoutPanel$DeckAnimateCommand);
_.doBeforeLayout = function doBeforeLayout_0(){
  $doBeforeLayout(this.this$01);
}
;
_.schedule = function schedule_1(duration, callback){
  $schedule_1(this, duration);
}
;
var Lcom_google_gwt_user_client_ui_DeckLayoutPanel$DeckAnimateCommand_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DeckLayoutPanel/DeckAnimateCommand', 147);
function DeckLayoutPanel$DeckAnimateCommand$1(this$1){
  this.this$11 = this$1;
}

defineClass(148, 1, {}, DeckLayoutPanel$DeckAnimateCommand$1);
var Lcom_google_gwt_user_client_ui_DeckLayoutPanel$DeckAnimateCommand$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DeckLayoutPanel/DeckAnimateCommand/1', 148);
function $remove_3(this$static, w){
  if (this$static.widget != w) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    $removeChild(this$static.getContainerElement(), ($clinit_DOM() , w.element));
    this$static.widget = null;
  }
  return true;
}

function $setWidget(this$static, w){
  if (w == this$static.widget) {
    return;
  }
  !!w && $removeFromParent_0(w);
  !!this$static.widget && this$static.remove_0(this$static.widget);
  this$static.widget = w;
  if (w) {
    $clinit_DOM();
    $appendChild(this$static.getContainerElement(), resolve($getElement(this$static.widget)));
    $setParent(w, this$static);
  }
}

function SimplePanel(elem){
  $setElement_0(this, ($clinit_DOM() , elem));
}

defineClass(78, 322, $intern_20);
_.getContainerElement = function getContainerElement(){
  return $clinit_DOM() , this.element;
}
;
_.iterator = function iterator_1(){
  return new SimplePanel$1(this);
}
;
_.remove_0 = function remove_3(w){
  return $remove_3(this, w);
}
;
var Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SimplePanel', 78);
function $center(this$static){
  var elem, initiallyAnimated, initiallyShowing, left, top_0;
  initiallyShowing = this$static.showing;
  initiallyAnimated = this$static.isAnimationEnabled;
  if (!initiallyShowing) {
    ($clinit_DOM() , this$static.element).style['visibility'] = 'hidden';
    this$static.isAnimationEnabled = false;
    !this$static.resizeHandlerRegistration && (this$static.resizeHandlerRegistration = addResizeHandler(new DialogBox$1(this$static)));
    $show(this$static);
  }
  elem = ($clinit_DOM() , this$static.element);
  $setPropertyImpl(elem.style, 'left', ($clinit_Style$Unit() , '0.0px'));
  $setPropertyImpl(elem.style, 'top', '0.0px');
  left = $getClientWidth($doc) - $getPropertyInt(this$static.element, 'offsetWidth') >> 1;
  top_0 = $getClientHeight($doc) - $getPropertyInt(this$static.element, 'offsetHeight') >> 1;
  $setPopupPosition(this$static, max_0(($wnd.pageXOffset | 0) + left, 0), max_0(($wnd.pageYOffset | 0) + top_0, 0));
  if (!initiallyShowing) {
    this$static.isAnimationEnabled = initiallyAnimated;
    if (initiallyAnimated) {
      $setClip(this$static.element, 'rect(0px, 0px, 0px, 0px)');
      this$static.element.style['visibility'] = 'visible';
      $run(this$static.resizeAnimation, 200, now_1(), null);
    }
     else {
      this$static.element.style['visibility'] = 'visible';
    }
  }
}

function $eventTargetsPopup(this$static, event_0){
  var target;
  target = event_0.target;
  if (is_0(target)) {
    return isOrHasChildImpl(($clinit_DOM() , this$static.element), target);
  }
  return false;
}

function $getOffsetHeight(this$static){
  return $getPropertyInt(($clinit_DOM() , this$static.element), 'offsetHeight');
}

function $getOffsetWidth(this$static){
  return $getPropertyInt(($clinit_DOM() , this$static.element), 'offsetWidth');
}

function $hide(this$static){
  if (!this$static.showing) {
    return;
  }
  $setState(this$static.resizeAnimation, false, false);
  fire_1(this$static);
}

function $maybeUpdateSize(this$static){
  var w;
  w = this$static.widget;
  if (w) {
    this$static.desiredHeight != null && w.setHeight_0(this$static.desiredHeight);
    this$static.desiredWidth != null && w.setWidth_0(this$static.desiredWidth);
  }
}

function $previewNativeEvent(this$static, event_0){
  var eventTargetsPopupOrPartner, nativeEvent, target, type_0;
  if (event_0.isCanceled || !this$static.previewAllNativeEvents && event_0.isConsumed) {
    this$static.modal && (event_0.isCanceled = true);
    return;
  }
  this$static.onPreviewNativeEvent(event_0);
  if (event_0.isCanceled) {
    return;
  }
  nativeEvent = event_0.nativeEvent;
  eventTargetsPopupOrPartner = $eventTargetsPopup(this$static, nativeEvent);
  eventTargetsPopupOrPartner && (event_0.isConsumed = true);
  this$static.modal && (event_0.isCanceled = true);
  type_0 = ($clinit_DOM() , $eventGetTypeInt(nativeEvent.type));
  switch (type_0) {
    case 512:
    case 256:
    case 128:
      {
        $eventGetKeyCode(nativeEvent) & 65535;
        ($eventGetShiftKey(nativeEvent)?1:0) | ($eventGetMetaKey(nativeEvent)?8:0) | ($eventGetCtrlKey(nativeEvent)?2:0) | ($eventGetAltKey(nativeEvent)?4:0);
        return;
      }

    case 4:
    case $intern_15:
      {
        if (sCaptureElem) {
          event_0.isConsumed = true;
          return;
        }
      }

      if (!eventTargetsPopupOrPartner && this$static.autoHide) {
        this$static.hide(true);
        return;
      }

      break;
    case 8:
    case 64:
    case 1:
    case 2:
    case $intern_16:
      {
        if (sCaptureElem) {
          event_0.isConsumed = true;
          return;
        }
        break;
      }

    case 2048:
      {
        target = nativeEvent.target;
        if (this$static.modal && !eventTargetsPopupOrPartner && !!target) {
          target.blur && target != $doc.body && target.blur();
          event_0.isCanceled = true;
          return;
        }
        break;
      }

  }
}

function $setPopupPosition(this$static, left, top_0){
  var elem;
  this$static.leftPosition = left;
  this$static.topPosition = top_0;
  left -= 0;
  top_0 -= 0;
  elem = ($clinit_DOM() , this$static.element);
  elem.style['left'] = left + ($clinit_Style$Unit() , 'px');
  elem.style['top'] = top_0 + 'px';
}

function $setWidget_0(this$static, w){
  $setWidget(this$static, w);
  $maybeUpdateSize(this$static);
}

function $show(this$static){
  if (this$static.showing) {
    return;
  }
   else 
    this$static.attached && $removeFromParent_0(this$static);
  $setState(this$static.resizeAnimation, true, false);
}

function $updateHandlers(this$static){
  if (this$static.nativePreviewHandlerRegistration) {
    $removeHandler(this$static.nativePreviewHandlerRegistration.real);
    this$static.nativePreviewHandlerRegistration = null;
  }
  if (this$static.historyHandlerRegistration) {
    $removeHandler(this$static.historyHandlerRegistration.real);
    this$static.historyHandlerRegistration = null;
  }
  if (this$static.showing) {
    this$static.nativePreviewHandlerRegistration = addNativePreviewHandler(new PopupPanel$3(this$static));
    this$static.historyHandlerRegistration = addValueChangeHandler(new PopupPanel$4(this$static));
  }
}

defineClass(100, 78, $intern_20);
_.getContainerElement = function getContainerElement_0(){
  return $clinit_DOM() , $getFirstChildElement(this.element);
}
;
_.getStyleElement = function getStyleElement_0(){
  return $getParentElement(($clinit_DOM() , $getFirstChildElement(this.element)));
}
;
_.hide = function hide(autoClosed){
  $hide(this);
}
;
_.onPreviewNativeEvent = function onPreviewNativeEvent(event_0){
  event_0.isFirstHandler && (event_0.nativeEvent , false) && (event_0.isCanceled = true);
}
;
_.onUnload = function onUnload_1(){
  this.showing && $setState(this.resizeAnimation, false, true);
}
;
_.setHeight_0 = function setHeight_0(height){
  this.desiredHeight = height;
  $maybeUpdateSize(this);
  height.length == 0 && (this.desiredHeight = null);
}
;
_.setVisible = function setVisible_1(visible){
  ($clinit_DOM() , this.element).style['visibility'] = visible?'visible':'hidden';
}
;
_.setWidth_0 = function setWidth_0(width_0){
  this.desiredWidth = width_0;
  $maybeUpdateSize(this);
  width_0.length == 0 && (this.desiredWidth = null);
}
;
_.autoHide = false;
_.autoHideOnHistoryEvents = false;
_.isAnimationEnabled = false;
_.isGlassEnabled = false;
_.leftPosition = 0;
_.modal = false;
_.previewAllNativeEvents = false;
_.showing = false;
_.topPosition = 0;
var Lcom_google_gwt_user_client_ui_PopupPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel', 100);
defineClass(228, 100, $intern_20);
_.doAttachChildren = function doAttachChildren_1(){
  $onAttach(this.decPanel);
}
;
_.doDetachChildren = function doDetachChildren_1(){
  $onDetach(this.decPanel);
}
;
_.iterator = function iterator_2(){
  return new SimplePanel$1(this.decPanel);
}
;
_.remove_0 = function remove_4(w){
  return $remove_3(this.decPanel, w);
}
;
var Lcom_google_gwt_user_client_ui_DecoratedPopupPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DecoratedPopupPanel', 228);
function $getCellElement(this$static){
  var td, tr;
  tr = ($clinit_DOM() , $getChild(this$static.tbody, 0));
  td = $getChild(tr, 1);
  return null , $getFirstChildElement(td);
}

function DecoratorPanel(rowStyles){
  var i, row, table, trElem;
  SimplePanel.call(this, ($clinit_DOM() , $doc.createElement('table')));
  table = this.element;
  this.tbody = $doc.createElement('tbody');
  $appendChild(table, resolve(this.tbody));
  $setPropertyInt(table, 'cellSpacing', 0);
  $setPropertyInt(table, 'cellPadding', 0);
  for (i = 0; i < rowStyles.length; i++) {
    row = (trElem = $doc.createElement('tr') , $setClassName(trElem, rowStyles[i]) , $appendChild(trElem, resolve(createTD(rowStyles[i] + 'Left'))) , $appendChild(trElem, resolve(createTD(rowStyles[i] + 'Center'))) , $appendChild(trElem, resolve(createTD(rowStyles[i] + 'Right'))) , trElem);
    $appendChild(this.tbody, resolve(row));
    i == 1 && (this.containerElem = $getFirstChildElement($getChild(row, 1)));
  }
  $setClassName(this.element, 'gwt-DecoratorPanel');
}

function createTD(styleName){
  var inner, tdElem;
  tdElem = ($clinit_DOM() , $doc.createElement('td'));
  inner = $doc.createElement('div');
  $appendChild(tdElem, resolve(inner));
  $setClassName(tdElem, styleName);
  $setClassName(inner, styleName + 'Inner');
  return tdElem;
}

defineClass(263, 78, $intern_20, DecoratorPanel);
_.getContainerElement = function getContainerElement_1(){
  return $clinit_DOM() , this.containerElem;
}
;
var Lcom_google_gwt_user_client_ui_DecoratorPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DecoratorPanel', 263);
function $beginDragging(this$static, event_0){
  $onMouseDown(this$static, $getX(event_0), $getY(event_0));
}

function $continueDragging(this$static, event_0){
  $onMouseMove(this$static, $getX(event_0), $getY(event_0));
}

function $endDragging(this$static, event_0){
  $onMouseUp(this$static, ($getX(event_0) , $getY(event_0)));
}

function $hide_0(this$static, autoClosed){
  if (this$static.resizeHandlerRegistration) {
    $removeHandler(this$static.resizeHandlerRegistration.real);
    this$static.resizeHandlerRegistration = null;
  }
  $hide(this$static);
}

function $isCaptionEvent(this$static, event_0){
  var target;
  target = event_0.target;
  if (is_0(target)) {
    return isOrHasChildImpl($getParentElement(($clinit_DOM() , $getCellElement(this$static.decPanel))), target);
  }
  return false;
}

function $onMouseDown(this$static, x_0, y_0){
  $clinit_DOM();
  if (!sCaptureElem) {
    this$static.dragging = true;
    setCapture(this$static.element);
    this$static.dragStartX = x_0;
    this$static.dragStartY = y_0;
  }
}

function $onMouseMove(this$static, x_0, y_0){
  var absX, absY;
  if (this$static.dragging) {
    absX = x_0 + $getAbsoluteLeft(($clinit_DOM() , this$static.element));
    absY = y_0 + ($getBoundingClientRectTop(this$static.element) + $wnd.pageYOffset | 0);
    if (absX < this$static.clientLeft || absX >= this$static.windowWidth || absY < this$static.clientTop) {
      return;
    }
    $setPopupPosition(this$static, absX - this$static.dragStartX, absY - this$static.dragStartY);
  }
}

function $onMouseUp(this$static){
  this$static.dragging = false;
  releaseCapture(($clinit_DOM() , this$static.element));
}

function DialogBox(){
  DialogBox_0.call(this, new DialogBox$CaptionImpl);
}

function DialogBox_0(captionWidget){
  var mouseHandler, td, rowStyles;
  SimplePanel.call(this, ($clinit_DOM() , $doc.createElement('div')));
  this.glassResizer = new PopupPanel$1;
  this.isAnimationEnabled = false;
  this.leftPosition = -1;
  this.resizeAnimation = new PopupPanel$ResizeAnimation(this);
  this.topPosition = -1;
  $appendChild(this.element, $doc.createElement('div'));
  $setPopupPosition(this, 0, 0);
  $setClassName($getParentElement($getFirstChildElement(this.element)), 'gwt-PopupPanel');
  $setClassName((null , $getFirstChildElement(this.element)), 'popupContent');
  this.autoHide = false;
  this.autoHideOnHistoryEvents = false;
  this.modal = true;
  rowStyles = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 4, ['dialogTop', 'dialogMiddle', 'dialogBottom']);
  this.decPanel = new DecoratorPanel(rowStyles);
  $setStyleName(this.decPanel, '');
  setStylePrimaryName($getParentElement($getFirstChildElement(this.element)), 'gwt-DecoratedPopupPanel');
  $setWidget_0(this, this.decPanel);
  setStyleName((null , $getFirstChildElement(this.element)), 'popupContent', false);
  setStyleName(this.decPanel.containerElem, 'dialogContent', true);
  $removeFromParent_0(captionWidget);
  this.caption = captionWidget;
  td = $getCellElement(this.decPanel);
  $appendChild(td, resolve($getElement(this.caption)));
  $adopt(this, this.caption);
  $setClassName($getParentElement($getFirstChildElement(this.element)), 'gwt-DialogBox');
  this.windowWidth = $getClientWidth($doc);
  this.clientLeft = 0;
  this.clientTop = 0;
  mouseHandler = new DialogBox$MouseHandler(this);
  $addDomHandler(this, mouseHandler, ($clinit_MouseDownEvent() , $clinit_MouseDownEvent() , TYPE_1));
  $addDomHandler(this, mouseHandler, ($clinit_MouseUpEvent() , $clinit_MouseUpEvent() , TYPE_5));
  $addDomHandler(this, mouseHandler, ($clinit_MouseMoveEvent() , $clinit_MouseMoveEvent() , TYPE_2));
  $addDomHandler(this, mouseHandler, ($clinit_MouseOverEvent() , $clinit_MouseOverEvent() , TYPE_4));
  $addDomHandler(this, mouseHandler, ($clinit_MouseOutEvent() , $clinit_MouseOutEvent() , TYPE_3));
}

defineClass(62, 228, $intern_20, DialogBox);
_.doAttachChildren = function doAttachChildren_2(){
  try {
    $onAttach(this.decPanel);
  }
   finally {
    $onAttach(this.caption);
  }
}
;
_.doDetachChildren = function doDetachChildren_2(){
  try {
    $onDetach(this.decPanel);
  }
   finally {
    $onDetach(this.caption);
  }
}
;
_.hide = function hide_0(autoClosed){
  $hide_0(this, autoClosed);
}
;
_.onBrowserEvent = function onBrowserEvent_1(event_0){
  switch ($clinit_DOM() , $eventGetTypeInt(event_0.type)) {
    case 4:
    case 8:
    case 64:
    case 16:
    case 32:
      if (!this.dragging && !$isCaptionEvent(this, event_0)) {
        return;
      }

  }
  $onBrowserEvent(this, event_0);
}
;
_.onPreviewNativeEvent = function onPreviewNativeEvent_0(event_0){
  var nativeEvent;
  nativeEvent = event_0.nativeEvent;
  !event_0.isCanceled && $getTypeInt(event_0.nativeEvent) == 4 && $isCaptionEvent(this, nativeEvent) && $eventPreventDefault(nativeEvent);
  event_0.isFirstHandler && (event_0.nativeEvent , false) && (event_0.isCanceled = true);
}
;
_.clientLeft = 0;
_.clientTop = 0;
_.dragStartX = 0;
_.dragStartY = 0;
_.dragging = false;
_.windowWidth = 0;
var Lcom_google_gwt_user_client_ui_DialogBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DialogBox', 62);
function DialogBox$1(this$0){
  this.this$01 = this$0;
}

defineClass(83, 1, $intern_22, DialogBox$1);
_.onResize = function onResize_1(event_0){
  this.this$01.windowWidth = event_0.width_0;
}
;
var Lcom_google_gwt_user_client_ui_DialogBox$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DialogBox/1', 83);
function LabelBase(element){
  $setElement_0(this, ($clinit_DOM() , element));
  this.directionalTextHelper = new DirectionalTextHelper(this.element);
}

defineClass(82, 6, $intern_14);
var Lcom_google_gwt_user_client_ui_LabelBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LabelBase', 82);
function $setText_0(this$static, text_0){
  $setTextOrHtml(this$static.directionalTextHelper, text_0, false);
}

function Label(element){
  LabelBase.call(this, element, $equalsIgnoreCase('span', element.tagName));
}

function Label_0(text_0){
  LabelBase.call(this, $doc.createElement('div'));
  $setClassName(($clinit_DOM() , this.element), 'gwt-Label');
  $setTextOrHtml(this.directionalTextHelper, text_0, false);
}

defineClass(71, 82, $intern_14, Label_0);
var Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Label', 71);
function HTML(){
  Label.call(this, $doc.createElement('div'));
  $setClassName(($clinit_DOM() , this.element), 'gwt-HTML');
}

function HTML_0(html){
  HTML.call(this);
  $setTextOrHtml(this.directionalTextHelper, html, true);
}

defineClass(16, 71, $intern_14, HTML_0);
var Lcom_google_gwt_user_client_ui_HTML_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTML', 16);
function DialogBox$CaptionImpl(){
  HTML.call(this);
  $setClassName(($clinit_DOM() , this.element), 'Caption');
}

defineClass(229, 16, $intern_14, DialogBox$CaptionImpl);
var Lcom_google_gwt_user_client_ui_DialogBox$CaptionImpl_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DialogBox/CaptionImpl', 229);
function DialogBox$MouseHandler(this$0){
  this.this$01 = this$0;
}

defineClass(230, 1, {341:1, 345:1, 343:1, 344:1, 342:1, 23:1}, DialogBox$MouseHandler);
var Lcom_google_gwt_user_client_ui_DialogBox$MouseHandler_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DialogBox/MouseHandler', 230);
function $setTextOrHtml(this$static, content_0, isHtml){
  isHtml?$setInnerHTML(this$static.element, content_0):$setInnerText(this$static.element, content_0);
  if (this$static.textDir != this$static.initialElementDir) {
    this$static.textDir = this$static.initialElementDir;
    setDirectionOnElement(this$static.element, this$static.initialElementDir);
  }
}

function DirectionalTextHelper(element){
  this.element = element;
  this.initialElementDir = getDirectionOnElement(element);
  this.textDir = this.initialElementDir;
}

defineClass(128, 1, {}, DirectionalTextHelper);
var Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DirectionalTextHelper', 128);
function $clinit_DockPanel(){
  $clinit_DockPanel = emptyMethod;
  CENTER_0 = new DockPanel$DockLayoutConstant;
  LINE_START = new DockPanel$DockLayoutConstant;
  LINE_END = new DockPanel$DockLayoutConstant;
  EAST = new DockPanel$DockLayoutConstant;
  NORTH = new DockPanel$DockLayoutConstant;
  SOUTH = new DockPanel$DockLayoutConstant;
  WEST = new DockPanel$DockLayoutConstant;
}

function $add_1(this$static, widget, direction){
  var layout;
  if (direction == CENTER_0) {
    if (widget == this$static.center) {
      return;
    }
     else if (this$static.center) {
      throw new IllegalArgumentException_0('Only one CENTER widget may be added');
    }
  }
  $removeFromParent_0(widget);
  $add_6(this$static.children_0, widget);
  direction == CENTER_0 && (this$static.center = widget);
  layout = new DockPanel$LayoutData(direction);
  widget.layoutData = layout;
  $setCellHorizontalAlignment_1(widget, this$static.horzAlign);
  $setCellVerticalAlignment_1(widget, this$static.vertAlign);
  $realizeTable(this$static);
  $setParent(widget, this$static);
}

function $realizeTable(this$static){
  var bodyElem, centerTd, child, colCount, dir_0, i, it, it0, layout, logicalLeftCol, logicalRightCol, northRow, row, rowCount, rows_0, southRow, td;
  bodyElem = ($clinit_DOM() , this$static.body_0);
  while ($getChildCount(bodyElem) > 0) {
    $removeChild(bodyElem, (null , $getChild(bodyElem, 0)));
  }
  rowCount = 1;
  colCount = 1;
  for (it0 = new WidgetCollection$WidgetIterator(this$static.children_0); it0.index_0 < it0.this$01.size_0;) {
    child = $next_1(it0);
    dir_0 = dynamicCast(child.layoutData, 59).direction_0;
    dir_0 == NORTH || dir_0 == SOUTH?++rowCount:(dir_0 == EAST || dir_0 == WEST || dir_0 == LINE_START || dir_0 == LINE_END) && ++colCount;
  }
  rows_0 = initDim(Lcom_google_gwt_user_client_ui_DockPanel$TmpRow_2_classLit, $intern_3, 94, rowCount, 0, 1);
  for (i = 0; i < rowCount; ++i) {
    rows_0[i] = new DockPanel$TmpRow;
    rows_0[i].tr = $doc.createElement('tr');
    $appendChild(bodyElem, resolve(rows_0[i].tr));
  }
  logicalLeftCol = 0;
  logicalRightCol = colCount - 1;
  northRow = 0;
  southRow = rowCount - 1;
  centerTd = null;
  for (it = new WidgetCollection$WidgetIterator(this$static.children_0); it.index_0 < it.this$01.size_0;) {
    child = $next_1(it);
    layout = dynamicCast(child.layoutData, 59);
    td = $doc.createElement('td');
    layout.td = td;
    $setPropertyString(layout.td, 'align', layout.hAlign);
    $setPropertyImpl(layout.td.style, 'verticalAlign', layout.vAlign);
    $setPropertyString(layout.td, 'width', layout.width_0);
    $setPropertyString(layout.td, 'height', layout.height);
    if (layout.direction_0 == NORTH) {
      insertChild(rows_0[northRow].tr, td, rows_0[northRow].center);
      $appendChild(td, resolve(child.element));
      $setPropertyInt(td, 'colSpan', logicalRightCol - logicalLeftCol + 1);
      ++northRow;
    }
     else if (layout.direction_0 == SOUTH) {
      insertChild(rows_0[southRow].tr, td, rows_0[southRow].center);
      $appendChild(td, resolve(child.element));
      $setPropertyInt(td, 'colSpan', logicalRightCol - logicalLeftCol + 1);
      --southRow;
    }
     else if (layout.direction_0 == CENTER_0) {
      centerTd = td;
    }
     else if ($shouldAddToLogicalLeftOfTable(layout.direction_0)) {
      row = rows_0[northRow];
      insertChild(row.tr, td, row.center++);
      $appendChild(td, resolve(child.element));
      $setPropertyInt(td, 'rowSpan', southRow - northRow + 1);
      ++logicalLeftCol;
    }
     else if ($shouldAddToLogicalRightOfTable(layout.direction_0)) {
      row = rows_0[northRow];
      insertChild(row.tr, td, row.center);
      $appendChild(td, resolve(child.element));
      $setPropertyInt(td, 'rowSpan', southRow - northRow + 1);
      --logicalRightCol;
    }
  }
  if (this$static.center) {
    row = rows_0[northRow];
    insertChild(row.tr, centerTd, row.center);
    $appendChild(centerTd, resolve($getElement(this$static.center)));
  }
}

function $setCellHorizontalAlignment_1(w, align_0){
  var data_0;
  data_0 = dynamicCast(w.layoutData, 59);
  data_0.hAlign = align_0.textAlignString;
  !!data_0.td && $setCellHorizontalAlignment(data_0.td, align_0);
}

function $setCellVerticalAlignment_1(w, align_0){
  var data_0;
  data_0 = dynamicCast(w.layoutData, 59);
  data_0.vAlign = align_0.verticalAlignString;
  !!data_0.td && $setCellVerticalAlignment(data_0.td, align_0);
}

function $setHorizontalAlignment(this$static, align_0){
  this$static.horzAlign = align_0;
}

function $setVerticalAlignment(this$static, align_0){
  this$static.vertAlign = align_0;
}

function $shouldAddToLogicalLeftOfTable(widgetDirection){
  if (widgetDirection == LINE_START) {
    return true;
  }
  return widgetDirection == WEST;
}

function $shouldAddToLogicalRightOfTable(widgetDirection){
  if (widgetDirection == LINE_END) {
    return true;
  }
  return widgetDirection == EAST;
}

function DockPanel(){
  $clinit_DockPanel();
  CellPanel.call(this);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  $setPropertyInt(($clinit_DOM() , this.table), 'cellSpacing', 0);
  $setPropertyInt(this.table, 'cellPadding', 0);
}

defineClass(79, 93, $intern_20, DockPanel);
_.remove_0 = function remove_5(w){
  var removed;
  removed = $remove_0(this, w);
  if (removed) {
    w == this.center && (this.center = null);
    $realizeTable(this);
  }
  return removed;
}
;
var CENTER_0, EAST, LINE_END, LINE_START, NORTH, SOUTH, WEST;
var Lcom_google_gwt_user_client_ui_DockPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DockPanel', 79);
function DockPanel$DockLayoutConstant(){
}

defineClass(50, 1, {}, DockPanel$DockLayoutConstant);
var Lcom_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DockPanel/DockLayoutConstant', 50);
function DockPanel$LayoutData(dir_0){
  this.hAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT).textAlignString;
  this.vAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP).verticalAlignString;
  this.direction_0 = dir_0;
}

defineClass(59, 1, {59:1}, DockPanel$LayoutData);
_.height = '';
_.width_0 = '';
var Lcom_google_gwt_user_client_ui_DockPanel$LayoutData_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DockPanel/LayoutData', 59);
function DockPanel$TmpRow(){
}

defineClass(94, 1, {94:1}, DockPanel$TmpRow);
_.center = 0;
var Lcom_google_gwt_user_client_ui_DockPanel$TmpRow_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DockPanel/TmpRow', 94);
function $add_2(this$static, w){
  $add(this$static, w, ($clinit_DOM() , this$static.element));
}

function $insert_2(this$static, w, beforeIndex){
  $insert(this$static, w, ($clinit_DOM() , this$static.element), beforeIndex);
}

function FlowPanel(){
  ComplexPanel.call(this);
  $setElement(this, $doc.createElement('div'));
}

defineClass(99, 69, $intern_20, FlowPanel);
var Lcom_google_gwt_user_client_ui_FlowPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FlowPanel', 99);
function $checkCellBounds(this$static, row, column){
  var cellSize;
  $checkRowBounds(this$static, row);
  if (column < 0) {
    throw new IndexOutOfBoundsException_0('Column ' + column + ' must be non-negative: ' + column);
  }
  cellSize = this$static.numColumns;
  if (cellSize <= column) {
    throw new IndexOutOfBoundsException_0('Column index: ' + column + ', Column size: ' + this$static.numColumns);
  }
}

function $checkRowBounds(this$static, row){
  var rowSize;
  rowSize = this$static.numRows;
  if (row >= rowSize || row < 0) {
    throw new IndexOutOfBoundsException_0('Row index: ' + row + ', Row size: ' + rowSize);
  }
}

function $cleanCell(this$static, row, column){
  var td;
  td = $getRawElement(this$static.cellFormatter, row, column);
  $internalClearCell(this$static, ($clinit_DOM() , td));
  return td;
}

function $internalClearCell(this$static, td){
  var maybeChild, widget;
  maybeChild = ($clinit_DOM() , $clinit_DOM() , $getFirstChildElement(td));
  widget = null;
  !!maybeChild && (widget = dynamicCast($get_1(this$static.widgetMap, maybeChild), 6));
  if (widget) {
    $remove_4(this$static, widget);
    return true;
  }
   else {
    return false;
  }
}

function $remove_4(this$static, widget){
  var elem;
  if (widget.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(widget, null);
  }
   finally {
    elem = ($clinit_DOM() , widget.element);
    $removeChild((null , $getParentElement(elem)), elem);
    $removeByElement(this$static.widgetMap, elem);
  }
  return true;
}

function $removeRow(this$static, row){
  var column, columnCount;
  columnCount = this$static.numColumns;
  for (column = 0; column < columnCount; ++column) {
    $cleanCell(this$static, row, column);
  }
  $removeChild(this$static.bodyElem, $getRow(this$static.bodyElem, row));
}

function $setCellFormatter(this$static, cellFormatter){
  this$static.cellFormatter = cellFormatter;
}

function $setColumnFormatter(this$static, formatter){
  !!this$static.columnFormatter && (formatter.columnGroup = this$static.columnFormatter.columnGroup);
  this$static.columnFormatter = formatter;
  $prepareColumnGroup(this$static.columnFormatter);
}

defineClass(252, 322, $intern_20);
_.iterator = function iterator_3(){
  return new HTMLTable$1(this);
}
;
_.remove_0 = function remove_6(widget){
  return $remove_4(this, widget);
}
;
var Lcom_google_gwt_user_client_ui_HTMLTable_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable', 252);
function $prepareCell(this$static, row, column){
  $prepareRow(this$static, row);
  if (column < 0) {
    throw new IndexOutOfBoundsException_0('Cannot access a column with a negative index: ' + column);
  }
  if (column >= this$static.numColumns) {
    throw new IndexOutOfBoundsException_0('Column index: ' + column + ', Column size: ' + this$static.numColumns);
  }
}

function $prepareRow(this$static, row){
  if (row < 0) {
    throw new IndexOutOfBoundsException_0('Cannot access a row with a negative index: ' + row);
  }
  if (row >= this$static.numRows) {
    throw new IndexOutOfBoundsException_0('Row index: ' + row + ', Row size: ' + this$static.numRows);
  }
}

function $removeRow_0(this$static, row){
  $removeRow(this$static, row);
  --this$static.numRows;
}

function $resizeColumns(this$static, columns){
  var i, j, td, tr, tr_0, td_0, td_1;
  if (this$static.numColumns == columns) {
    return;
  }
  if (columns < 0) {
    throw new IndexOutOfBoundsException_0('Cannot set number of columns to ' + columns);
  }
  if (this$static.numColumns > columns) {
    for (i = 0; i < this$static.numRows; i++) {
      for (j = this$static.numColumns - 1; j >= columns; j--) {
        $checkCellBounds(this$static, i, j);
        td = $cleanCell(this$static, i, j);
        tr = $getRow(this$static.bodyElem, i);
        tr.removeChild(td);
      }
    }
  }
   else {
    for (i = 0; i < this$static.numRows; i++) {
      for (j = this$static.numColumns; j < columns; j++) {
        tr_0 = $getRow(this$static.bodyElem, i);
        td_0 = (td_1 = ($clinit_DOM() , $doc.createElement('td')) , $setInnerHTML(td_1, '&nbsp;') , $clinit_DOM() , td_1);
        $insertChild(tr_0, resolve(td_0), j);
      }
    }
  }
  this$static.numColumns = columns;
  $resizeColumnGroup(this$static.columnFormatter, columns, false);
}

function $resizeRows(this$static, rows_0){
  if (this$static.numRows == rows_0) {
    return;
  }
  if (rows_0 < 0) {
    throw new IndexOutOfBoundsException_0('Cannot set number of rows to ' + rows_0);
  }
  if (this$static.numRows < rows_0) {
    addRows(($clinit_DOM() , this$static.bodyElem), rows_0 - this$static.numRows, this$static.numColumns);
    this$static.numRows = rows_0;
  }
   else {
    while (this$static.numRows > rows_0) {
      $removeRow_0(this$static, this$static.numRows - 1);
    }
  }
}

function Grid(rows_0, columns){
  this.widgetMap = new ElementMapperImpl;
  this.tableElem = ($clinit_DOM() , $doc.createElement('table'));
  this.bodyElem = $doc.createElement('tbody');
  $appendChild(this.tableElem, resolve(this.bodyElem));
  $setElement(this, this.tableElem);
  $setCellFormatter(this, new HTMLTable$CellFormatter(this));
  $setColumnFormatter(this, new HTMLTable$ColumnFormatter(this));
  $resizeColumns(this, columns);
  $resizeRows(this, rows_0);
}

function addRows(table, rows_0, columns){
  var td = $doc.createElement('td');
  td.innerHTML = '&nbsp;';
  var row = $doc.createElement('tr');
  for (var cellNum = 0; cellNum < columns; cellNum++) {
    var cell = td.cloneNode(true);
    row.appendChild(cell);
  }
  table.appendChild(row);
  for (var rowNum = 1; rowNum < rows_0; rowNum++) {
    table.appendChild(row.cloneNode(true));
  }
}

defineClass(126, 252, $intern_20, Grid);
_.numColumns = 0;
_.numRows = 0;
var Lcom_google_gwt_user_client_ui_Grid_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Grid', 126);
function $findNext(this$static){
  while (++this$static.nextIndex < this$static.widgetList.array.length) {
    if ($get_4(this$static.widgetList, this$static.nextIndex) != null) {
      return;
    }
  }
}

function $next(this$static){
  var result;
  if (this$static.nextIndex >= this$static.widgetList.array.length) {
    throw new NoSuchElementException;
  }
  result = dynamicCast($get_4(this$static.widgetList, this$static.nextIndex), 6);
  this$static.lastIndex_0 = this$static.nextIndex;
  $findNext(this$static);
  return result;
}

function HTMLTable$1(this$0){
  this.this$01 = this$0;
  this.widgetList = this.this$01.widgetMap.uiObjectList;
  $findNext(this);
}

defineClass(255, 1, {}, HTMLTable$1);
_.hasNext = function hasNext(){
  return this.nextIndex < this.widgetList.array.length;
}
;
_.next = function next(){
  return $next(this);
}
;
_.remove_1 = function remove_7(){
  var w;
  if (this.lastIndex_0 < 0) {
    throw new IllegalStateException;
  }
  w = dynamicCast($get_4(this.widgetList, this.lastIndex_0), 6);
  $removeFromParent_0(w);
  this.lastIndex_0 = -1;
}
;
_.lastIndex_0 = -1;
_.nextIndex = -1;
var Lcom_google_gwt_user_client_ui_HTMLTable$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable/1', 255);
function $addStyleName(this$static, row, column, styleName){
  var td;
  $prepareCell(this$static.this$01, row, column);
  td = $getCellElement_0(this$static.this$01.bodyElem, row, column);
  setStyleName(td, styleName, true);
}

function $getCellElement_0(tbody, row, col){
  return $getCells(tbody.children[row])[col];
}

function $getRawElement(this$static, row, column){
  return $getCellElement_0(this$static.this$01.bodyElem, row, column);
}

function HTMLTable$CellFormatter(this$0){
  this.this$01 = this$0;
}

defineClass(253, 1, {}, HTMLTable$CellFormatter);
var Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable/CellFormatter', 253);
function $prepareColumnGroup(this$static){
  if (!this$static.columnGroup) {
    this$static.columnGroup = ($clinit_DOM() , $doc.createElement('colgroup'));
    insertChild(this$static.this$01.tableElem, this$static.columnGroup, 0);
    $appendChild(this$static.columnGroup, resolve($doc.createElement('col')));
  }
}

function $resizeColumnGroup(this$static, columns, growOnly){
  var i, num;
  columns = columns > 1?columns:1;
  num = this$static.columnGroup.childNodes.length;
  if (num < columns) {
    for (i = num; i < columns; i++) {
      $appendChild(this$static.columnGroup, $doc.createElement('col'));
    }
  }
   else if (!growOnly && num > columns) {
    for (i = num; i > columns; i--) {
      $removeChild(this$static.columnGroup, this$static.columnGroup.lastChild);
    }
  }
}

function HTMLTable$ColumnFormatter(this$0){
  this.this$01 = this$0;
}

defineClass(254, 1, {}, HTMLTable$ColumnFormatter);
var Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable/ColumnFormatter', 254);
function $getCells(row){
  return row.children;
}

function $getRow(tbody, row){
  return $getRow_0(($clinit_DOM() , tbody), row);
}

function $getRow_0(tbody, row){
  return $clinit_DOM() , tbody.children[row];
}

function $clinit_HasHorizontalAlignment(){
  $clinit_HasHorizontalAlignment = emptyMethod;
  ALIGN_CENTER = new HasHorizontalAlignment$HorizontalAlignmentConstant(($clinit_Style$TextAlign() , 'center'));
  new HasHorizontalAlignment$HorizontalAlignmentConstant('justify');
  ALIGN_LEFT = new HasHorizontalAlignment$HorizontalAlignmentConstant('left');
  ALIGN_RIGHT = new HasHorizontalAlignment$HorizontalAlignmentConstant('right');
  ALIGN_LOCALE_START = ALIGN_LEFT;
  ALIGN_DEFAULT = ALIGN_LOCALE_START;
}

var ALIGN_CENTER, ALIGN_DEFAULT, ALIGN_LEFT, ALIGN_LOCALE_START, ALIGN_RIGHT;
defineClass(324, 1, {});
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/AutoHorizontalAlignmentConstant', 324);
function HasHorizontalAlignment$HorizontalAlignmentConstant(textAlignString){
  this.textAlignString = textAlignString;
}

defineClass(80, 324, {}, HasHorizontalAlignment$HorizontalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/HorizontalAlignmentConstant', 80);
function $clinit_HasVerticalAlignment(){
  $clinit_HasVerticalAlignment = emptyMethod;
  new HasVerticalAlignment$VerticalAlignmentConstant('bottom');
  ALIGN_MIDDLE = new HasVerticalAlignment$VerticalAlignmentConstant('middle');
  ALIGN_TOP = new HasVerticalAlignment$VerticalAlignmentConstant('top');
}

var ALIGN_MIDDLE, ALIGN_TOP;
function HasVerticalAlignment$VerticalAlignmentConstant(verticalAlignString){
  this.verticalAlignString = verticalAlignString;
}

defineClass(95, 1, {}, HasVerticalAlignment$VerticalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasVerticalAlignment/VerticalAlignmentConstant', 95);
function $add_3(this$static, w){
  var td, td_0;
  td = (td_0 = ($clinit_DOM() , $doc.createElement('td')) , $setCellHorizontalAlignment(td_0, this$static.horzAlign) , $setCellVerticalAlignment(td_0, this$static.vertAlign) , td_0);
  $appendChild(this$static.tableRow, resolve(td));
  $add(this$static, w, td);
}

function HorizontalPanel(){
  CellPanel.call(this);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  this.tableRow = ($clinit_DOM() , $doc.createElement('tr'));
  $appendChild(this.body_0, resolve(this.tableRow));
  $setPropertyString(this.table, 'cellSpacing', '0');
  $setPropertyString(this.table, 'cellPadding', '0');
}

defineClass(40, 93, $intern_20, HorizontalPanel);
_.remove_0 = function remove_8(w){
  var removed, td;
  td = ($clinit_DOM() , $clinit_DOM() , $getParentElement(w.element));
  removed = $remove_0(this, w);
  removed && $removeChild(this.tableRow, td);
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_HorizontalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HorizontalPanel', 40);
function $clinit_Image(){
  $clinit_Image = emptyMethod;
  new HashMap;
}

function $changeState(this$static, newState){
  this$static.state = newState;
}

function Image_0(url_0){
  $changeState(this, new Image$UnclippedState(this, url_0));
  $setClassName(($clinit_DOM() , this.element), 'gwt-Image');
}

function Image_1(url_0){
  $clinit_Image();
  Image_0.call(this, ($clinit_UriUtils() , new SafeUriString(url_0)));
}

defineClass(52, 6, $intern_14, Image_1);
_.onBrowserEvent = function onBrowserEvent_2(event_0){
  $clinit_DOM();
  $eventGetTypeInt(event_0.type) == 32768 && !!this.state && $setPropertyString(this.element, '__gwtLastUnhandledEvent', '');
  $onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad_1(){
  $onLoad(this.state, this);
}
;
var Lcom_google_gwt_user_client_ui_Image_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image', 52);
function $onLoad(this$static, image){
  var unhandledEvent;
  unhandledEvent = $getPropertyString(($clinit_DOM() , image.element), '__gwtLastUnhandledEvent');
  $equals('load', unhandledEvent) && (this$static.syntheticEventCommand = new Image$State$1(this$static, image) , $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), this$static.syntheticEventCommand));
}

defineClass(237, 1, {});
_.syntheticEventCommand = null;
var Lcom_google_gwt_user_client_ui_Image$State_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/State', 237);
function Image$State$1(this$1, val$image){
  this.this$11 = this$1;
  this.val$image2 = val$image;
}

defineClass(238, 1, {}, Image$State$1);
_.execute_1 = function execute_9(){
  var evt, evt_0;
  if (this.val$image2.state != this.this$11 || this != this.this$11.syntheticEventCommand) {
    return;
  }
  this.this$11.syntheticEventCommand = null;
  if (!this.val$image2.attached) {
    $setPropertyString($getImageElement(this.val$image2), '__gwtLastUnhandledEvent', 'load');
    return;
  }
  evt = (evt_0 = $doc.createEvent('HTMLEvents') , evt_0.initEvent('load', false, false) , evt_0);
  $dispatchEvent($getImageElement(this.val$image2), evt);
}
;
var Lcom_google_gwt_user_client_ui_Image$State$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/State/1', 238);
function $getImageElement(image){
  return $clinit_DOM() , image.element;
}

function Image$UnclippedState(image, url_0){
  $replaceElement(image, $doc.createElement('img'));
  sinkEvents_0(($clinit_DOM() , image.element));
  image.eventsToSink == -1?$sinkEvents_0(image.element, 133398655 | (image.element.__eventBits || 0)):(image.eventsToSink |= 133398655);
  !!image.state && $setPropertyString(image.element, '__gwtLastUnhandledEvent', '');
  $setSrc_0(image.element, url_0.uri_0);
}

defineClass(124, 237, {}, Image$UnclippedState);
var Lcom_google_gwt_user_client_ui_Image$UnclippedState_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/UnclippedState', 124);
function $onAnimationComplete(this$static){
  !!this$static.this$01.callback && $doAfterLayout(this$static.this$01.callback.this$11.this$01);
}

function LayoutCommand$1(this$0){
  this.this$01 = this$0;
}

defineClass(152, 1, {}, LayoutCommand$1);
var Lcom_google_gwt_user_client_ui_LayoutCommand$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LayoutCommand/1', 152);
function $add_4(this$static, widget){
  $insert_3(this$static, widget, this$static.children_0.size_0);
}

function $insert_3(this$static, widget, beforeIndex){
  var layer;
  $removeFromParent_0(widget);
  $insert_6(this$static.children_0, widget, beforeIndex);
  layer = $attachChild(this$static.layout, ($clinit_DOM() , widget.element), null, widget);
  widget.layoutData = layer;
  $setParent(widget, this$static);
  this$static.layoutCmd.schedule(0, null);
}

function $onDetach_0(this$static){
  $onDetach(this$static);
  $removeLayerRefs(this$static.layout.parentElem);
}

function $onResize(this$static){
  var child, child$iterator;
  for (child$iterator = new WidgetCollection$WidgetIterator(this$static.children_0); child$iterator.index_0 < child$iterator.this$01.size_0;) {
    child = $next_1(child$iterator);
    instanceOf(child, 41) && dynamicCast(child, 41).onResize_0();
  }
}

function $setWidgetLeftRight(this$static, child, leftUnit, rightUnit){
  $setLeftRight(dynamicCast(child.layoutData, 26), leftUnit, rightUnit);
  this$static.layoutCmd.schedule(0, null);
}

function $setWidgetTopBottom(this$static, child, topUnit, bottomUnit){
  $setTopBottom(dynamicCast(child.layoutData, 26), topUnit, bottomUnit);
  this$static.layoutCmd.schedule(0, null);
}

function $setWidgetTopHeight(this$static, child, topUnit, heightUnit){
  $setTopHeight(dynamicCast(child.layoutData, 26), 0, topUnit, 2.5, heightUnit);
  this$static.layoutCmd.schedule(0, null);
}

function $setWidgetVerticalPosition(this$static, child){
  dynamicCast(child.layoutData, 26).vPos = 1;
  this$static.layoutCmd.schedule(0, null);
}

function LayoutPanel(){
  ComplexPanel.call(this);
  $setElement(this, $doc.createElement('div'));
  this.layout = new Layout(($clinit_DOM() , this.element));
  this.layoutCmd = new LayoutCommand(this.layout);
}

defineClass(119, 69, $intern_21, LayoutPanel);
_.onAttach = function onAttach_3(){
  $onAttach(this);
}
;
_.onDetach = function onDetach_2(){
  $onDetach_0(this);
}
;
_.onResize_0 = function onResize_2(){
  $onResize(this);
}
;
_.remove_0 = function remove_9(w){
  var removed;
  removed = $remove_0(this, w);
  removed && $removeChild_0(this.layout, dynamicCast(w.layoutData, 26));
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_LayoutPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LayoutPanel', 119);
function $addItem(this$static, item_0){
  $insertItem_0(this$static, item_0, item_0, -1);
}

function $checkIndex(this$static, index_0){
  if (index_0 < 0 || index_0 >= ($clinit_DOM() , this$static.element).options.length) {
    throw new IndexOutOfBoundsException;
  }
}

function $getItemText(this$static, index_0){
  $checkIndex(this$static, index_0);
  return $getOptionText(($clinit_DOM() , this$static.element).options[index_0]);
}

function $getOptionText(option){
  var text_0;
  text_0 = option.text;
  option.hasAttribute('bidiwrapped') && text_0.length > 1 && (text_0 = $substring_0(text_0, 1, text_0.length - 1));
  return text_0;
}

function $getSelectElement(this$static){
  return $clinit_DOM() , this$static.element;
}

function $insertItem(this$static, item_0){
  $insertItem_0(this$static, item_0, item_0, -1);
}

function $insertItem_0(this$static, item_0, value_0, index_0){
  var before, itemCount, option, select;
  select = ($clinit_DOM() , this$static.element);
  option = $doc.createElement('option');
  option.text = item_0;
  option.removeAttribute('bidiwrapped');
  option.value = value_0;
  itemCount = select.options.length;
  (index_0 < 0 || index_0 > itemCount) && (index_0 = itemCount);
  if (index_0 == itemCount) {
    $selectAdd(select, option, null);
  }
   else {
    before = select.options[index_0];
    $selectAdd(select, option, before);
  }
}

function $removeItem_1(this$static, index_0){
  $checkIndex(this$static, index_0);
  $selectRemoveOption(($clinit_DOM() , this$static.element), index_0);
}

function $setSelectedIndex_0(this$static, index_0){
  $setSelectedIndex(($clinit_DOM() , this$static.element), index_0);
}

function $setVisibleItemCount(this$static, visibleItems){
  $setSize(($clinit_DOM() , this$static.element), visibleItems);
}

function ListBox(){
  FocusWidget.call(this, $doc.createElement('select'));
  $setClassName(($clinit_DOM() , this.element), 'gwt-ListBox');
}

defineClass(51, 96, $intern_14, ListBox);
var Lcom_google_gwt_user_client_ui_ListBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ListBox', 51);
function $setReadOnly(this$static){
  ($clinit_DOM() , this$static.element)['readOnly'] = true;
  $setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-' + 'readonly', true);
}

function $setText_1(this$static){
  $setPropertyString(($clinit_DOM() , this$static.element), 'value', 'module requirements module requirements module requirements');
}

function $setValue_1(this$static, value_0){
  ($clinit_DOM() , this$static.element)['value'] = value_0 != null?value_0:'';
}

function ValueBoxBase(elem){
  FocusWidget.call(this, elem);
}

defineClass(165, 96, $intern_14);
_.onBrowserEvent = function onBrowserEvent_3(event_0){
  var type_0;
  type_0 = ($clinit_DOM() , $eventGetTypeInt(event_0.type));
  (type_0 & 896) != 0?$onBrowserEvent(this, event_0):$onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad_2(){
}
;
var Lcom_google_gwt_user_client_ui_ValueBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ValueBoxBase', 165);
function $clinit_TextBoxBase(){
  $clinit_TextBoxBase = emptyMethod;
  $clinit_ValueBoxBase$TextAlignment();
}

function TextBoxBase(elem){
  ValueBoxBase.call(this, elem, (!INSTANCE_1 && (INSTANCE_1 = new PassthroughRenderer) , !INSTANCE_0 && (INSTANCE_0 = new PassthroughParser)));
}

defineClass(118, 165, $intern_14);
var Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextBoxBase', 118);
function TextBox(){
  $clinit_TextBoxBase();
  TextBox_0.call(this, $createInputElement($doc, 'text'), 'gwt-TextBox');
}

function TextBox_0(element, styleName){
  TextBoxBase.call(this, element);
  $setClassName(($clinit_DOM() , this.element), styleName);
}

defineClass(97, 118, $intern_14, TextBox);
var Lcom_google_gwt_user_client_ui_TextBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextBox', 97);
function PasswordTextBox(){
  $clinit_TextBoxBase();
  TextBox_0.call(this, $createInputElement($doc, 'password'), 'gwt-PasswordTextBox');
}

defineClass(166, 97, $intern_14, PasswordTextBox);
var Lcom_google_gwt_user_client_ui_PasswordTextBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PasswordTextBox', 166);
function $onResize_0(){
  var height, width_0, winHeight, winWidth;
  null.nullMethod();
  winWidth = $getClientWidth($doc);
  winHeight = $getClientHeight($doc);
  null.nullMethod($clinit_Style$Display());
  null.nullMethod($clinit_Style$Unit());
  null.nullMethod($clinit_Style$Unit());
  width_0 = $getScrollWidth($doc);
  height = $getScrollHeight($doc);
  null.nullMethod((width_0 > winWidth?width_0:winWidth) + 'px');
  null.nullMethod((height > winHeight?height:winHeight) + 'px');
  null.nullMethod($clinit_Style$Display());
}

function PopupPanel$1(){
}

defineClass(233, 1, $intern_22, PopupPanel$1);
_.onResize = function onResize_3(event_0){
  $onResize_0();
}
;
var Lcom_google_gwt_user_client_ui_PopupPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/1', 233);
function PopupPanel$3(this$0){
  this.this$01 = this$0;
}

defineClass(234, 1, {23:1, 339:1}, PopupPanel$3);
var Lcom_google_gwt_user_client_ui_PopupPanel$3_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/3', 234);
function PopupPanel$4(this$0){
  this.this$01 = this$0;
}

defineClass(235, 1, {340:1, 23:1}, PopupPanel$4);
var Lcom_google_gwt_user_client_ui_PopupPanel$4_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/4', 235);
function $maybeShowGlass(this$static){
  if (this$static.showing) {
    if (this$static.curPanel.isGlassEnabled) {
      $appendChild($doc.body, this$static.curPanel.glass);
      this$static.resizeRegistration = addResizeHandler(this$static.curPanel.glassResizer);
      $onResize_0();
      this$static.glassShowing = true;
    }
  }
   else if (this$static.glassShowing) {
    $removeChild($doc.body, this$static.curPanel.glass);
    $removeHandler(this$static.resizeRegistration.real);
    this$static.resizeRegistration = null;
    this$static.glassShowing = false;
  }
}

function $onComplete_0(this$static){
  if (!this$static.showing) {
    $maybeShowGlass(this$static);
    this$static.isUnloading || $remove_1(($clinit_RootPanel() , get_1()), this$static.curPanel);
  }
  $setClip($getElement(this$static.curPanel), 'rect(auto, auto, auto, auto)');
  $setPropertyImpl($getElement(this$static.curPanel).style, 'overflow', 'visible');
}

function $onInstantaneousRun(this$static){
  $maybeShowGlass(this$static);
  if (this$static.showing) {
    $setPropertyImpl($getElement(this$static.curPanel).style, 'position', 'absolute');
    this$static.curPanel.topPosition != -1 && $setPopupPosition(this$static.curPanel, this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
    $add_0(($clinit_RootPanel() , get_1()), this$static.curPanel);
  }
   else {
    this$static.isUnloading || $remove_1(($clinit_RootPanel() , get_1()), this$static.curPanel);
  }
  $setPropertyImpl($getElement(this$static.curPanel).style, 'overflow', 'visible');
}

function $onUpdate(this$static, progress){
  var bottom, height, left, right, top_0, width_0;
  this$static.showing || (progress = 1 - progress);
  top_0 = 0;
  left = 0;
  right = 0;
  bottom = 0;
  height = round_int(progress * this$static.offsetHeight_0);
  width_0 = round_int(progress * this$static.offsetWidth_0);
  switch (0) {
    case 0:
      top_0 = this$static.offsetHeight_0 - height >> 1;
      left = this$static.offsetWidth_0 - width_0 >> 1;
      right = left + width_0;
      bottom = top_0 + height;
  }
  $setClip($getElement(this$static.curPanel), 'rect(' + top_0 + 'px, ' + right + 'px, ' + bottom + 'px, ' + left + 'px)');
}

function $setState(this$static, showing, isUnloading){
  var animate;
  this$static.isUnloading = isUnloading;
  $cancel(this$static);
  if (this$static.showTimer) {
    $cancel_0(this$static.showTimer);
    this$static.showTimer = null;
    $onComplete_0(this$static);
  }
  this$static.curPanel.showing = showing;
  $updateHandlers(this$static.curPanel);
  animate = !isUnloading && this$static.curPanel.isAnimationEnabled;
  this$static.showing = showing;
  if (animate) {
    if (showing) {
      $maybeShowGlass(this$static);
      $setPropertyImpl($getElement(this$static.curPanel).style, 'position', 'absolute');
      this$static.curPanel.topPosition != -1 && $setPopupPosition(this$static.curPanel, this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
      $setClip($getElement(this$static.curPanel), 'rect(0px, 0px, 0px, 0px)');
      $add_0(($clinit_RootPanel() , get_1()), this$static.curPanel);
      this$static.showTimer = new PopupPanel$ResizeAnimation$1(this$static);
      $schedule(this$static.showTimer, 1);
    }
     else {
      $run(this$static, 200, now_1(), null);
    }
  }
   else {
    $onInstantaneousRun(this$static);
  }
}

function PopupPanel$ResizeAnimation(panel){
  Animation.call(this);
  this.curPanel = panel;
}

defineClass(231, 91, {}, PopupPanel$ResizeAnimation);
_.onComplete = function onComplete_1(){
  $onComplete_0(this);
}
;
_.onStart = function onStart_0(){
  this.offsetHeight_0 = $getOffsetHeight(this.curPanel);
  this.offsetWidth_0 = $getOffsetWidth(this.curPanel);
  $setPropertyImpl($getElement(this.curPanel).style, 'overflow', 'hidden');
  $onUpdate(this, (1 + cos_0($intern_1)) / 2);
}
;
_.onUpdate = function onUpdate_0(progress){
  $onUpdate(this, progress);
}
;
_.curPanel = null;
_.glassShowing = false;
_.isUnloading = false;
_.offsetHeight_0 = 0;
_.offsetWidth_0 = -1;
_.showing = false;
var Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/ResizeAnimation', 231);
function PopupPanel$ResizeAnimation$1(this$1){
  this.this$11 = this$1;
  Timer.call(this);
}

defineClass(232, 101, {}, PopupPanel$ResizeAnimation$1);
_.run = function run_1(){
  this.this$11.showTimer = null;
  $run(this.this$11, 200, now_1(), null);
}
;
var Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/ResizeAnimation/1', 232);
function $clinit_PotentialElement(){
  $clinit_PotentialElement = emptyMethod;
  declareShim();
}

function $setResolver(this$static, resolver){
  $clinit_PotentialElement();
  this$static.__gwt_resolve = buildResolveCallback(resolver);
}

function buildResolveCallback(resolver){
  return function(){
    this.__gwt_resolve = cannotResolveTwice;
    return resolver.resolvePotentialElement();
  }
  ;
}

function cannotResolveTwice(){
  throw 'A PotentialElement cannot be resolved twice.';
}

function declareShim(){
  var shim = function(){
  }
  ;
  shim.prototype = {className:'', clientHeight:0, clientWidth:0, dir:'', getAttribute:function(name_0, value_0){
    return this[name_0];
  }
  , href:'', id:'', lang:'', nodeType:1, removeAttribute:function(name_0, value_0){
    this[name_0] = undefined;
  }
  , setAttribute:function(name_0, value_0){
    this[name_0] = value_0;
  }
  , src:'', style:{}, title:''};
  $wnd.GwtPotentialElementShim = shim;
}

function $sinkEvents_1(this$static, eventBitsToAdd){
  if (this$static.eventsToSink == -1) {
    $clinit_DOM();
    $sinkEvents_0(this$static.inputElem, eventBitsToAdd | $getEventsSunk(this$static.inputElem));
    $sinkEvents_0(this$static.labelElem, eventBitsToAdd | $getEventsSunk(this$static.labelElem));
  }
   else {
    this$static.eventsToSink == -1?($clinit_DOM() , $sinkEvents_0(this$static.inputElem, eventBitsToAdd | $getEventsSunk(this$static.inputElem))):this$static.eventsToSink == -1?($clinit_DOM() , $sinkEvents_0(this$static.element, eventBitsToAdd | (this$static.element.__eventBits || 0))):(this$static.eventsToSink |= eventBitsToAdd);
  }
}

function RadioButton(name_0){
  CheckBox_0.call(this, ($clinit_DOM() , $createInputRadioElement($doc, name_0)));
  $setClassName(this.element, 'gwt-RadioButton');
  $sinkEvents_1(this, 1);
  $sinkEvents_1(this, 8);
  $sinkEvents_1(this, 4096);
  $sinkEvents_1(this, 128);
}

defineClass(122, 29, $intern_14, RadioButton);
_.onBrowserEvent = function onBrowserEvent_4(event_0){
  var target;
  switch ($clinit_DOM() , $eventGetTypeInt(event_0.type)) {
    case 8:
    case 4096:
    case 128:
      this.oldValue = this.attached?($clinit_Boolean() , $isChecked(this.inputElem)?TRUE_0:FALSE_0):($clinit_Boolean() , $isDefaultChecked(this.inputElem)?TRUE_0:FALSE_0);
      break;
    case 1:
      target = event_0.target;
      if (is_0(target) && isOrHasChildImpl(this.labelElem, target)) {
        this.oldValue = this.attached?($clinit_Boolean() , $isChecked(this.inputElem)?TRUE_0:FALSE_0):($clinit_Boolean() , $isDefaultChecked(this.inputElem)?TRUE_0:FALSE_0);
        return;
      }

      $onBrowserEvent(this, event_0);
      fireIfNotEqual(this, this.oldValue, this.attached?($clinit_Boolean() , $isChecked(this.inputElem)?TRUE_0:FALSE_0):($clinit_Boolean() , $isDefaultChecked(this.inputElem)?TRUE_0:FALSE_0));
      return;
  }
  $onBrowserEvent(this, event_0);
}
;
_.sinkEvents = function sinkEvents_2(eventBitsToAdd){
  $sinkEvents_1(this, eventBitsToAdd);
}
;
var Lcom_google_gwt_user_client_ui_RadioButton_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RadioButton', 122);
defineClass(321, 320, {12:1, 8:1, 11:1, 10:1, 13:1, 41:1, 7:1, 6:1});
_.onResize_0 = function onResize_4(){
  $onResize(this.widget);
}
;
var Lcom_google_gwt_user_client_ui_ResizeComposite_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ResizeComposite', 321);
function RootLayoutPanel(){
  LayoutPanel.call(this);
  addResizeHandler(new RootLayoutPanel$1(this));
}

function get_0(){
  if (!singleton_0) {
    singleton_0 = new RootLayoutPanel;
    $add_0(($clinit_RootPanel() , get_1()), singleton_0);
  }
  return singleton_0;
}

defineClass(174, 119, $intern_21, RootLayoutPanel);
_.onLoad = function onLoad_3(){
  $fillParent(this.layout.parentElem);
}
;
var singleton_0;
var Lcom_google_gwt_user_client_ui_RootLayoutPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootLayoutPanel', 174);
function RootLayoutPanel$1(this$0){
  this.this$01 = this$0;
}

defineClass(175, 1, $intern_22, RootLayoutPanel$1);
_.onResize = function onResize_5(event_0){
  $onResize(this.this$01);
}
;
var Lcom_google_gwt_user_client_ui_RootLayoutPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootLayoutPanel/1', 175);
function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  maybeDetachCommand = new RootPanel$1;
  rootPanels = new HashMap;
  widgetsToDetach = new HashSet;
}

function RootPanel(elem){
  ComplexPanel.call(this);
  $setElement_0(this, ($clinit_DOM() , elem));
  $onAttach(this);
}

function detachNow(widget){
  $clinit_RootPanel();
  try {
    widget.onDetach();
  }
   finally {
    $remove_14(widgetsToDetach, widget);
  }
}

function detachWidgets(){
  $clinit_RootPanel();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    $reset(widgetsToDetach.map_0);
    $reset(rootPanels);
  }
}

function get_1(){
  $clinit_RootPanel();
  var rp;
  rp = dynamicCast($get_3(rootPanels, null), 85);
  if (rp) {
    return rp;
  }
  rootPanels.size_0 == 0 && addCloseHandler(new RootPanel$2);
  rp = new RootPanel$DefaultRootPanel;
  $put(rootPanels, null, rp);
  $add_9(widgetsToDetach, rp);
  return rp;
}

defineClass(85, 239, $intern_23);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel', 85);
function RootPanel$1(){
}

defineClass(241, 1, {}, RootPanel$1);
_.execute_2 = function execute_10(w){
  w.isAttached() && w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/1', 241);
function RootPanel$2(){
}

defineClass(242, 1, {346:1, 23:1}, RootPanel$2);
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/2', 242);
function RootPanel$DefaultRootPanel(){
  RootPanel.call(this, $doc.body);
}

defineClass(240, 85, $intern_23, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/DefaultRootPanel', 240);
function $next_0(this$static){
  if (!this$static.hasElement || !this$static.this$01.widget) {
    throw new NoSuchElementException;
  }
  this$static.hasElement = false;
  return this$static.returned = this$static.this$01.widget;
}

function SimplePanel$1(this$0){
  this.this$01 = this$0;
  this.hasElement = !!this.this$01.widget;
}

defineClass(113, 1, {}, SimplePanel$1);
_.hasNext = function hasNext_0(){
  return this.hasElement;
}
;
_.next = function next_0(){
  return $next_0(this);
}
;
_.remove_1 = function remove_10(){
  !!this.returned && this.this$01.remove_0(this.returned);
}
;
_.hasElement = false;
_.returned = null;
var Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SimplePanel/1', 113);
function $insert_4(this$static, child, tab, beforeIndex){
  var idx;
  idx = $getWidgetIndex(this$static.deckPanel, child);
  if (idx != -1) {
    $remove_6(this$static, child);
    idx < beforeIndex && --beforeIndex;
  }
  $insert_0(this$static.deckPanel, child, beforeIndex);
  $add_7(this$static.tabs, beforeIndex, tab);
  $insert_2(this$static.tabBar, tab, beforeIndex);
  $addDomHandler(tab, new TabLayoutPanel$1(this$static, child), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
  setStyleName(($clinit_DOM() , child.element), 'gwt-TabLayoutPanelContent', true);
  this$static.selectedIndex_0 == -1?$selectTab(this$static, 0):this$static.selectedIndex_0 >= beforeIndex && ++this$static.selectedIndex_0;
}

function $insert_5(this$static, child, text_0, beforeIndex){
  var contents;
  contents = new Label_0(text_0);
  $insert_4(this$static, child, new TabLayoutPanel$Tab(this$static, contents), beforeIndex);
}

function $remove_5(this$static, index_0){
  var child, tab;
  if (index_0 < 0 || index_0 >= this$static.deckPanel.children_0.size_0) {
    return false;
  }
  child = $getWidget(this$static.deckPanel, index_0);
  $remove(this$static.tabBar, index_0);
  $remove_2(this$static.deckPanel, child);
  setStyleName(child.getStyleElement(), 'gwt-TabLayoutPanelContent', false);
  tab = dynamicCast(this$static.tabs.remove_3(index_0), 68);
  $removeFromParent_0(tab.widget);
  if (index_0 == this$static.selectedIndex_0) {
    this$static.selectedIndex_0 = -1;
    this$static.deckPanel.children_0.size_0 > 0 && $selectTab(this$static, 0);
  }
   else 
    index_0 < this$static.selectedIndex_0 && --this$static.selectedIndex_0;
  return true;
}

function $remove_6(this$static, w){
  var index_0;
  index_0 = $getWidgetIndex(this$static.deckPanel, w);
  if (index_0 == -1) {
    return false;
  }
  return $remove_5(this$static, index_0);
}

function $selectTab(this$static, index_0){
  if (index_0 == this$static.selectedIndex_0) {
    return;
  }
  fire_0(valueOf(index_0));
  this$static.selectedIndex_0 != -1 && $setSelected(dynamicCast($get_4(this$static.tabs, this$static.selectedIndex_0), 68), false);
  $showWidget(this$static.deckPanel, index_0);
  $setSelected(dynamicCast($get_4(this$static.tabs, index_0), 68), true);
  this$static.selectedIndex_0 = index_0;
  fire_3(valueOf(index_0));
}

function $selectTab_0(this$static, child){
  $selectTab(this$static, $getWidgetIndex(this$static.deckPanel, child));
}

function TabLayoutPanel(barUnit){
  var panel;
  this.deckPanel = new TabLayoutPanel$TabbedDeckLayoutPanel(this);
  this.tabBar = new FlowPanel;
  this.tabs = new ArrayList;
  panel = new LayoutPanel;
  $initWidget(this, panel);
  $add_4(panel, this.tabBar);
  $setWidgetLeftRight(panel, this.tabBar, ($clinit_Style$Unit() , PX), PX);
  $setWidgetTopHeight(panel, this.tabBar, PX, barUnit);
  $setWidgetVerticalPosition(panel, this.tabBar);
  $setStyleName_0(this.deckPanel, 'gwt-TabLayoutPanelContentContainer', true);
  $add_4(panel, this.deckPanel);
  $setWidgetLeftRight(panel, this.deckPanel, PX, PX);
  $setWidgetTopBottom(panel, this.deckPanel, barUnit, PX);
  ($clinit_DOM() , this.tabBar.element).style['width'] = '16384.0px';
  $setStyleName(this.tabBar, 'gwt-TabLayoutPanelTabs');
  $setClassName(this.element, 'gwt-TabLayoutPanel');
}

defineClass(143, 321, $intern_21, TabLayoutPanel);
_.iterator = function iterator_4(){
  return new WidgetCollection$WidgetIterator(this.deckPanel.children_0);
}
;
_.remove_0 = function remove_11(w){
  return $remove_6(this, w);
}
;
_.selectedIndex_0 = -1;
var Lcom_google_gwt_user_client_ui_TabLayoutPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TabLayoutPanel', 143);
function TabLayoutPanel$1(this$0, val$child){
  this.this$01 = this$0;
  this.val$child2 = val$child;
}

defineClass(146, 1, $intern_24, TabLayoutPanel$1);
_.onClick = function onClick(event_0){
  $selectTab_0(this.this$01, this.val$child2);
}
;
var Lcom_google_gwt_user_client_ui_TabLayoutPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TabLayoutPanel/1', 146);
function $setSelected(this$static, selected){
  selected?$setStyleName_0(this$static, getStylePrimaryName(($clinit_DOM() , this$static.element)) + '-' + 'selected', true):$setStyleName_0(this$static, getStylePrimaryName(($clinit_DOM() , this$static.element)) + '-' + 'selected', false);
}

function TabLayoutPanel$Tab(this$0, child){
  var style;
  this.this$01 = this$0;
  SimplePanel.call(this, $doc.createElement('div'));
  $appendChild(($clinit_DOM() , this.element), this.inner = $doc.createElement('div'));
  this.replacingWidget = true;
  $setWidget(this, child);
  this.replacingWidget = false;
  $setClassName(this.element, 'gwt-TabLayoutPanelTab');
  $setClassName(this.inner, 'gwt-TabLayoutPanelTabInner');
  $addClassName(this.element, (style = (!instance_1 && (instance_1 = new CommonResources_Bundle_ie9_default_InlineClientBundleGenerator) , $clinit_CommonResources_Bundle_ie9_default_InlineClientBundleGenerator$inlineBlockStyleInitializer() , inlineBlockStyle) , $ensureInjected(style) , 'GPBYFDEH'));
}

defineClass(68, 78, {12:1, 8:1, 11:1, 10:1, 17:1, 13:1, 68:1, 7:1, 6:1}, TabLayoutPanel$Tab);
_.getContainerElement = function getContainerElement_2(){
  return this.inner;
}
;
_.remove_0 = function remove_12(w){
  var index_0;
  index_0 = $indexOf_1(this.this$01.tabs, this, 0);
  return this.replacingWidget || index_0 < 0?$remove_3(this, w):$remove_5(this.this$01, index_0);
}
;
_.replacingWidget = false;
var Lcom_google_gwt_user_client_ui_TabLayoutPanel$Tab_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TabLayoutPanel/Tab', 68);
function TabLayoutPanel$TabbedDeckLayoutPanel(this$0){
  this.this$01 = this$0;
  ComplexPanel.call(this);
  $setElement(this, $doc.createElement('div'));
  this.layout = new Layout(($clinit_DOM() , this.element));
  this.layoutCmd = new DeckLayoutPanel$DeckAnimateCommand(this, this.layout);
}

defineClass(145, 144, $intern_21, TabLayoutPanel$TabbedDeckLayoutPanel);
_.remove_0 = function remove_13(w){
  return $remove_6(this.this$01, w);
}
;
var Lcom_google_gwt_user_client_ui_TabLayoutPanel$TabbedDeckLayoutPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TabLayoutPanel/TabbedDeckLayoutPanel', 145);
function TextArea_0(){
  $clinit_TextBoxBase();
  TextBoxBase.call(this, $doc.createElement('textarea'));
  $setClassName(($clinit_DOM() , this.element), 'gwt-TextArea');
}

defineClass(123, 118, $intern_14, TextArea_0);
var Lcom_google_gwt_user_client_ui_TextArea_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextArea', 123);
function $clinit_ValueBoxBase$TextAlignment(){
  $clinit_ValueBoxBase$TextAlignment = emptyMethod;
  CENTER_1 = new ValueBoxBase$TextAlignment$1;
  JUSTIFY_0 = new ValueBoxBase$TextAlignment$2;
  LEFT_0 = new ValueBoxBase$TextAlignment$3;
  RIGHT_0 = new ValueBoxBase$TextAlignment$4;
}

function ValueBoxBase$TextAlignment(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_7(){
  $clinit_ValueBoxBase$TextAlignment();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, 1), $intern_3, 35, 0, [CENTER_1, JUSTIFY_0, LEFT_0, RIGHT_0]);
}

defineClass(35, 4, $intern_25);
var CENTER_1, JUSTIFY_0, LEFT_0, RIGHT_0;
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment', 35, values_7);
function ValueBoxBase$TextAlignment$1(){
  ValueBoxBase$TextAlignment.call(this, 'CENTER', 0);
}

defineClass(167, 35, $intern_25, ValueBoxBase$TextAlignment$1);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/1', 167, null);
function ValueBoxBase$TextAlignment$2(){
  ValueBoxBase$TextAlignment.call(this, 'JUSTIFY', 1);
}

defineClass(168, 35, $intern_25, ValueBoxBase$TextAlignment$2);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/2', 168, null);
function ValueBoxBase$TextAlignment$3(){
  ValueBoxBase$TextAlignment.call(this, 'LEFT', 2);
}

defineClass(169, 35, $intern_25, ValueBoxBase$TextAlignment$3);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/3', 169, null);
function ValueBoxBase$TextAlignment$4(){
  ValueBoxBase$TextAlignment.call(this, 'RIGHT', 3);
}

defineClass(170, 35, $intern_25, ValueBoxBase$TextAlignment$4);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/4', 170, null);
function $add_5(this$static, w){
  var td, tr, td_0;
  tr = ($clinit_DOM() , $doc.createElement('tr'));
  td = (td_0 = $doc.createElement('td') , $setCellHorizontalAlignment(td_0, this$static.horzAlign) , $setCellVerticalAlignment(td_0, this$static.vertAlign) , td_0);
  $appendChild(tr, resolve(td));
  $appendChild(this$static.body_0, resolve(tr));
  $add(this$static, w, td);
}

function $setHorizontalAlignment_0(this$static, align_0){
  this$static.horzAlign = align_0;
}

function $setVerticalAlignment_0(this$static, align_0){
  this$static.vertAlign = align_0;
}

function VerticalPanel(){
  CellPanel.call(this);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  $setPropertyString(($clinit_DOM() , this.table), 'cellSpacing', '0');
  $setPropertyString(this.table, 'cellPadding', '0');
}

defineClass(28, 93, $intern_20, VerticalPanel);
_.remove_0 = function remove_14(w){
  var removed, td;
  td = ($clinit_DOM() , $clinit_DOM() , $getParentElement(w.element));
  removed = $remove_0(this, w);
  removed && $removeChild(this.body_0, (null , $getParentElement(td)));
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'VerticalPanel', 28);
function $add_6(this$static, w){
  $insert_6(this$static, w, this$static.size_0);
}

function $get_2(this$static, index_0){
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  return this$static.array[index_0];
}

function $indexOf(this$static, w){
  var i;
  for (i = 0; i < this$static.size_0; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert_6(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_3, 6, this$static.array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.array.length; ++i0) {
      setCheck(newArray, i0, this$static.array[i0]);
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i = this$static.size_0 - 1; i > beforeIndex; --i) {
    setCheck(this$static.array, i, this$static.array[i - 1]);
  }
  setCheck(this$static.array, beforeIndex, w);
}

function $remove_7(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  --this$static.size_0;
  for (i = index_0; i < this$static.size_0; ++i) {
    setCheck(this$static.array, i, this$static.array[i + 1]);
  }
  setCheck(this$static.array, this$static.size_0, null);
}

function $remove_8(this$static, w){
  var index_0;
  index_0 = $indexOf(this$static, w);
  if (index_0 == -1) {
    throw new NoSuchElementException;
  }
  $remove_7(this$static, index_0);
}

function WidgetCollection(parent_0){
  this.parent_0 = parent_0;
  this.array = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_3, 6, 4, 0, 1);
}

defineClass(262, 1, {}, WidgetCollection);
_.iterator = function iterator_5(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection', 262);
function $next_1(this$static){
  if (this$static.index_0 >= this$static.this$01.size_0) {
    throw new NoSuchElementException;
  }
  this$static.currentWidget = this$static.this$01.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function $remove_9(this$static){
  if (!this$static.currentWidget) {
    throw new IllegalStateException;
  }
  this$static.this$01.parent_0.remove_0(this$static.currentWidget);
  --this$static.index_0;
  this$static.currentWidget = null;
}

function WidgetCollection$WidgetIterator(this$0){
  this.this$01 = this$0;
}

defineClass(45, 1, {}, WidgetCollection$WidgetIterator);
_.hasNext = function hasNext_1(){
  return this.index_0 < this.this$01.size_0;
}
;
_.next = function next_1(){
  return $next_1(this);
}
;
_.remove_1 = function remove_15(){
  $remove_9(this);
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection/WidgetIterator', 45);
function $setClip(popup, rect){
  $setPropertyImpl(popup.style, 'clip', rect);
}

function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals('ie9', runtimeValue)) {
    throw new UserAgentAsserter$UserAgentAssertionError(runtimeValue);
  }
}

function Error_0(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(89, 9, $intern_2);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 89);
defineClass(25, 89, $intern_2);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 25);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, '' + ('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie9) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie9) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 9)?dynamicCast('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie9) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 9):null);
}

defineClass(134, 25, $intern_2, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 134);
function $getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function $clearOnReadyStateChange(this$static){
  this$static.onreadystatechange = function(){
  }
  ;
}

function $open(this$static, httpMethod, url_0){
  this$static.open(httpMethod, url_0, true);
}

function $setOnReadyStateChange(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange(_this);
  }
  );
}

function $removeHandler(this$static){
  $doRemove(this$static.this$01, this$static.val$type2, this$static.val$source3, this$static.val$handler4);
}

function SimpleEventBus$1(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(259, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/1', 259);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(260, 1, {302:1}, SimpleEventBus$2);
_.execute_1 = function execute_11(){
  $doAddNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/2', 260);
function SimpleEventBus$3(this$0, val$type, val$source, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = val$source;
  this.val$handler4 = val$handler;
}

defineClass(261, 1, {302:1}, SimpleEventBus$3);
_.execute_1 = function execute_12(){
  $doRemoveNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$3_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/3', 261);
function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(111, 1, {});
_.toString$ = function toString_13(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 111);
function ArrayStoreException(){
  RuntimeException.call(this);
}

defineClass(76, 18, $intern_2, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 76);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
  FALSE_0 = new Boolean_0(false);
  TRUE_0 = new Boolean_0(true);
}

function Boolean_0(value_0){
  this.value_0 = value_0;
}

defineClass(56, 1, {3:1, 56:1, 5:1}, Boolean_0);
_.equals$ = function equals_6(o){
  return instanceOf(o, 56) && dynamicCast(o, 56).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_8(){
  return this.value_0?1231:1237;
}
;
_.toString$ = function toString_14(){
  return '' + this.value_0;
}
;
_.value_0 = false;
var FALSE_0, TRUE_0;
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 56);
function digit(c){
  if (c >= 48 && c < 58) {
    return c - 48;
  }
  if (c >= 97 && c < 97) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < 65) {
    return c - 65 + 10;
  }
  return -1;
}

function ClassCastException(){
  RuntimeException.call(this);
}

defineClass(55, 18, $intern_2, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 55);
function __parseAndValidateInt(s){
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw new NumberFormatException('null');
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && (s.charCodeAt(0) == 45 || s.charCodeAt(0) == 43)?1:0;
  for (i = startIndex; i < length_0; i++) {
    if (digit(s.charCodeAt(i)) == -1) {
      throw new NumberFormatException('For input string: "' + s + '"');
    }
  }
  toReturn = parseInt(s, 10);
  isTooLow = toReturn < -2147483648;
  if (isNaN(toReturn)) {
    throw new NumberFormatException('For input string: "' + s + '"');
  }
   else if (isTooLow || toReturn > $intern_0) {
    throw new NumberFormatException('For input string: "' + s + '"');
  }
  return toReturn;
}

defineClass(90, 1, {3:1, 90:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 90);
function Double(value_0){
  this.value_0 = value_0;
}

defineClass(77, 90, {3:1, 5:1, 77:1, 90:1}, Double);
_.equals$ = function equals_7(o){
  return instanceOf(o, 77) && dynamicCast(o, 77).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_9(){
  return round_int(this.value_0);
}
;
_.toString$ = function toString_16(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 77);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(42, 18, $intern_2, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 42);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(32, 18, $intern_2, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 32);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(22, 18, $intern_2, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 22);
function Integer(value_0){
  this.value_0 = value_0;
}

function valueOf(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues_0)[rebase];
    !result && (result = boxedValues_0[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(57, 90, {3:1, 5:1, 57:1, 90:1}, Integer);
_.equals$ = function equals_8(o){
  return instanceOf(o, 57) && dynamicCast(o, 57).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_10(){
  return this.value_0;
}
;
_.toString$ = function toString_17(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 57);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues_0 = initDim(Ljava_lang_Integer_2_classLit, $intern_3, 57, 256, 0, 1);
}

var boxedValues_0;
function cos_0(x_0){
  return Math.cos(x_0);
}

function max_0(x_0, y_0){
  return x_0 > y_0?x_0:y_0;
}

function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(36, 18, $intern_2, NullPointerException, NullPointerException_0);
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 36);
function NumberFormatException(message){
  IllegalArgumentException_0.call(this, message);
}

defineClass(84, 42, $intern_2, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 84);
function $charAt(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function $equals(this$static, other){
  return this$static === other;
}

function $equalsIgnoreCase(this$static, other){
  if (other == null) {
    return false;
  }
  if (this$static == other) {
    return true;
  }
  return this$static.length == other.length && this$static.toLowerCase() == other.toLowerCase();
}

function $split(this$static, regex, maxMatch){
  var compiled = new RegExp(regex, 'g');
  var out = [];
  var count = 0;
  var trail = this$static;
  var lastTrail = null;
  while (true) {
    var matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      out[count] = trail.substring(0, matchObj.index);
      trail = trail.substring(matchObj.index + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substring(0, 1);
        trail = trail.substring(1);
      }
      lastTrail = trail;
      count++;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    var lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && out.splice(lastNonEmpty, out.length - lastNonEmpty);
  }
  var jr = __createArray(out.length);
  for (var i = 0; i < out.length; ++i) {
    jr[i] = out[i];
  }
  return jr;
}

function $substring(this$static, beginIndex){
  return __substr(this$static, beginIndex, this$static.length - beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  return this$static.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g, '');
}

function __createArray(numElements){
  return initDim(Ljava_lang_String_2_classLit, $intern_3, 2, numElements, 4, 1);
}

function __substr(str, beginIndex, len){
  return str.substr(beginIndex, len);
}

var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function $clinit_String$HashCache(){
  $clinit_String$HashCache = emptyMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = ~~hashCode;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  hashCode = ~~hashCode;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_String$HashCache();
  var key = ':' + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back_0[key];
  result == null && (result = compute(str));
  increment();
  return front[key] = result;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
function $append(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_0(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(s){
  AbstractStringBuilder.call(this, s);
}

defineClass(48, 111, {338:1}, StringBuilder, StringBuilder_0);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 48);
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(81, 18, $intern_2, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 81);
function $advanceToFind(this$static, o, remove){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext();) {
    e = iter.next();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      remove && iter.remove_1();
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

function $toString_1(this$static){
  var comma, e, e$iterator, sb;
  sb = new StringBuilder_0('[');
  comma = false;
  for (e$iterator = this$static.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    comma?(sb.string += ', ' , sb):(comma = true);
    sb.string += e === this$static?'(this Collection)':'' + e;
  }
  sb.string += ']';
  return sb.string;
}

defineClass(318, 1, {});
_.contains_0 = function contains(o){
  return $advanceToFind(this, o, false);
}
;
_.isEmpty = function isEmpty(){
  return this.size_1() == 0;
}
;
_.remove_2 = function remove_16(o){
  return $advanceToFind(this, o, true);
}
;
_.toString$ = function toString_18(){
  return $toString_1(this);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 318);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = isJavaString(key)?key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):this$static.stringMap.get_1(key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !(isJavaString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key))) {
    return false;
  }
  return true;
}

function $toString_2(this$static, o){
  return o === this$static?'(this Map)':'' + o;
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(317, 1, {65:1});
_.equals$ = function equals_9(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 65)) {
    return false;
  }
  otherMap = dynamicCast(obj, 65);
  if (this.size_0 != otherMap.size_0) {
    return false;
  }
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(otherMap)).this$01); $hasNext(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext(entry$iterator)) , entry$iterator.last = entry$iterator.current , dynamicCast(entry$iterator.current.next(), 24));
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.hashCode$ = function hashCode_11(){
  return hashCode_16(new AbstractHashMap$EntrySet(this));
}
;
_.toString$ = function toString_19(){
  var comma, entry, entry$iterator, sb;
  sb = new StringBuilder_0('{');
  comma = false;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this)).this$01); $hasNext(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext(entry$iterator)) , entry$iterator.last = entry$iterator.current , dynamicCast(entry$iterator.current.next(), 24));
    comma?(sb.string += ', ' , sb):(comma = true);
    $append_0(sb, $toString_2(this, entry.getKey()));
    sb.string += '=';
    $append_0(sb, $toString_2(this, entry.getValue()));
  }
  sb.string += '}';
  return sb.string;
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 317);
function $containsKey(this$static, key){
  return isJavaString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $elementAdded(this$static){
  ++this$static.size_0;
  structureChanged(this$static);
}

function $elementRemoved(this$static){
  --this$static.size_0;
  structureChanged(this$static);
}

function $get_3(this$static, key){
  return getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):!(this$static.stringMap.get_1(key) === undefined);
}

function $put(this$static, key, value_0){
  return isJavaString(key)?key == null?$put_0(this$static.hashCodeMap, null, value_0):this$static.stringMap.put(key, value_0):$put_0(this$static.hashCodeMap, key, value_0);
}

function $remove_10(this$static, key){
  return isJavaString(key)?key == null?$remove_15(this$static.hashCodeMap, null):this$static.stringMap.remove_4(key):$remove_15(this$static.hashCodeMap, key);
}

function $reset(this$static){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory();
  this$static.hashCodeMap = delegate.createJsHashCodeMap();
  this$static.hashCodeMap.host = this$static;
  this$static.stringMap = delegate.createJsStringMap();
  this$static.stringMap.host = this$static;
  this$static.size_0 = 0;
  structureChanged(this$static);
}

defineClass(138, 317, {65:1});
_.size_0 = 0;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 138);
defineClass(319, 318, {88:1});
_.equals$ = function equals_10(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 88)) {
    return false;
  }
  other = dynamicCast(o, 88);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode$ = function hashCode_12(){
  return hashCode_16(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 319);
function $contains(this$static, o){
  if (instanceOf(o, 24)) {
    return $containsEntry(this$static.this$01, dynamicCast(o, 24));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(66, 319, {88:1}, AbstractHashMap$EntrySet);
_.contains_0 = function contains_0(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_6(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.remove_2 = function remove_17(entry){
  var key;
  if ($contains(this, entry)) {
    key = dynamicCast(entry, 24).getKey();
    $remove_10(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_1(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 66);
function $hasNext(this$static){
  if (this$static.current.hasNext()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = this$static.this$01.hashCodeMap.entries();
  return this$static.current.hasNext();
}

function $next_2(this$static){
  return checkStructuralChange(this$static.this$01, this$static) , checkCriticalElement($hasNext(this$static)) , this$static.last = this$static.current , dynamicCast(this$static.current.next(), 24);
}

function $remove_11(this$static){
  checkState(!!this$static.last);
  checkStructuralChange(this$static.this$01, this$static);
  this$static.last.remove_1();
  this$static.last = null;
  recordLastKnownStructure(this$static.this$01, this$static);
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = this.this$01.stringMap.entries();
  this.current = this.stringMapEntries;
  setModCount(this, this$0._gwt_modCount);
}

defineClass(67, 1, {}, AbstractHashMap$EntrySetIterator);
_.hasNext = function hasNext_2(){
  return $hasNext(this);
}
;
_.next = function next_2(){
  return $next_2(this);
}
;
_.remove_1 = function remove_18(){
  $remove_11(this);
}
;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 67);
function $indexOf_0(this$static, toFind){
  var i, n;
  for (i = 0 , n = this$static.array.length; i < n; ++i) {
    if (equals_14(toFind, (checkElementIndex(i, this$static.array.length) , this$static.array[i]))) {
      return i;
    }
  }
  return -1;
}

defineClass(326, 318, {33:1});
_.add_0 = function add_1(index_0, element){
  throw new UnsupportedOperationException_0('Add not supported on this list');
}
;
_.add_1 = function add_2(obj){
  this.add_0(this.size_1(), obj);
  return true;
}
;
_.equals$ = function equals_11(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 33)) {
    return false;
  }
  other = dynamicCast(o, 33);
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext();) {
    elem = elem$iterator.next();
    elemOther = iterOther.next();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode$ = function hashCode_13(){
  return hashCode_17(this);
}
;
_.iterator = function iterator_7(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator = function listIterator(){
  return new AbstractList$ListIteratorImpl(this, 0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
_.remove_3 = function remove_19(index_0){
  throw new UnsupportedOperationException_0('Remove not supported on this list');
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 326);
function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(30, 1, {}, AbstractList$IteratorImpl);
_.hasNext = function hasNext_3(){
  return this.i < this.this$01_0.size_1();
}
;
_.next = function next_3(){
  return checkCriticalElement(this.i < this.this$01_0.size_1()) , this.this$01_0.get_0(this.last = this.i++);
}
;
_.remove_1 = function remove_20(){
  checkState(this.last != -1);
  this.this$01_0.remove_3(this.last);
  this.i = this.last;
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 30);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(120, 30, {}, AbstractList$ListIteratorImpl);
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous_0(){
  checkCriticalElement(this.i > 0);
  return this.this$01.get_0(this.last = --this.i);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 120);
function $iterator(this$static){
  var outerIter;
  outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.this$01)).this$01);
  return new AbstractMap$1$1(outerIter);
}

function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(112, 319, {88:1}, AbstractMap$1);
_.contains_0 = function contains_1(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator = function iterator_8(){
  return $iterator(this);
}
;
_.remove_2 = function remove_21(key){
  if ($containsKey(this.this$01, key)) {
    $remove_10(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_2(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 112);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(141, 1, {}, AbstractMap$1$1);
_.hasNext = function hasNext_4(){
  return $hasNext(this.val$outerIter2);
}
;
_.next = function next_4(){
  var entry;
  entry = $next_2(this.val$outerIter2);
  return entry.getKey();
}
;
_.remove_1 = function remove_22(){
  $remove_11(this.val$outerIter2);
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 141);
defineClass(139, 1, $intern_26);
_.equals$ = function equals_12(other){
  var entry;
  if (!instanceOf(other, 24)) {
    return false;
  }
  entry = dynamicCast(other, 24);
  return equals_14(this.key, entry.getKey()) && equals_14(this.value_0, entry.getValue());
}
;
_.getKey = function getKey(){
  return this.key;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
_.hashCode$ = function hashCode_14(){
  return hashCode_18(this.key) ^ hashCode_18(this.value_0);
}
;
_.setValue = function setValue(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString$ = function toString_20(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 139);
function AbstractMap$SimpleEntry(key, value_0){
  this.key = key;
  this.value_0 = value_0;
}

defineClass(140, 139, $intern_26, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 140);
defineClass(327, 1, $intern_26);
_.equals$ = function equals_13(other){
  var entry;
  if (!instanceOf(other, 24)) {
    return false;
  }
  entry = dynamicCast(other, 24);
  return equals_14(this.getKey(), entry.getKey()) && equals_14(this.getValue(), entry.getValue());
}
;
_.hashCode$ = function hashCode_15(){
  return hashCode_18(this.getKey()) ^ hashCode_18(this.getValue());
}
;
_.toString$ = function toString_21(){
  return this.getKey() + '=' + this.getValue();
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 327);
function $$init(this$static){
  this$static.array = initDim(Ljava_lang_Object_2_classLit, $intern_3, 1, 0, 3, 1);
}

function $add_7(this$static, index_0, o){
  checkPositionIndex(index_0, this$static.array.length);
  splice_0(this$static.array, index_0, 0, o);
}

function $add_8(this$static, o){
  setCheck(this$static.array, this$static.array.length, o);
  return true;
}

function $get_4(this$static, index_0){
  checkElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_1(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_14(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $insertAt(this$static, values){
  nativeArraySplice(values, 0, this$static.array, 0, values.length, false);
}

function $remove_12(this$static, index_0){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  splice(this$static.array, index_0, 1);
  return previous;
}

function $remove_13(this$static, o){
  var i;
  i = $indexOf_1(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  this$static.remove_3(i);
  return true;
}

function $set_0(this$static, index_0){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  setCheck(this$static.array, index_0, null);
  return previous;
}

function $toArray(this$static){
  return cloneSubrange(this$static.array, this$static.array.length);
}

function $toArray_0(this$static, out){
  var i, size_0, result;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = (result = initializeArrayElementsWithDefaults(0, size_0) , initValues(getClass__Ljava_lang_Class___devirtual$(out), out.castableTypeMap$, out.__elementTypeId$, out.__elementTypeCategory$, result) , result));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function ArrayList(){
  $$init(this);
}

function ArrayList_0(c){
  $$init(this);
  $insertAt(this, cloneSubrange(c.array, c.array.length));
}

function splice(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

function splice_0(array, index_0, deleteCount, value_0){
  array.splice(index_0, deleteCount, value_0);
}

defineClass(27, 326, $intern_27, ArrayList, ArrayList_0);
_.add_0 = function add_3(index_0, o){
  $add_7(this, index_0, o);
}
;
_.add_1 = function add_4(o){
  return $add_8(this, o);
}
;
_.contains_0 = function contains_2(o){
  return $indexOf_1(this, o, 0) != -1;
}
;
_.get_0 = function get_2(index_0){
  return $get_4(this, index_0);
}
;
_.isEmpty = function isEmpty_0(){
  return this.array.length == 0;
}
;
_.remove_3 = function remove_23(index_0){
  return $remove_12(this, index_0);
}
;
_.remove_2 = function remove_24(o){
  return $remove_13(this, o);
}
;
_.size_1 = function size_3(){
  return this.array.length;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 27);
function Arrays$ArrayList(array){
  this.array = array;
}

defineClass(131, 326, $intern_27, Arrays$ArrayList);
_.contains_0 = function contains_3(o){
  return $indexOf_0(this, o) != -1;
}
;
_.get_0 = function get_3(index_0){
  return checkElementIndex(index_0, this.array.length) , this.array[index_0];
}
;
_.size_1 = function size_4(){
  return this.array.length;
}
;
var Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util', 'Arrays/ArrayList', 131);
function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
}

function hashCode_16(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function hashCode_17(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

var EMPTY_LIST;
function Collections$EmptyList(){
}

defineClass(176, 326, $intern_27, Collections$EmptyList);
_.contains_0 = function contains_4(object){
  return false;
}
;
_.get_0 = function get_4(location_0){
  checkElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_9(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_2;
}
;
_.listIterator = function listIterator_1(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_2;
}
;
_.size_1 = function size_5(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 176);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_2 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(177, 1, {}, Collections$EmptyListIterator);
_.hasNext = function hasNext_5(){
  return false;
}
;
_.hasPrevious = function hasPrevious_0(){
  return false;
}
;
_.next = function next_5(){
  throw new NoSuchElementException;
}
;
_.previous = function previous_1(){
  throw new NoSuchElementException;
}
;
_.remove_1 = function remove_25(){
  throw new IllegalStateException;
}
;
var INSTANCE_2;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 177);
function checkStructuralChange(host, iterator){
  if (iterator._gwt_modCount != host._gwt_modCount) {
    throw new ConcurrentModificationException;
  }
}

function recordLastKnownStructure(host, iterator){
  setModCount(iterator, host._gwt_modCount);
}

function setModCount(o, modCount){
  o._gwt_modCount = modCount;
}

function structureChanged(map_0){
  var modCount;
  modCount = map_0._gwt_modCount | 0;
  setModCount(map_0, modCount + 1);
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(290, 18, $intern_2, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 290);
function $equals_0(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

function $getHashCode(key){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key);
  return ~~hashCode;
}

function HashMap(){
  $reset(this);
}

defineClass(49, 138, {3:1, 65:1}, HashMap);
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 49);
function $add_9(this$static, o){
  var old;
  old = $put(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_0(this$static, o){
  return $containsKey(this$static.map_0, o);
}

function $remove_14(this$static, o){
  return $remove_10(this$static.map_0, o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

defineClass(104, 319, {3:1, 88:1}, HashSet);
_.contains_0 = function contains_5(o){
  return $contains_0(this, o);
}
;
_.isEmpty = function isEmpty_1(){
  return this.map_0.size_0 == 0;
}
;
_.iterator = function iterator_10(){
  return $iterator(new AbstractMap$1(this.map_0));
}
;
_.remove_2 = function remove_26(o){
  return $remove_14(this, o);
}
;
_.size_1 = function size_6(){
  return this.map_0.size_0;
}
;
_.toString$ = function toString_22(){
  return $toString_1(new AbstractMap$1(this.map_0));
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 104);
function $ensureChain(this$static, hashCode){
  var map_0 = this$static.backingMap;
  return map_0[hashCode] || (map_0[hashCode] = []);
}

function $getChain(this$static, hashCode){
  return this$static.backingMap[hashCode];
}

function $getChainOrEmpty(this$static, hashCode){
  return this$static.backingMap[hashCode] || [];
}

function $getEntry(this$static, key){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = $getChainOrEmpty(this$static, key == null?'0':'' + $getHashCode(key)) , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if ($equals_0(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $keys(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_0(this$static, key, value_0){
  var chain, entry, entry$index, entry$max;
  chain = $ensureChain(this$static, key == null?'0':'' + $getHashCode(key));
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if ($equals_0(key, entry.getKey())) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain, chain.length, new AbstractMap$SimpleEntry(key, value_0));
  $elementAdded(this$static.host);
  return null;
}

function $remove_15(this$static, key){
  var chain, entry, hashCode, i;
  hashCode = key == null?'0':'' + $getHashCode(key);
  chain = $getChainOrEmpty(this$static, hashCode);
  for (i = 0; i < chain.length; i++) {
    entry = chain[i];
    if ($equals_0(key, entry.getKey())) {
      chain.length == 1?(delete this$static.backingMap[hashCode] , undefined):(chain.splice(i, 1) , undefined);
      $elementRemoved(this$static.host);
      return entry.getValue();
    }
  }
  return null;
}

function InternalJsHashCodeMap(){
  this.backingMap = this.createMap();
}

defineClass(125, 1, {}, InternalJsHashCodeMap);
_.createMap = function createMap(){
  return Object.create(null);
}
;
_.entries = function entries(){
  return new InternalJsHashCodeMap$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap', 125);
function $hasNext_0(this$static){
  if (this$static.itemIndex < this$static.chain.length) {
    return true;
  }
  if (this$static.chainIndex < this$static.keys_0.length - 1) {
    this$static.chain = $getChain(this$static.this$01, this$static.keys_0[++this$static.chainIndex]);
    this$static.itemIndex = 0;
    return true;
  }
  return false;
}

function InternalJsHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.keys_0 = $keys(this.this$01);
  this.chain = initDim(Ljava_util_Map$Entry_2_classLit, $intern_3, 24, 0, 0, 1);
}

defineClass(248, 1, {}, InternalJsHashCodeMap$1);
_.hasNext = function hasNext_6(){
  return $hasNext_0(this);
}
;
_.next = function next_6(){
  return checkCriticalElement($hasNext_0(this)) , this.lastChain = this.chain , this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.remove_1 = function remove_27(){
  checkState(!!this.lastEntry);
  $remove_15(this.this$01, this.lastEntry.getKey());
  maskUndefined(this.chain) === maskUndefined(this.lastChain) && this.chain.length != 1 && --this.itemIndex;
  this.lastEntry = null;
}
;
_.chainIndex = -1;
_.itemIndex = 0;
_.lastChain = null;
_.lastEntry = null;
var Ljava_util_InternalJsHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/1', 248);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy(){
  InternalJsHashCodeMap.call(this);
}

defineClass(246, 125, {}, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy);
_.createMap = function createMap_0(){
  return {};
}
;
_.entries = function entries_0(){
  var list = this.newEntryList();
  var map_0 = this.backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        list.add_1(array[i]);
      }
    }
  }
  return list.iterator();
}
;
_.newEntryList = function newEntryList(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy', 246);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(247, 27, $intern_27, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1);
_.remove_3 = function remove_28(index_0){
  var removed;
  return removed = dynamicCast($remove_12(this, index_0), 24) , $remove_15(this.this$11, removed.getKey()) , removed;
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy/1', 247);
function InternalJsMapFactory(){
}

defineClass(243, 1, {}, InternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap(){
  return new InternalJsHashCodeMap;
}
;
_.createJsStringMap = function createJsStringMap(){
  return new InternalJsStringMap;
}
;
var Ljava_util_InternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory', 243);
function $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory(){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory = emptyMethod;
  delegate = createFactory();
}

function canHandleProto(){
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  return true;
}

function createFactory(){
  var map_0;
  if (Object.create && Object.getOwnPropertyNames && canHandleProto()) {
    return (map_0 = Object.create(null) , map_0['__proto__'] = 42 , Object.getOwnPropertyNames(map_0).length == 0)?new InternalJsMapFactory$KeysWorkaroundJsMapFactory:new InternalJsMapFactory;
  }
  return new InternalJsMapFactory$LegacyInternalJsMapFactory;
}

var delegate;
function InternalJsMapFactory$KeysWorkaroundJsMapFactory(){
}

defineClass(245, 243, {}, InternalJsMapFactory$KeysWorkaroundJsMapFactory);
_.createJsStringMap = function createJsStringMap_0(){
  return new InternalJsStringMap$InternalJsStringMapWithKeysWorkaround;
}
;
var Ljava_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/KeysWorkaroundJsMapFactory', 245);
function InternalJsMapFactory$LegacyInternalJsMapFactory(){
}

defineClass(244, 243, {}, InternalJsMapFactory$LegacyInternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap_0(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy;
}
;
_.createJsStringMap = function createJsStringMap_1(){
  return new InternalJsStringMap$InternalJsStringMapLegacy;
}
;
var Ljava_util_InternalJsMapFactory$LegacyInternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/LegacyInternalJsMapFactory', 244);
function $keys_0(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_1(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap[key];
  oldValue === undefined && $elementAdded(this$static.host);
  $set_1(this$static, key, value_0 === undefined?null:value_0);
  return oldValue;
}

function $remove_16(this$static, key){
  var value_0;
  value_0 = this$static.backingMap[key];
  if (!(value_0 === undefined)) {
    delete this$static.backingMap[key];
    $elementRemoved(this$static.host);
  }
  return value_0;
}

function $set_1(this$static, key, value_0){
  this$static.backingMap[key] = value_0;
}

function InternalJsStringMap(){
  this.backingMap = this.createMap_0();
}

defineClass(98, 1, {}, InternalJsStringMap);
_.createMap_0 = function createMap_1(){
  return Object.create(null);
}
;
_.entries = function entries_1(){
  var keys_0;
  keys_0 = this.keys_1();
  return new InternalJsStringMap$1(this, keys_0);
}
;
_.get_1 = function get_5(key){
  return this.backingMap[key];
}
;
_.keys_1 = function keys_1(){
  return $keys_0(this);
}
;
_.newMapEntry = function newMapEntry(key){
  return new InternalJsStringMap$2(this, key);
}
;
_.put = function put(key, value_0){
  return $put_1(this, key, value_0);
}
;
_.remove_4 = function remove_29(key){
  return $remove_16(this, key);
}
;
var Ljava_util_InternalJsStringMap_2_classLit = createForClass('java.util', 'InternalJsStringMap', 98);
function InternalJsStringMap$1(this$0, val$keys){
  this.this$01 = this$0;
  this.val$keys2 = val$keys;
}

defineClass(181, 1, {}, InternalJsStringMap$1);
_.hasNext = function hasNext_7(){
  return this.i < this.val$keys2.length;
}
;
_.next = function next_7(){
  return checkCriticalElement(this.i < this.val$keys2.length) , new InternalJsStringMap$2(this.this$01, this.val$keys2[this.last = this.i++]);
}
;
_.remove_1 = function remove_30(){
  checkState(this.last != -1);
  this.this$01.remove_4(this.val$keys2[this.last]);
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
var Ljava_util_InternalJsStringMap$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/1', 181);
function InternalJsStringMap$2(this$0, val$key){
  this.this$01 = this$0;
  this.val$key2 = val$key;
}

defineClass(121, 327, $intern_26, InternalJsStringMap$2);
_.getKey = function getKey_0(){
  return this.val$key2;
}
;
_.getValue = function getValue_0(){
  return this.this$01.get_1(this.val$key2);
}
;
_.setValue = function setValue_0(object){
  return this.this$01.put(this.val$key2, object);
}
;
var Ljava_util_InternalJsStringMap$2_2_classLit = createForClass('java.util', 'InternalJsStringMap/2', 121);
function InternalJsStringMap$InternalJsStringMapLegacy(){
  InternalJsStringMap.call(this);
}

defineClass(178, 98, {}, InternalJsStringMap$InternalJsStringMapLegacy);
_.createMap_0 = function createMap_2(){
  return {};
}
;
_.entries = function entries_2(){
  var list = this.newEntryList_0();
  for (var key in this.backingMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = this.newMapEntry(key.substring(1));
      list.add_1(entry);
    }
  }
  return list.iterator();
}
;
_.get_1 = function get_6(key){
  return this.backingMap[':' + key];
}
;
_.newEntryList_0 = function newEntryList_0(){
  return new InternalJsStringMap$InternalJsStringMapLegacy$1(this);
}
;
_.put = function put_0(key, value_0){
  return $put_1(this, ':' + key, value_0);
}
;
_.remove_4 = function remove_31(key){
  return $remove_16(this, ':' + key);
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy', 178);
function InternalJsStringMap$InternalJsStringMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(180, 27, $intern_27, InternalJsStringMap$InternalJsStringMapLegacy$1);
_.remove_3 = function remove_32(index_0){
  var removed;
  return removed = dynamicCast($remove_12(this, index_0), 24) , $remove_16(this.this$11, ':' + dynamicCastToString(removed.getKey())) , removed;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy/1', 180);
function InternalJsStringMap$InternalJsStringMapWithKeysWorkaround(){
  InternalJsStringMap.call(this);
}

defineClass(179, 98, {}, InternalJsStringMap$InternalJsStringMapWithKeysWorkaround);
_.keys_1 = function keys_2(){
  var keys_0;
  keys_0 = $keys_0(this);
  !(this.backingMap['__proto__'] === undefined) && (keys_0[keys_0.length] = '__proto__');
  return keys_0;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapWithKeysWorkaround', 179);
var Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(53, 18, $intern_2, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 53);
function equals_14(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_18(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function Configuration(configString){
  var i, moduleStrings;
  this.modules = new ArrayList;
  moduleStrings = $split(configString, ';', 0);
  this.id_0 = __parseAndValidateInt(moduleStrings[0]);
  for (i = 1; i < moduleStrings.length; i++) {
    $add_8(this.modules, new Module_0(moduleStrings[i]));
  }
}

defineClass(268, 1, {}, Configuration);
_.toString$ = function toString_23(){
  var configString, m, m$iterator;
  configString = '' + this.id_0 + ';';
  for (m$iterator = new AbstractList$IteratorImpl(this.modules); m$iterator.i < m$iterator.this$01_0.size_1();) {
    m = (checkCriticalElement(m$iterator.i < m$iterator.this$01_0.size_1()) , dynamicCast(m$iterator.this$01_0.get_0(m$iterator.last = m$iterator.i++), 21));
    configString += $toString_3(m);
    configString += ';';
  }
  return $substring_0(configString, 0, configString.length - 2);
}
;
_.id_0 = -1;
var Lmhcs_client_Configuration_2_classLit = createForClass('mhcs.client', 'Configuration', 268);
function minConfigPossible(){
  var m$index, m$max, modules, numAirlock, numCanteen, numControl, numDormitory, numFoodWater, numPlain, numPower, numSanitation;
  modules = throwClassCastExceptionUnlessNull($toArray(getModuleList()));
  numAirlock = 0;
  numControl = 0;
  numPower = 0;
  numFoodWater = 0;
  numDormitory = 0;
  numCanteen = 0;
  numSanitation = 0;
  numPlain = 0;
  for (m$index = 0 , m$max = modules.length; m$index < m$max; ++m$index) {
    null.nullMethod().nullMethod() && ++numAirlock;
    null.nullMethod().nullMethod() && ++numControl;
    null.nullMethod().nullMethod() && ++numPower;
    null.nullMethod().nullMethod() && ++numFoodWater;
    null.nullMethod().nullMethod() && ++numDormitory;
    null.nullMethod().nullMethod() && ++numCanteen;
    null.nullMethod().nullMethod() && ++numSanitation;
    null.nullMethod().nullMethod() && ++numPlain;
  }
  return numAirlock >= 1 && numControl >= 1 && numPower >= 1 && numFoodWater >= 1 && numDormitory >= 1 && numCanteen >= 1 && numSanitation >= 1 && numPlain >= 3;
}

function $clinit_Controller(){
  $clinit_Controller = emptyMethod;
  varModule = new Module;
}

function populateCondidition(moduleCondition){
  $clinit_Controller();
  $insertItem_0(moduleCondition, 'Usable', 'Usable', -1);
  $insertItem_0(moduleCondition, 'Usable After Repair', 'Usable After Repair', -1);
  $insertItem_0(moduleCondition, 'Beyond Repair', 'Beyond Repair', -1);
}

function populateOrientation(moduleOrientation){
  $clinit_Controller();
  $insertItem_0(moduleOrientation, '0 turns', '0 turns', -1);
  $insertItem_0(moduleOrientation, '1 turns', '1 turns', -1);
  $insertItem_0(moduleOrientation, '2 turns', '2 turns', -1);
}

function setType(id_0, type_0){
  $clinit_Controller();
  var closeButton, details, dialogContents, image, intModId, modId, typeDialogBox;
  modId = $getPropertyString(($clinit_DOM() , id_0.element), 'value');
  if ($equals(modId, '')) {
    return;
  }
   else {
    intModId = __parseAndValidateInt(modId);
  }
  if (0 < intModId && intModId < 41) {
    $checkIndex(type_0, 0);
    type_0.element.options[0].selected = true;
  }
   else if (60 < intModId && intModId < 81) {
    $checkIndex(type_0, 1);
    type_0.element.options[1].selected = true;
  }
   else if (90 < intModId && intModId < 101) {
    $checkIndex(type_0, 2);
    type_0.element.options[2].selected = true;
  }
   else if (110 < intModId && intModId < 121) {
    $checkIndex(type_0, 3);
    type_0.element.options[3].selected = true;
  }
   else if (130 < intModId && intModId < 135) {
    $checkIndex(type_0, 4);
    type_0.element.options[4].selected = true;
  }
   else if (140 < intModId && intModId < 145) {
    $checkIndex(type_0, 5);
    type_0.element.options[5].selected = true;
  }
   else if (150 < intModId && intModId < 155) {
    $checkIndex(type_0, 6);
    type_0.element.options[6].selected = true;
  }
   else if (160 < intModId && intModId < 165) {
    $checkIndex(type_0, 7);
    type_0.element.options[7].selected = true;
  }
   else if (170 < intModId && intModId < 175) {
    $checkIndex(type_0, 8);
    type_0.element.options[8].selected = true;
  }
   else if (180 < intModId && intModId < 185) {
    $checkIndex(type_0, 9);
    type_0.element.options[9].selected = true;
  }
   else {
    typeDialogBox = new DialogBox;
    $setText_0(typeDialogBox.caption, 'ID Error');
    dialogContents = new VerticalPanel;
    $setPropertyInt(dialogContents.table, 'cellSpacing', 4);
    $setWidget(typeDialogBox.decPanel, dialogContents);
    $maybeUpdateSize(typeDialogBox);
    details = new HTML_0('You have entered an incorrect Module ID.');
    $add_5(dialogContents, details);
    $setCellHorizontalAlignment_0(dialogContents, details, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
    image = new Image_1('images/error');
    $add_5(dialogContents, image);
    $setCellHorizontalAlignment_0(dialogContents, image, ALIGN_CENTER);
    closeButton = new Button_0(new Controller$1(typeDialogBox));
    $add_5(dialogContents, closeButton);
    $setCellHorizontalAlignment_0(dialogContents, closeButton, ALIGN_RIGHT);
    $center(typeDialogBox);
    !typeDialogBox.resizeHandlerRegistration && (typeDialogBox.resizeHandlerRegistration = addResizeHandler(new DialogBox$1(typeDialogBox)));
    $show(typeDialogBox);
  }
}

var varModule;
function Controller$1(val$typeDialogBox){
  this.val$typeDialogBox1 = val$typeDialogBox;
}

defineClass(155, 1, $intern_24, Controller$1);
_.onClick = function onClick_0(event_0){
  $hide_0(this.val$typeDialogBox1, false);
}
;
var Lmhcs_client_Controller$1_2_classLit = createForClass('mhcs.client', 'Controller/1', 155);
function Controller$2(){
}

defineClass(156, 1, $intern_24, Controller$2);
_.onClick = function onClick_1(event_0){
  $clinit_Controller();
  varModule = new Module;
}
;
var Lmhcs_client_Controller$2_2_classLit = createForClass('mhcs.client', 'Controller/2', 156);
function Controller$3(val$modulesListBox){
  this.val$modulesListBox1 = val$modulesListBox;
}

defineClass(157, 1, $intern_24, Controller$3);
_.onClick = function onClick_2(event_0){
  var moduleString;
  moduleString = $getItemText(this.val$modulesListBox1, $getSelectElement(this.val$modulesListBox1).selectedIndex);
  moduleString = __substr(moduleString, 8, moduleString.length - 8);
  removeModuleFromId(__parseAndValidateInt(moduleString));
  $removeItem_1(this.val$modulesListBox1, $getSelectElement(this.val$modulesListBox1).selectedIndex);
}
;
var Lmhcs_client_Controller$3_2_classLit = createForClass('mhcs.client', 'Controller/3', 157);
function Controller$4(val$modulesEastType, val$modulesEastId, val$xTextBox, val$yTextBox, val$modulesEastCondition, val$modulesEastOrientation, val$successSound, val$minConfigSound, val$errorSound, val$modulesListBox){
  this.val$modulesEastType1 = val$modulesEastType;
  this.val$modulesEastId2 = val$modulesEastId;
  this.val$xTextBox3 = val$xTextBox;
  this.val$yTextBox4 = val$yTextBox;
  this.val$modulesEastCondition5 = val$modulesEastCondition;
  this.val$modulesEastOrientation6 = val$modulesEastOrientation;
  this.val$successSound7 = val$successSound;
  this.val$strSettingsButtonWidth8 = '140px';
  this.val$strModulesButtonWidth9 = '150px';
  this.val$minConfigSound10 = val$minConfigSound;
  this.val$errorSound11 = val$errorSound;
  this.val$modulesListBox12 = val$modulesListBox;
}

defineClass(158, 1, $intern_24, Controller$4);
_.onClick = function onClick_3(event_0){
  var closeButton, coordinates, details, dialogContents, id_0, image, m, m$iterator, minConfigAlert, orientation, status_0, type_0;
  type_0 = getTypeFromUserString($getItemText(this.val$modulesEastType1, $getSelectElement(this.val$modulesEastType1).selectedIndex));
  id_0 = __parseAndValidateInt($getPropertyString($getElement(this.val$modulesEastId2), 'value'));
  coordinates = new Point(__parseAndValidateInt($getPropertyString($getElement(this.val$xTextBox3), 'value')), __parseAndValidateInt($getPropertyString($getElement(this.val$yTextBox4), 'value')));
  status_0 = getStatusFromUserString($getItemText(this.val$modulesEastCondition5, $getSelectElement(this.val$modulesEastCondition5).selectedIndex));
  orientation = $getSelectElement(this.val$modulesEastOrientation6).selectedIndex;
  if (saveModule(new Module_1(type_0, id_0, coordinates, status_0, orientation, false))) {
    $play($getMediaElement(this.val$successSound7));
    if (minConfigPossible() && !($clinit_Variables() , $clinit_Variables() , minConfigReached).value_0) {
      minConfigAlert = new DialogBox;
      $setText_0(minConfigAlert.caption, 'Minimum Configuration Available');
      dialogContents = new VerticalPanel;
      $setPropertyInt(dialogContents.table, 'cellSpacing', 4);
      $setWidget(minConfigAlert.decPanel, dialogContents);
      $maybeUpdateSize(minConfigAlert);
      details = new HTML_0('Go to Configurations tab to view the minimum configuration available.');
      $add_5(dialogContents, details);
      $setCellHorizontalAlignment_0(dialogContents, details, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
      image = new Image_1('images/yay');
      $setHeight(image, this.val$strSettingsButtonWidth8);
      $setWidth(image, this.val$strModulesButtonWidth9);
      $add_5(dialogContents, image);
      $setCellHorizontalAlignment_0(dialogContents, image, ALIGN_CENTER);
      closeButton = new Button_0(new Controller$4$1(minConfigAlert));
      $add_5(dialogContents, closeButton);
      $setCellHorizontalAlignment_0(dialogContents, closeButton, ALIGN_RIGHT);
      $center(minConfigAlert);
      !minConfigAlert.resizeHandlerRegistration && (minConfigAlert.resizeHandlerRegistration = addResizeHandler(new DialogBox$1(minConfigAlert)));
      $show(minConfigAlert);
      $play($getMediaElement(this.val$minConfigSound10));
    }
  }
   else {
    $play($getMediaElement(this.val$errorSound11));
  }
  $getSelectElement(this.val$modulesListBox12).options.length = 0;
  for (m$iterator = new AbstractList$IteratorImpl(getModuleList()); m$iterator.i < m$iterator.this$01_0.size_1();) {
    m = (checkCriticalElement(m$iterator.i < m$iterator.this$01_0.size_1()) , dynamicCast(m$iterator.this$01_0.get_0(m$iterator.last = m$iterator.i++), 21));
    $insertItem(this.val$modulesListBox12, 'Module #' + m.id_0);
  }
}
;
var Lmhcs_client_Controller$4_2_classLit = createForClass('mhcs.client', 'Controller/4', 158);
function Controller$4$1(val$minConfigAlert){
  this.val$minConfigAlert2 = val$minConfigAlert;
}

defineClass(159, 1, $intern_24, Controller$4$1);
_.onClick = function onClick_4(event_0){
  $hide_0(this.val$minConfigAlert2, false);
}
;
var Lmhcs_client_Controller$4$1_2_classLit = createForClass('mhcs.client', 'Controller/4/1', 159);
function Controller$5(val$modulesListBox, val$modulesEastId, val$modulesEastType, val$modulesEastCondition, val$modulesEastOrientation, val$xTextBox, val$yTextBox){
  this.val$modulesListBox1 = val$modulesListBox;
  this.val$modulesEastId2 = val$modulesEastId;
  this.val$modulesEastType3 = val$modulesEastType;
  this.val$modulesEastCondition4 = val$modulesEastCondition;
  this.val$modulesEastOrientation5 = val$modulesEastOrientation;
  this.val$xTextBox6 = val$xTextBox;
  this.val$yTextBox7 = val$yTextBox;
}

defineClass(160, 1, $intern_28, Controller$5);
_.onChange = function onChange(event_0){
  var conditionStrings, m, m$iterator, module, moduleString;
  moduleString = $getItemText(this.val$modulesListBox1, $getSelectElement(this.val$modulesListBox1).selectedIndex);
  moduleString = __substr(moduleString, 8, moduleString.length - 8);
  module = null;
  for (m$iterator = new AbstractList$IteratorImpl(getModuleList()); m$iterator.i < m$iterator.this$01_0.size_1();) {
    m = (checkCriticalElement(m$iterator.i < m$iterator.this$01_0.size_1()) , dynamicCast(m$iterator.this$01_0.get_0(m$iterator.last = m$iterator.i++), 21));
    m.id_0 == __parseAndValidateInt(moduleString) && (module = m);
  }
  if (module) {
    $setValue_1(this.val$modulesEastId2, '' + module.id_0);
    $setSelectedIndex_0(this.val$modulesEastType3, $indexOf_0(new Arrays$ArrayList(($clinit_Module() , moduleStrings_0)), $toUserString_0(module.type_0)));
    conditionStrings = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 4, ['Usable', 'Damaged', 'Unusable']);
    $setSelectedIndex_0(this.val$modulesEastCondition4, $indexOf_0(new Arrays$ArrayList(conditionStrings), $toUserString(module.status_0)));
    $setSelectedIndex_0(this.val$modulesEastOrientation5, module.orientation);
    $setValue_1(this.val$xTextBox6, '' + module.coordinates.x_0);
    $setValue_1(this.val$yTextBox7, '' + module.coordinates.y_0);
  }
}
;
var Lmhcs_client_Controller$5_2_classLit = createForClass('mhcs.client', 'Controller/5', 160);
function Controller$6(val$passwordEntry, val$tabPanel, val$errorSound){
  this.val$passwordEntry1 = val$passwordEntry;
  this.val$tabPanel2 = val$tabPanel;
  this.val$height3 = '140px';
  this.val$width4 = '150px';
  this.val$errorSound5 = val$errorSound;
}

defineClass(161, 1, $intern_24, Controller$6);
_.onClick = function onClick_5(event_0){
  var closeButton, details, dialogBox, dialogContents, image;
  if ($equals($getPropertyString($getElement(this.val$passwordEntry1), 'value'), 'guest')) {
    $clear(get_0());
    $add_4(get_0(), this.val$tabPanel2);
  }
   else {
    dialogBox = new DialogBox;
    $setText_0(dialogBox.caption, 'Login Error');
    dialogContents = new VerticalPanel;
    $setPropertyInt(dialogContents.table, 'cellSpacing', 4);
    $setWidget(dialogBox.decPanel, dialogContents);
    $maybeUpdateSize(dialogBox);
    details = new HTML_0('You have entered an incorrect username and/or password.');
    $add_5(dialogContents, details);
    $setCellHorizontalAlignment_0(dialogContents, details, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
    image = new Image_1('images/error');
    $setHeight(image, this.val$height3);
    $setWidth(image, this.val$width4);
    $add_5(dialogContents, image);
    $setCellHorizontalAlignment_0(dialogContents, image, ALIGN_CENTER);
    closeButton = new Button_0(new Controller$6$1(dialogBox));
    $add_5(dialogContents, closeButton);
    $setCellHorizontalAlignment_0(dialogContents, closeButton, ALIGN_RIGHT);
    $center(dialogBox);
    !dialogBox.resizeHandlerRegistration && (dialogBox.resizeHandlerRegistration = addResizeHandler(new DialogBox$1(dialogBox)));
    $show(dialogBox);
    $play($getMediaElement(this.val$errorSound5));
  }
}
;
var Lmhcs_client_Controller$6_2_classLit = createForClass('mhcs.client', 'Controller/6', 161);
function Controller$6$1(val$dialogBox){
  this.val$dialogBox2 = val$dialogBox;
}

defineClass(162, 1, $intern_24, Controller$6$1);
_.onClick = function onClick_6(event_0){
  $hide_0(this.val$dialogBox2, false);
}
;
var Lmhcs_client_Controller$6$1_2_classLit = createForClass('mhcs.client', 'Controller/6/1', 162);
function Controller$7(val$login){
  this.val$login1 = val$login;
}

defineClass(163, 1, $intern_24, Controller$7);
_.onClick = function onClick_7(event_0){
  $clear(get_0());
  $add_4(get_0(), this.val$login1);
}
;
var Lmhcs_client_Controller$7_2_classLit = createForClass('mhcs.client', 'Controller/7', 163);
function Controller$8(val$lb){
  this.val$lb1 = val$lb;
}

defineClass(164, 1, $intern_28, Controller$8);
_.onChange = function onChange_0(event_0){
  var testNum;
  testNum = $getSelectElement(this.val$lb1).selectedIndex;
  testNum != 0 && TestCaseChoice(testNum);
}
;
var Lmhcs_client_Controller$8_2_classLit = createForClass('mhcs.client', 'Controller/8', 164);
function Map_0(){
  var col, row;
  this.gRow = 50;
  this.gCol = 100;
  this.grid = new Grid(this.gRow, this.gCol);
  $setStyleName(this.grid, 'background');
  $setPropertyInt(this.grid.tableElem, 'cellSpacing', 0);
  $setPropertyInt(this.grid.tableElem, 'cellPadding', 0);
  for (row = 0; row < this.gRow; ++row) {
    for (col = 0; col < this.gCol; ++col) {
      $addStyleName(this.grid.cellFormatter, row, col, 'tableCell');
      $addStyleName(this.grid.cellFormatter, row, col, 'td');
    }
  }
}

defineClass(182, 1, {}, Map_0);
_.gCol = 0;
_.gRow = 0;
var Lmhcs_client_Map_2_classLit = createForClass('mhcs.client', 'Map', 182);
function $clinit_Module(){
  $clinit_Module = emptyMethod;
  moduleStrings_0 = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 4, ['Air Lock', 'Plain', 'Dormitory', 'Sanitation', 'Food & Water', 'Gym & Relaxation', 'Canteen', 'Power', 'Control', 'Medical']);
}

function $setCoordinates(this$static, landedCoordinates){
  this$static.coordinates = landedCoordinates;
}

function $setId_0(this$static, id_0){
  this$static.id_0 = id_0;
}

function $setInUse(this$static, inUse){
  this$static.inUse = inUse;
}

function $setOrientation(this$static, orientation){
  this$static.orientation = orientation;
}

function $setStatus(this$static, status_0){
  this$static.status_0 = status_0;
}

function $setType(this$static, type_0){
  this$static.type_0 = type_0;
}

function $toString_3(this$static){
  var storeString;
  storeString = '';
  storeString += $toString_0(this$static.type_0) + ',';
  storeString += '' + this$static.id_0 + ',';
  storeString += $toString_4(this$static.coordinates) + ',';
  storeString += $toString_0(this$static.status_0) + ',';
  storeString += '' + this$static.orientation + ',';
  this$static.inUse?(storeString += 'true'):(storeString += 'false');
  return storeString;
}

function Module(){
  $clinit_Module();
  this.inUse = false;
  this.type_0 = null;
  this.id_0 = 0;
  this.coordinates = null;
  this.status_0 = null;
  this.orientation = 0;
}

function Module_0(strModuleString){
  $clinit_Module();
  var moduleParts;
  moduleParts = $split(strModuleString, ',', 0);
  $setType(this, ($clinit_ModuleType() , $equals(moduleParts[0], 'AIRLOCK')?AIRLOCK:$equals(moduleParts[0], 'FOODWATERSTORAGE')?FOODWATERSTORAGE:$equals(moduleParts[0], 'POWER')?POWER:$equals(moduleParts[0], 'CONTROL')?CONTROL:$equals(moduleParts[0], 'CANTEEN')?CANTEEN:$equals(moduleParts[0], 'PLAIN')?PLAIN:$equals(moduleParts[0], 'DORMITORY')?DORMITORY:$equals(moduleParts[0], 'SANITATION')?SANITATION:$equals(moduleParts[0], 'GYMRELAXATION')?GYMRELAXATION:$equals(moduleParts[0], 'MEDICAL')?MEDICAL:null));
  $setId_0(this, __parseAndValidateInt(moduleParts[1]));
  $setCoordinates(this, new Point_0(moduleParts[2]));
  $setStatus(this, ($clinit_ModuleStatus() , $equals(moduleParts[3], 'USABLE')?USABLE:$equals(moduleParts[3], 'USABLEAFTERREPAIR')?USABLEAFTERREPAIR:$equals(moduleParts[3], 'BEYONDREPAIR')?BEYONDREPAIR:null));
  $setOrientation(this, __parseAndValidateInt(moduleParts[4]));
  $setInUse(this, $equals(moduleParts[4], 'true'));
}

function Module_1(type_0, id_0, coordinates, status_0, orientation, inUse){
  $clinit_Module();
  this.type_0 = type_0;
  this.id_0 = id_0;
  this.coordinates = coordinates;
  this.status_0 = status_0;
  this.orientation = orientation;
  this.inUse = inUse;
}

defineClass(21, 1, {21:1}, Module, Module_0, Module_1);
_.toString$ = function toString_24(){
  return $toString_3(this);
}
;
_.id_0 = 0;
_.inUse = false;
_.orientation = 0;
var moduleStrings_0;
var Lmhcs_client_Module_2_classLit = createForClass('mhcs.client', 'Module', 21);
function $clinit_ModuleStatus(){
  $clinit_ModuleStatus = emptyMethod;
  USABLE = new ModuleStatus('USABLE', 0);
  USABLEAFTERREPAIR = new ModuleStatus('USABLEAFTERREPAIR', 1);
  BEYONDREPAIR = new ModuleStatus('BEYONDREPAIR', 2);
}

function $toUserString(this$static){
  return this$static == USABLE?'Usable':this$static == USABLEAFTERREPAIR?'Damaged':this$static == BEYONDREPAIR?'Unusable':null;
}

function ModuleStatus(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function getStatusFromUserString(str){
  $clinit_ModuleStatus();
  return $equals(str, 'Usable')?USABLE:$equals(str, 'Damaged')?USABLEAFTERREPAIR:$equals(str, 'Unusable')?BEYONDREPAIR:null;
}

function values_8(){
  $clinit_ModuleStatus();
  return initValues(getClassLiteralForArray(Lmhcs_client_ModuleStatus_2_classLit, 1), $intern_3, 73, 0, [USABLE, USABLEAFTERREPAIR, BEYONDREPAIR]);
}

defineClass(73, 4, {3:1, 5:1, 4:1, 73:1}, ModuleStatus);
var BEYONDREPAIR, USABLE, USABLEAFTERREPAIR;
var Lmhcs_client_ModuleStatus_2_classLit = createForEnum('mhcs.client', 'ModuleStatus', 73, values_8);
function $clinit_ModuleType(){
  $clinit_ModuleType = emptyMethod;
  AIRLOCK = new ModuleType('AIRLOCK', 0);
  FOODWATERSTORAGE = new ModuleType('FOODWATERSTORAGE', 1);
  POWER = new ModuleType('POWER', 2);
  CONTROL = new ModuleType('CONTROL', 3);
  CANTEEN = new ModuleType('CANTEEN', 4);
  PLAIN = new ModuleType('PLAIN', 5);
  DORMITORY = new ModuleType('DORMITORY', 6);
  SANITATION = new ModuleType('SANITATION', 7);
  GYMRELAXATION = new ModuleType('GYMRELAXATION', 8);
  MEDICAL = new ModuleType('MEDICAL', 9);
}

function $toUserString_0(this$static){
  return this$static == AIRLOCK?'Air Lock':this$static == FOODWATERSTORAGE?'Food & Water':this$static == POWER?'Power':this$static == CONTROL?'Control':this$static == CANTEEN?'Canteen':this$static == PLAIN?'Plain':this$static == DORMITORY?'Dormitory':this$static == SANITATION?'Sanitation':this$static == GYMRELAXATION?'Gym & Relaxation':this$static == MEDICAL?'Medical':null;
}

function ModuleType(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function getTypeFromUserString(str){
  $clinit_ModuleType();
  return $equals(str, 'Air Lock')?AIRLOCK:$equals(str, 'Food & Water')?FOODWATERSTORAGE:$equals(str, 'Power')?POWER:$equals(str, 'Control')?CONTROL:$equals(str, 'Canteen')?CANTEEN:$equals(str, 'Plain')?PLAIN:$equals(str, 'Dormitory')?DORMITORY:$equals(str, 'Sanitation')?SANITATION:$equals(str, 'Gym & Relaxation')?GYMRELAXATION:$equals(str, 'Medical')?MEDICAL:null;
}

function values_9(){
  $clinit_ModuleType();
  return initValues(getClassLiteralForArray(Lmhcs_client_ModuleType_2_classLit, 1), $intern_3, 31, 0, [AIRLOCK, FOODWATERSTORAGE, POWER, CONTROL, CANTEEN, PLAIN, DORMITORY, SANITATION, GYMRELAXATION, MEDICAL]);
}

defineClass(31, 4, {3:1, 5:1, 4:1, 31:1}, ModuleType);
var AIRLOCK, CANTEEN, CONTROL, DORMITORY, FOODWATERSTORAGE, GYMRELAXATION, MEDICAL, PLAIN, POWER, SANITATION;
var Lmhcs_client_ModuleType_2_classLit = createForEnum('mhcs.client', 'ModuleType', 31, values_9);
function $toString_4(this$static){
  return '' + this$static.x_0 + ' ' + ('' + this$static.y_0);
}

function Point(xp, yp){
  this.x_0 = xp;
  this.y_0 = yp;
}

function Point_0(str){
  this.x_0 = __parseAndValidateInt($split(str, ' ', 0)[0]);
  this.y_0 = __parseAndValidateInt($split(str, ' ', 0)[1]);
}

defineClass(86, 1, {}, Point, Point_0);
_.toString$ = function toString_25(){
  return $toString_4(this);
}
;
_.x_0 = 0;
_.y_0 = 0;
var Lmhcs_client_Point_2_classLit = createForClass('mhcs.client', 'Point', 86);
function $clinit_Variables(){
  $clinit_Variables = emptyMethod;
  new Map_0;
  tabPanel_0 = new TabLayoutPanel(($clinit_Style$Unit() , EM));
  l_0 = new DockPanel;
  m_0 = new DockPanel;
  c_0 = new DockPanel;
  s_0 = new DockPanel;
  w_0 = new FlowPanel;
  modulesWestH = new HorizontalPanel;
  moduleCoordinates = new HorizontalPanel;
  configHpanel = new HorizontalPanel;
  new HorizontalPanel;
  passEnabled = new HorizontalPanel;
  new HorizontalPanel;
  currentPass = new HorizontalPanel;
  newPass = new HorizontalPanel;
  confirmPass = new HorizontalPanel;
  new HorizontalPanel;
  loginVpanel = new VerticalPanel;
  modulesWest = new VerticalPanel;
  modulesCenter = new VerticalPanel;
  modulesSouth = new VerticalPanel;
  modulesEast = new VerticalPanel;
  modulesX = new VerticalPanel;
  modulesY = new VerticalPanel;
  configVpanel = new VerticalPanel;
  settingsPassVpanel = new VerticalPanel;
  new VerticalPanel;
  tenDayVpanel = new VerticalPanel;
  minConfigReached = ($clinit_Boolean() , $clinit_Boolean() , FALSE_0);
  loginButton_0 = new Button('Login');
  mAddButton = new Button('Add');
  mRemoveButton = new Button('Remove');
  mSaveButton = new Button('Save');
  roverPath = new Button('Rover Path');
  removeConfig = new Button('Remove');
  buildConfig = new Button('Build Configuration');
  new Button('Add User');
  new Button('Remove User');
  changePassword = new Button('Change Password');
  savePassword = new Button('Save Password');
  dateTimeButton = new Button('Date-Time');
  dateTimeSaveButton = new Button('Save');
  logoutButton_0 = new Button('Logout');
  cbAirLock = new CheckBox_1('Air Lock');
  cbPlain = new CheckBox_1('Plain');
  cbDorm = new CheckBox_1('Dormitory');
  cbSanitation = new CheckBox_1('Sanitation');
  cbFoodAndWater = new CheckBox_1('Food & Water');
  cbGymAndRelax = new CheckBox_1('Gym & Relaxation');
  cbCanteen = new CheckBox_1('Canteen');
  cbPower = new CheckBox_1('Power');
  cbControl = new CheckBox_1('Control');
  cbMedical = new CheckBox_1('Medical');
  cbPassEnable = new CheckBox;
  htmlSouth = new HTML_0('Naples Spring 2015');
  htmlUsername = new HTML_0('Username:');
  htmlPassword = new HTML_0('Password: ');
  htmlModules = new HTML_0('Modules');
  htmlModuleDetails = new HTML_0('Module Details');
  htmlModuleRequirements = new HTML_0('Module Requirements');
  htmlModuleID = new HTML_0('ID Number');
  htmlModuleType = new HTML_0('Type');
  htmlModuleCondition = new HTML_0('Condition');
  htmlModuleOrientation = new HTML_0('Orientation');
  htmlX = new HTML_0('X-Coordinate');
  htmlY = new HTML_0('Y-Coordinate');
  htmlConfigs = new HTML_0('Configurations');
  htmlMap = new HTML_0('Map');
  htmlSettings = new HTML_0('Settings');
  htmlPassEnable = new HTML_0('Enable Password');
  new HTML_0('Change Password');
  htmlCurrPass = new HTML_0('Current Password');
  htmlNewPass = new HTML_0('New Password');
  htmlConfirmPass = new HTML_0('Confirm Password');
  htmlTenDay = new HTML_0('Click the button to automatically enter the date and time of the most recent rover something changed.<br>Or enter the date and time manually (mm/dd/yyyy hh:mm:ss).');
  htmlTimeSince = new HTML_0('Last changed: ');
  htmlFiller = new HTML_0('<br><br><br>');
  htmlTestCases = new HTML_0('<b><u>Test Cases.<\/u><\/b> <br> Select a test case to run.');
  htmlWeather = new HTML_0('Place holder for the weather');
  mType = new ListBox;
  mCondition = new ListBox;
  mOrientation = new ListBox;
  mListBox = new ListBox;
  cListBox = new ListBox;
  new ListBox;
  testCases = new ListBox;
  ptbPassword = new PasswordTextBox;
  ptbCurrentPassword = new PasswordTextBox;
  ptbNewPassword = new PasswordTextBox;
  ptbConfirmPassword = new PasswordTextBox;
  radAll = new RadioButton('Select All');
  radNone = new RadioButton('Deselect All');
  moduleDetails = new TextArea_0;
  moduleRequirements = new TextArea_0;
  mID = new TextBox;
  mX = new TextBox;
  mY = new TextBox;
  tbUsername = new TextBox;
  tenDay = new TextBox;
  timeSince = new TextBox;
}

function errorSound(){
  $clinit_Variables();
  var error;
  error = createIfSupported();
  $setSrc(($clinit_DOM() , error.element), 'sounds/error');
  return error;
}

function rbDeselectAll(){
  $clinit_Variables();
  $setText(radNone, 'Deselect All');
  $replaceInputElement(radNone, ($clinit_DOM() , $createInputRadioElement($doc, 'MapModules')));
  if ($getValue(radNone).value_0) {
    $setValue_0(cbAirLock, ($clinit_Boolean() , $clinit_Boolean() , FALSE_0));
    $setValue_0(cbPlain, (null , FALSE_0));
    $setValue_0(cbDorm, (null , FALSE_0));
    $setValue_0(cbSanitation, (null , FALSE_0));
    $setValue_0(cbFoodAndWater, (null , FALSE_0));
    $setValue_0(cbGymAndRelax, (null , FALSE_0));
    $setValue_0(cbCanteen, (null , FALSE_0));
    $setValue_0(cbPower, (null , FALSE_0));
    $setValue_0(cbControl, (null , FALSE_0));
    $setValue_0(cbMedical, (null , FALSE_0));
  }
  return radNone;
}

function rbSelectAll(){
  $clinit_Variables();
  $setText(radAll, 'Select All');
  $replaceInputElement(radAll, ($clinit_DOM() , $createInputRadioElement($doc, 'MapModules')));
  if ($getValue(radAll).value_0) {
    $setValue_0(cbAirLock, ($clinit_Boolean() , $clinit_Boolean() , TRUE_0));
    $setValue_0(cbPlain, (null , TRUE_0));
    $setValue_0(cbDorm, (null , TRUE_0));
    $setValue_0(cbSanitation, (null , TRUE_0));
    $setValue_0(cbFoodAndWater, (null , TRUE_0));
    $setValue_0(cbGymAndRelax, (null , TRUE_0));
    $setValue_0(cbCanteen, (null , TRUE_0));
    $setValue_0(cbPower, (null , TRUE_0));
    $setValue_0(cbControl, (null , TRUE_0));
    $setValue_0(cbMedical, (null , TRUE_0));
  }
  return radAll;
}

var buildConfig, c_0, cListBox, cbAirLock, cbCanteen, cbControl, cbDorm, cbFoodAndWater, cbGymAndRelax, cbMedical, cbPassEnable, cbPlain, cbPower, cbSanitation, changePassword, configHpanel, configVpanel, confirmPass, currentPass, dateTimeButton, dateTimeSaveButton, htmlConfigs, htmlConfirmPass, htmlCurrPass, htmlFiller, htmlMap, htmlModuleCondition, htmlModuleDetails, htmlModuleID, htmlModuleOrientation, htmlModuleRequirements, htmlModuleType, htmlModules, htmlNewPass, htmlPassEnable, htmlPassword, htmlSettings, htmlSouth, htmlTenDay, htmlTestCases, htmlTimeSince, htmlUsername, htmlWeather, htmlX, htmlY, l_0, loginButton_0, loginVpanel, logoutButton_0, m_0, mAddButton, mCondition, mID, mListBox, mOrientation, mRemoveButton, mSaveButton, mType, mX, mY, minConfigReached, moduleCoordinates, moduleDetails, moduleRequirements, modulesCenter, modulesEast, modulesSouth, modulesWest, modulesWestH, modulesX, modulesY, newPass, passEnabled, ptbConfirmPassword, ptbCurrentPassword, ptbNewPassword, ptbPassword, radAll, radNone, removeConfig, roverPath, s_0, savePassword, settingsPassVpanel, tabPanel_0, tbUsername, tenDay, tenDayVpanel, testCases, timeSince, w_0;
function $onModuleLoad_0(){
  var configDock, i, login, loginButton, logoutButton, m, m$iterator, modulesDock, settingsDock, tabPanel, keepCalm, success, minConfig, moduleImage, map_0, weather;
  tabPanel = ($clinit_Variables() , tabPanel_0.deckPanel.animationDuration = 1000 , $getElement(tabPanel_0).style['marginBottom'] = ($clinit_Style$Unit() , '10.0px') , undefined , $clinit_Variables() , tabPanel_0);
  login = ($setSpacing(l_0, 5) , $setHorizontalAlignment(l_0, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setVerticalAlignment(l_0, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , $setPropertyString(l_0.table, 'border', '2') , $setSize_0(l_0) , $add_1(l_0, htmlSouth, ($clinit_DockPanel() , SOUTH)) , $add_1(l_0, ($setSpacing(loginVpanel, 5) , $setHorizontalAlignment_0(loginVpanel, ALIGN_CENTER) , $add_5(loginVpanel, (keepCalm = new Image_1('images/keepCalm') , ($clinit_DOM() , keepCalm.element).style['height'] = '300px' , keepCalm.element.style['width'] = '300px' , keepCalm)) , $add_5(loginVpanel, htmlUsername) , $add_5(loginVpanel, tbUsername) , $add_5(loginVpanel, htmlPassword) , $add_5(loginVpanel, ptbPassword) , $add_5(loginVpanel, loginButton_0) , loginVpanel), CENTER_0) , l_0);
  login.element.style['width'] = '1500px';
  login.element.style['height'] = '600px';
  loginButton = loginButton_0;
  $addDomHandler(loginButton, ($clinit_Controller() , new Controller$6(ptbPassword, tabPanel, errorSound())), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
  logoutButton = ($setHeight(logoutButton_0, '50px') , $setWidth(logoutButton_0, '300px') , logoutButton_0);
  $addDomHandler(logoutButton, new Controller$7(login), (null , TYPE_0));
  $getSelectElement(($setVisibleItemCount(mListBox, 10) , $setHeight(mListBox, '600px') , $setWidth(mListBox, '300px') , mListBox)).options.length = 0;
  for (m$iterator = new AbstractList$IteratorImpl(getModuleList()); m$iterator.i < m$iterator.this$01_0.size_1();) {
    m = (checkCriticalElement(m$iterator.i < m$iterator.this$01_0.size_1()) , dynamicCast(m$iterator.this$01_0.get_0(m$iterator.last = m$iterator.i++), 21));
    $insertItem(($setVisibleItemCount(mListBox, 10) , $setHeight(mListBox, '600px') , $setWidth(mListBox, '300px') , mListBox), 'Module #' + m.id_0);
  }
  $addDomHandler(($setVisibleItemCount(mListBox, 10) , $setHeight(mListBox, '600px') , $setWidth(mListBox, '300px') , mListBox), new Controller$5(($setVisibleItemCount(mListBox, 10) , $setHeight(mListBox, '600px') , $setWidth(mListBox, '300px') , mListBox), mID, ($setVisibleItemCount(mType, 10) , $setEnabled(mType, false) , $setWidth(mType, '300px') , mType), (populateCondidition(mCondition) , $setVisibleItemCount(mCondition, 3) , $setWidth(mCondition, '300px') , mCondition), (populateOrientation(mOrientation) , $setVisibleItemCount(mOrientation, 3) , $setWidth(mOrientation, '300px') , mOrientation), ($setWidth(mX, '140px') , mX), ($setWidth(mY, '140px') , mY)), ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE));
  for (i = 0; i < ($clinit_Module() , moduleStrings_0).length; i++) {
    $insertItem(($setVisibleItemCount(mType, 10) , $setEnabled(mType, false) , $setWidth(mType, '300px') , mType), moduleStrings_0[i]);
  }
  setType(mID, ($setVisibleItemCount(mType, 10) , $setEnabled(mType, false) , $setWidth(mType, '300px') , mType));
  modulesDock = ($setSpacing(m_0, 5) , $setHorizontalAlignment(m_0, ALIGN_CENTER) , $setPropertyString(m_0.table, 'border', '2') , $setSize_0(m_0) , $add_1(m_0, htmlModules, NORTH) , $add_1(m_0, htmlSouth, SOUTH) , $add_1(m_0, ($add_5(modulesEast, htmlModuleID) , $add_5(modulesEast, mID) , $add_5(modulesEast, htmlModuleType) , $add_5(modulesEast, ($setVisibleItemCount(mType, 10) , $setEnabled(mType, false) , $setWidth(mType, '300px') , mType)) , $add_5(modulesEast, htmlModuleCondition) , $add_5(modulesEast, (populateCondidition(mCondition) , $setVisibleItemCount(mCondition, 3) , $setWidth(mCondition, '300px') , mCondition)) , $add_5(modulesEast, htmlModuleOrientation) , $add_5(modulesEast, (populateOrientation(mOrientation) , $setVisibleItemCount(mOrientation, 3) , $setWidth(mOrientation, '300px') , mOrientation)) , $add_5(modulesEast, ($add_3(moduleCoordinates, ($add_5(modulesX, htmlX) , $add_5(modulesX, ($setWidth(mX, '140px') , mX)) , modulesX)) , $add_3(moduleCoordinates, ($add_5(modulesY, htmlY) , $add_5(modulesY, ($setWidth(mY, '140px') , mY)) , modulesY)) , moduleCoordinates)) , $add_5(modulesEast, ($setHeight(mSaveButton, '50px') , $setWidth(mSaveButton, '300px') , $addDomHandler(mSaveButton, new Controller$4(($setVisibleItemCount(mType, 10) , $setEnabled(mType, false) , $setWidth(mType, '300px') , mType), mID, ($setWidth(mX, '140px') , mX), ($setWidth(mY, '140px') , mY), (populateCondidition(mCondition) , $setVisibleItemCount(mCondition, 3) , $setWidth(mCondition, '300px') , mCondition), (populateOrientation(mOrientation) , $setVisibleItemCount(mOrientation, 3) , $setWidth(mOrientation, '300px') , mOrientation), (success = createIfSupported() , $setSrc(success.element, 'sounds/success') , success), (minConfig = createIfSupported() , $setSrc(minConfig.element, 'sounds/minConfig') , minConfig), errorSound(), ($setVisibleItemCount(mListBox, 10) , $setHeight(mListBox, '600px') , $setWidth(mListBox, '300px') , mListBox)), (null , TYPE_0)) , mSaveButton)) , $setSpacing(modulesEast, 12) , modulesEast), EAST) , $add_1(m_0, ($add_5(modulesWest, ($setVisibleItemCount(mListBox, 10) , $setHeight(mListBox, '600px') , $setWidth(mListBox, '300px') , mListBox)) , $add_5(modulesWest, ($add_3(modulesWestH, ($setHeight(mAddButton, '50px') , $setWidth(mAddButton, '150px') , $addDomHandler(mAddButton, new Controller$2, (null , TYPE_0)) , mAddButton)) , $add_3(modulesWestH, ($setHeight(mRemoveButton, '50px') , $setWidth(mRemoveButton, '150px') , $addDomHandler(mRemoveButton, new Controller$3(($setVisibleItemCount(mListBox, 10) , $setHeight(mListBox, '600px') , $setWidth(mListBox, '300px') , mListBox)), (null , TYPE_0)) , mRemoveButton)) , modulesWestH)) , modulesWest), WEST) , $add_1(m_0, (moduleImage = new Image_1('images/image') , moduleImage.element.style['height'] = '200px' , moduleImage.element.style['width'] = '250px' , moduleImage), NORTH) , $add_1(m_0, ($add_5(modulesSouth, htmlModuleRequirements) , $add_5(modulesSouth, ($setText_1(moduleRequirements) , $setReadOnly(moduleRequirements) , $setHeight(moduleRequirements, '175px') , $setWidth(moduleRequirements, '800px') , moduleRequirements)) , modulesSouth), SOUTH) , $add_1(m_0, ($add_5(modulesCenter, htmlModuleDetails) , $add_5(modulesCenter, ($setHeight(moduleDetails, '175px') , $setWidth(moduleDetails, '800px') , moduleDetails)) , modulesCenter), CENTER_0) , m_0);
  configDock = ($setSpacing(c_0, 5) , $setHorizontalAlignment(c_0, ALIGN_CENTER) , $setPropertyString(c_0.table, 'border', '2') , $setSize_0(c_0) , $add_1(c_0, htmlConfigs, NORTH) , $add_1(c_0, htmlSouth, SOUTH) , $add_1(c_0, ($add_5(configVpanel, cbAirLock) , $add_5(configVpanel, cbPlain) , $add_5(configVpanel, cbDorm) , $add_5(configVpanel, cbSanitation) , $add_5(configVpanel, cbFoodAndWater) , $add_5(configVpanel, cbGymAndRelax) , $add_5(configVpanel, cbCanteen) , $add_5(configVpanel, cbPower) , $add_5(configVpanel, cbControl) , $add_5(configVpanel, cbMedical) , $add_5(configVpanel, rbSelectAll()) , $add_5(configVpanel, rbDeselectAll()) , $setHeight(configVpanel, '600px') , $setWidth(configVpanel, '150px') , $setVerticalAlignment_0(configVpanel, ALIGN_MIDDLE) , configVpanel), EAST) , $add_1(c_0, ($setVisibleItemCount(cListBox, 10) , $setHeight(cListBox, '650px') , $setWidth(cListBox, '300px') , cListBox), WEST) , $add_1(c_0, (map_0 = new Image_1('images/marsMap') , map_0.element.style['height'] = '560px' , map_0.element.style['width'] = '1000px' , map_0), CENTER_0) , $add_1(c_0, htmlMap, NORTH) , $add_1(c_0, ($add_3(configHpanel, ($setHeight(roverPath, '50px') , $setWidth(roverPath, '340px') , roverPath)) , $add_3(configHpanel, ($setHeight(removeConfig, '50px') , $setWidth(removeConfig, '340px') , removeConfig)) , $add_3(configHpanel, ($setHeight(buildConfig, '50px') , $setWidth(buildConfig, '340px') , buildConfig)) , configHpanel), SOUTH) , c_0);
  settingsDock = ($setSpacing(s_0, 5) , $setHorizontalAlignment(s_0, ALIGN_CENTER) , $setPropertyString(s_0.table, 'border', '2') , $setSize_0(s_0) , $add_1(s_0, ($setSpacing(tenDayVpanel, 10) , $add_5(tenDayVpanel, htmlTenDay) , $add_5(tenDayVpanel, ($setHeight(dateTimeButton, '35px') , $setWidth(dateTimeButton, '100px') , dateTimeButton)) , $add_5(tenDayVpanel, ($setWidth(tenDay, '140px') , tenDay)) , $add_5(tenDayVpanel, ($setHeight(dateTimeSaveButton, '35px') , $setWidth(dateTimeSaveButton, '100px') , dateTimeSaveButton)) , $add_5(tenDayVpanel, htmlTimeSince) , $add_5(tenDayVpanel, ($setEnabled(timeSince, false) , timeSince)) , $add_5(tenDayVpanel, htmlFiller) , $add_5(tenDayVpanel, htmlFiller) , $add_5(tenDayVpanel, htmlTestCases) , $add_5(tenDayVpanel, ($addItem(testCases, 'No Test Case Selected') , $addItem(testCases, 'Test Case 1') , $addItem(testCases, 'Test Case 2') , $addItem(testCases, 'Test Case 3') , $addItem(testCases, 'Test Case 4') , $addItem(testCases, 'Test Case 5') , $addItem(testCases, 'Test Case 6') , $addItem(testCases, 'Test Case 7') , $addItem(testCases, 'Test Case 8') , $addItem(testCases, 'Test Case 9') , $addItem(testCases, 'Test Case 10') , $setVisibleItemCount(testCases, 1) , $setWidth(testCases, '300px') , $addDomHandler(testCases, new Controller$8(testCases), (null , TYPE)) , testCases)) , $add_5(tenDayVpanel, htmlFiller) , $add_5(tenDayVpanel, ($setHeight(logoutButton_0, '50px') , $setWidth(logoutButton_0, '300px') , logoutButton_0)) , tenDayVpanel), CENTER_0) , $add_1(s_0, htmlSettings, NORTH) , $add_1(s_0, ($add_5(settingsPassVpanel, ($add_3(passEnabled, cbPassEnable) , $add_3(passEnabled, htmlPassEnable) , passEnabled)) , $add_5(settingsPassVpanel, changePassword) , $add_5(settingsPassVpanel, ($setHeight(htmlCurrPass, '20px') , $add_3(currentPass, ptbCurrentPassword) , $add_3(currentPass, htmlCurrPass) , $setSpacing(currentPass, 10) , currentPass)) , $add_5(settingsPassVpanel, ($setHeight(htmlNewPass, '20px') , $add_3(newPass, ptbNewPassword) , $add_3(newPass, htmlNewPass) , $setSpacing(newPass, 10) , newPass)) , $add_5(settingsPassVpanel, ($setHeight(htmlConfirmPass, '20px') , $add_3(confirmPass, ptbConfirmPassword) , $add_3(confirmPass, htmlConfirmPass) , $setSpacing(confirmPass, 10) , confirmPass)) , $add_5(settingsPassVpanel, ($setHeight(savePassword, '35px') , $setWidth(savePassword, '140px') , savePassword)) , $setSpacing(settingsPassVpanel, 10) , settingsPassVpanel), WEST) , $add_1(s_0, ($add_2(w_0, htmlWeather) , weather = new Weather , $requestData(weather, weather.strURL) , $add_2(w_0, new Label_0('Current temp: \t' + weather.strTemp + ' Celsius')) , $add_2(w_0, new Label_0('Current visibility: \t' + weather.strVisibility + ' km')) , w_0), EAST) , $add_1(s_0, htmlSouth, SOUTH) , s_0);
  $insert_5(tabPanel, modulesDock, 'Modules', tabPanel.deckPanel.children_0.size_0);
  $insert_5(tabPanel, configDock, 'Configurations', tabPanel.deckPanel.children_0.size_0);
  $insert_5(tabPanel, settingsDock, 'Settings', tabPanel.deckPanel.children_0.size_0);
  $add_4(get_0(), login);
}

function $requestData(this$static, url_0){
  var builder;
  builder = new RequestBuilder(($clinit_RequestBuilder() , GET), url_0);
  try {
    $sendRequest(builder, new Weather$1(this$static));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 44)) {
      alert_0("RequestException: Couldn't retrieve JSON");
    }
     else 
      throw unwrap($e0);
  }
}

function $update_0(this$static, rt){
  var jA, jB, jTry, temp, visibility;
  jA = ($clinit_JSONParser() , dynamicCast(parse_0(rt), 64));
  jTry = $get_0(jA, 'current_observation');
  jB = dynamicCast(parse_0(jTry.toString$()), 64);
  temp = $get_0(jB, 'temp_c');
  visibility = $get_0(jB, 'visibility_km');
  this$static.strTemp = temp.toString$();
  this$static.strVisibility = visibility.toString$();
}

function Weather(){
}

defineClass(264, 1, {}, Weather);
_.intHttpOk = 200;
_.strURL = 'http://api.wunderground.com/api/1e7eb561fe2a38df/conditions/q/CA/San_Francisco.json';
var Lmhcs_client_Weather_2_classLit = createForClass('mhcs.client', 'Weather', 264);
function Weather$1(this$0){
  this.this$01 = this$0;
}

defineClass(265, 1, {}, Weather$1);
_.onError = function onError(request, exception){
  alert_0("onError: Couldn't retrieve JSON");
}
;
_.onResponseReceived = function onResponseReceived(request, response){
  var rt;
  if ($getStatusCode(response) == this.this$01.intHttpOk) {
    rt = response.xmlHttpRequest.responseText;
    $update_0(this.this$01, rt);
  }
   else {
    alert_0("Couldn't retrieve JSON (" + $getStatusCode(response) + ')');
  }
}
;
var Lmhcs_client_Weather$1_2_classLit = createForClass('mhcs.client', 'Weather/1', 265);
function $loadConfigurations(this$static){
  var i, newConfig;
  if ($getItem(this$static.stockStore, 'intConfigCount') != null) {
    for (i = 0; i <= __parseAndValidateInt($getItem(this$static.stockStore, 'intConfigCount')); i++) {
      newConfig = new Configuration($getItem(this$static.stockStore, 'C' + ('' + i)));
      $add_8(this$static.configurationList, newConfig);
    }
  }
}

function $loadModules(this$static){
  var i, newModule;
  if ($getItem(this$static.stockStore, 'intModCount') != null) {
    for (i = 0; i < __parseAndValidateInt($getItem(this$static.stockStore, 'intModCount')); i++) {
      newModule = new Module_0($getItem(this$static.stockStore, '' + i));
      $add_8(this$static.moduleList, newModule);
    }
  }
}

function $loadSettings(this$static){
  this$static.stockStore = (!localStorage_0 && ($clinit_Storage$StorageSupportDetector() , localStorageSupported) && (localStorage_0 = new Storage_0) , localStorage_0);
  if (this$static.stockStore) {
    $getItem(this$static.stockStore, 'passwordflag') == 'true';
    $getItem(this$static.stockStore, 'password');
  }
}

function Load(){
  this.moduleList = new ArrayList;
  this.configurationList = new ArrayList;
  this.stockStore = (!localStorage_0 && ($clinit_Storage$StorageSupportDetector() , localStorageSupported) && (localStorage_0 = new Storage_0) , localStorage_0);
  $loadModules(this);
  $loadSettings(this);
  $loadConfigurations(this);
}

defineClass(225, 1, {}, Load);
_.stockStore = null;
var Lmhcs_storage_Load_2_classLit = createForClass('mhcs.storage', 'Load', 225);
function $clinit_Model(){
  $clinit_Model = emptyMethod;
  toLoad = new Load;
  toSave_0 = new Save;
  moduleList = toLoad.moduleList;
  configList = toLoad.configurationList;
}

function findListNumber(module){
  var compare, i;
  for (i = 0; i < moduleList.array.length; i++) {
    compare = dynamicCast($get_4(moduleList, i), 21);
    if (module.id_0 == compare.id_0) {
      return i;
    }
  }
  return -1;
}

function getModuleFromId(id_0){
  var m, m$iterator;
  for (m$iterator = new AbstractList$IteratorImpl(moduleList); m$iterator.i < m$iterator.this$01_0.size_1();) {
    m = (checkCriticalElement(m$iterator.i < m$iterator.this$01_0.size_1()) , dynamicCast(m$iterator.this$01_0.get_0(m$iterator.last = m$iterator.i++), 21));
    if (m.id_0 == id_0) {
      return new Module_0($toString_3(m));
    }
  }
  return null;
}

function getModuleList(){
  $clinit_Model();
  var moduleList1;
  moduleList1 = new ArrayList_0(moduleList);
  return new ArrayList_0(moduleList1);
}

function removeModuleFromId(id_0){
  $clinit_Model();
  var m;
  m = new Module_1(($clinit_ModuleType() , PLAIN), id_0, new Point(0, 0), ($clinit_ModuleStatus() , BEYONDREPAIR), 2, true);
  moduleList.remove_3(findListNumber(m));
  $removeAllModules(toSave_0);
  $saveModules(toSave_0, moduleList);
}

function saveModule(toSave){
  $clinit_Model();
  var m, m$iterator;
  for (m$iterator = new AbstractList$IteratorImpl(getModuleList()); m$iterator.i < m$iterator.this$01_0.size_1();) {
    m = (checkCriticalElement(m$iterator.i < m$iterator.this$01_0.size_1()) , dynamicCast(m$iterator.this$01_0.get_0(m$iterator.last = m$iterator.i++), 21));
    if (m.id_0 == toSave.id_0) {
      moduleList.remove_3(findListNumber(toSave));
      $removeAllModules(toSave_0);
      $saveModules(toSave_0, moduleList);
      $add_8(moduleList, toSave);
      $saveModules(toSave_0, moduleList);
      return !!getModuleFromId(toSave.id_0);
    }
  }
  $add_8(moduleList, new Module_0($toString_3(toSave)));
  $saveModules(toSave_0, moduleList);
  return !!getModuleFromId(toSave.id_0);
}

var configList, moduleList, toLoad, toSave_0;
function $removeAllConfigurations(this$static){
  var i;
  for (i = 0; i < __parseAndValidateInt($getItem(this$static.stockStore, 'intConfigCount')); i++) {
    $removeItem(this$static.stockStore, 'C' + ('' + i));
  }
  $setItem(this$static.stockStore, 'intConfigCount', '0');
}

function $removeAllModules(this$static){
  var i;
  for (i = 0; i < __parseAndValidateInt($getItem(this$static.stockStore, 'intModCount')); i++) {
    $removeItem(this$static.stockStore, 'C' + ('' + i));
  }
  $setItem(this$static.stockStore, 'intModCount', '0');
}

function $saveModules(this$static, toSave){
  var i;
  for (i = 0; i < toSave.array.length; i++) {
    $setItem(this$static.stockStore, '' + i, $toString_3((checkElementIndex(i, toSave.array.length) , dynamicCast(toSave.array[i], 21))));
  }
  $setItem(this$static.stockStore, 'intModCount', '' + toSave.array.length);
}

function Save(){
  this.stockStore = (!localStorage_0 && ($clinit_Storage$StorageSupportDetector() , localStorageSupported) && (localStorage_0 = new Storage_0) , localStorage_0);
  $getItem(this.stockStore, 'intModCount') != null && __parseAndValidateInt($getItem(this.stockStore, 'intModCount'));
}

defineClass(226, 1, {}, Save);
_.stockStore = null;
var Lmhcs_storage_Save_2_classLit = createForClass('mhcs.storage', 'Save', 226);
function TestCaseChoice(choice){
  var builder, url_0;
  url_0 = 'http://www.d.umn.edu/~mckeo044/Proxy.php?url=http://www.d.umn.edu/~abrooks/SomeTests.php?q=' + ('' + choice);
  url_0 = (throwIfNull('decodedURL', url_0) , encodeURI(url_0));
  builder = new RequestBuilder(($clinit_RequestBuilder() , GET), url_0);
  try {
    $sendRequest(builder, new TestCases$1);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 44)) {
      alert_0("RequestException: Couldn't retrieve JSON");
    }
     else 
      throw unwrap($e0);
  }
}

function update(rt){
  var code_0, coordinate, i, id_0, jArray, jNumber, jO, jString, modStatus, numTurns, status_0, tempModule, turns, type_0, x_0, xC, y_0, yC;
  $clinit_Model();
  moduleList.array = initDim(Ljava_lang_Object_2_classLit, $intern_3, 1, 0, 3, 1);
  configList.array = initDim(Ljava_lang_Object_2_classLit, $intern_3, 1, 0, 3, 1);
  $removeAllModules(toSave_0);
  $removeAllConfigurations(toSave_0);
  jArray = ($clinit_JSONParser() , dynamicCast(parse_0(rt), 87));
  for (i = 0; i < jArray.jsArray.length; ++i) {
    jO = dynamicCast($get(jArray, i), 64);
    jNumber = dynamicCast($get_0(jO, 'id'), 46);
    code_0 = jNumber.value_0;
    id_0 = round_int(code_0);
    jString = dynamicCast($get_0(jO, 'status'), 75);
    status_0 = jString.value_0;
    jNumber = dynamicCast($get_0(jO, 'turns'), 46);
    turns = jNumber.value_0;
    numTurns = round_int(turns);
    jNumber = dynamicCast($get_0(jO, 'X'), 46);
    x_0 = jNumber.value_0;
    xC = round_int(x_0);
    jNumber = dynamicCast($get_0(jO, 'Y'), 46);
    y_0 = jNumber.value_0;
    yC = round_int(y_0);
    coordinate = new Point(xC, yC);
    status_0 == 'undamaged'?(modStatus = ($clinit_ModuleStatus() , USABLE)):status_0 == 'damaged'?(modStatus = ($clinit_ModuleStatus() , BEYONDREPAIR)):(modStatus = ($clinit_ModuleStatus() , USABLEAFTERREPAIR));
    0 < code_0 && code_0 < 41?(type_0 = ($clinit_ModuleType() , PLAIN)):60 < code_0 && code_0 < 81?(type_0 = ($clinit_ModuleType() , DORMITORY)):90 < code_0 && code_0 < 101?(type_0 = ($clinit_ModuleType() , SANITATION)):110 < code_0 && code_0 < 121?(type_0 = ($clinit_ModuleType() , FOODWATERSTORAGE)):130 < code_0 && code_0 < 135?(type_0 = ($clinit_ModuleType() , GYMRELAXATION)):140 < code_0 && code_0 < 145?(type_0 = ($clinit_ModuleType() , CANTEEN)):150 < code_0 && code_0 < 155?(type_0 = ($clinit_ModuleType() , POWER)):160 < code_0 && code_0 < 165?(type_0 = ($clinit_ModuleType() , CONTROL)):170 < code_0 && code_0 < 175?(type_0 = ($clinit_ModuleType() , AIRLOCK)):180 < code_0 && code_0 < 185?(type_0 = ($clinit_ModuleType() , MEDICAL)):(type_0 = null);
    tempModule = new Module_1(type_0, id_0, coordinate, modStatus, numTurns, false);
    $add_8(moduleList, new Module_0($toString_3(tempModule)));
    $saveModules(toSave_0, moduleList);
  }
}

function TestCases$1(){
}

defineClass(300, 1, {}, TestCases$1);
_.onError = function onError_0(request, exception){
  alert_0("onError: Couldn't retrieve JSON");
}
;
_.onResponseReceived = function onResponseReceived_0(request, response){
  var rt;
  if (200 == $getStatusCode(response)) {
    rt = response.xmlHttpRequest.responseText;
    update(rt);
  }
   else {
    alert_0("Couldn't retrieve JSON (" + $getStatusCode(response) + ')');
  }
}
;
var Lmhcs_storage_TestCases$1_2_classLit = createForClass('mhcs.storage', 'TestCases/1', 300);
var I_classLit = createForPrimitive('int', 'I'), Lcom_google_gwt_lang_CollapsedPropertyHolder_2_classLit = createForClass('com.google.gwt.lang', 'CollapsedPropertyHolder', 306), Lcom_google_gwt_lang_JavaClassHierarchySetupUtil_2_classLit = createForClass('com.google.gwt.lang', 'JavaClassHierarchySetupUtil', 308), Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForClass('com.google.gwt.lang', 'LongLibBase/LongEmul', null), Lcom_google_gwt_lang_ModuleUtils_2_classLit = createForClass('com.google.gwt.lang', 'ModuleUtils', 311), Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
var $entry = registerEntry();
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'ie9']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=mhcs_project-0.js

