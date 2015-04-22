var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.mhcs_project;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.7.0";
var $strongName = '568F172A35EA8397E8B21988FEBF8F24';
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
var $intern_0 = 2147483647, $intern_1 = 3.141592653589793, $intern_2 = {3:1, 13:1}, $intern_3 = {3:1}, $intern_4 = {14:1, 15:1, 3:1, 5:1, 4:1}, $intern_5 = {15:1, 34:1, 3:1, 5:1, 4:1}, $intern_6 = {15:1, 35:1, 3:1, 5:1, 4:1}, $intern_7 = {15:1, 36:1, 3:1, 5:1, 4:1}, $intern_8 = {18:1, 3:1, 5:1, 4:1}, $intern_9 = {15:1, 54:1, 3:1, 5:1, 4:1}, $intern_10 = {50:1, 3:1, 13:1}, $intern_11 = 4194303, $intern_12 = 524288, $intern_13 = 32768, $intern_14 = {11:1, 8:1, 10:1, 9:1, 12:1, 7:1, 6:1}, $intern_15 = {11:1, 8:1, 10:1, 9:1, 17:1, 12:1, 7:1, 6:1}, $intern_16 = {11:1, 8:1, 10:1, 9:1, 17:1, 12:1, 38:1, 7:1, 6:1}, $intern_17 = {124:1, 28:1}, $intern_18 = {11:1, 8:1, 10:1, 9:1, 17:1, 12:1, 79:1, 7:1, 6:1}, $intern_19 = {71:1, 28:1}, $intern_20 = {33:1, 3:1, 5:1, 4:1}, $intern_21 = {21:1}, $intern_22 = {3:1, 32:1};
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
stringCastMap = {3:1, 308:1, 5:1, 2:1};
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

defineClass(100, 1, {}, Class);
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
_.toString$ = function toString_8(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0), Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 100);
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

defineClass(82, 1, {});
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
var Lcom_google_gwt_animation_client_Animation_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation', 82);
function $execute(this$static, timestamp){
  $update(this$static.this$01, timestamp)?(this$static.this$01.requestHandle = this$static.this$01.scheduler.requestAnimationFrame_0(this$static.this$01.callback, this$static.this$01.element)):(this$static.this$01.requestHandle = null);
}

function Animation$1(this$0){
  this.this$01 = this$0;
}

defineClass(150, 1, {}, Animation$1);
_.execute = function execute(timestamp){
  $execute(this, timestamp);
}
;
var Lcom_google_gwt_animation_client_Animation$1_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation/1', 150);
defineClass(296, 1, {});
var instance;
var Lcom_google_gwt_animation_client_AnimationScheduler_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler', 296);
defineClass(83, 1, {83:1});
var Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler/AnimationHandle', 83);
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

defineClass(270, 296, {}, AnimationSchedulerImplStandard);
_.requestAnimationFrame_0 = function requestAnimationFrame(callback, element){
  var handle;
  handle = requestImpl(callback, element);
  return new AnimationSchedulerImplStandard$1(handle);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard', 270);
function AnimationSchedulerImplStandard$1(val$handle){
  this.val$handle2 = val$handle;
}

defineClass(271, 83, {83:1}, AnimationSchedulerImplStandard$1);
_.cancel = function cancel(){
  cancelImpl(this.val$handle2);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard/1', 271);
function $cancelAnimationFrame(this$static, requestId){
  $remove_13(this$static.animationRequests, requestId);
  this$static.animationRequests.array.length == 0 && $cancel_0(this$static.timer);
}

function $updateAnimations(this$static){
  var curAnimations, duration, requestId, requestId$index, requestId$max;
  curAnimations = initDim(Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit, {318:1, 3:1}, 98, this$static.animationRequests.array.length, 0, 1);
  curAnimations = dynamicCast($toArray(this$static.animationRequests, curAnimations), 318);
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

defineClass(272, 296, {}, AnimationSchedulerImplTimer);
_.requestAnimationFrame_0 = function requestAnimationFrame_0(callback, element){
  var requestId;
  requestId = new AnimationSchedulerImplTimer$AnimationHandleImpl(this, callback);
  $add_9(this.animationRequests, requestId);
  this.animationRequests.array.length == 1 && $schedule(this.timer, 16);
  return requestId;
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer', 272);
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
    throw new IllegalArgumentException('must be non-negative');
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

defineClass(117, 1, {});
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
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 117);
function AnimationSchedulerImplTimer$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(273, 117, {}, AnimationSchedulerImplTimer$1);
_.run = function run(){
  $updateAnimations(this.this$01);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/1', 273);
function AnimationSchedulerImplTimer$AnimationHandleImpl(this$0, callback){
  this.this$01 = this$0;
  this.callback = callback;
}

defineClass(98, 83, {83:1, 98:1}, AnimationSchedulerImplTimer$AnimationHandleImpl);
_.cancel = function cancel_0(){
  $cancelAnimationFrame(this.this$01, this);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/AnimationHandleImpl', 98);
function $getAriaValue(value_0){
  var buf, item_0, item$index, item$max;
  buf = new StringBuilder;
  for (item$index = 0 , item$max = value_0.length; item$index < item$max; ++item$index) {
    item_0 = value_0[item$index];
    $append((buf.string += '' + item_0 , buf), ' ');
  }
  return $trim(buf.string);
}

function $set(this$static, element, values){
  $setAttribute(element, this$static.name_0, $getAriaValue(values));
}

function Attribute(name_0){
  this.name_0 = name_0;
}

defineClass(122, 1, {});
var Lcom_google_gwt_aria_client_Attribute_2_classLit = createForClass('com.google.gwt.aria.client', 'Attribute', 122);
function AriaValueAttribute(name_0){
  Attribute.call(this, name_0);
}

defineClass(57, 122, {}, AriaValueAttribute);
var Lcom_google_gwt_aria_client_AriaValueAttribute_2_classLit = createForClass('com.google.gwt.aria.client', 'AriaValueAttribute', 57);
function PrimitiveValueAttribute(name_0){
  Attribute.call(this, name_0);
}

defineClass(97, 122, {}, PrimitiveValueAttribute);
var Lcom_google_gwt_aria_client_PrimitiveValueAttribute_2_classLit = createForClass('com.google.gwt.aria.client', 'PrimitiveValueAttribute', 97);
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

defineClass(120, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 120);
function isScript(){
  return true;
}

function Throwable(message){
  this.detailMessage = message;
  captureStackTrace(this, this.detailMessage);
}

defineClass(13, 1, $intern_2);
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.toString$ = function toString_1(){
  var className, msg;
  className = $getName(this.___clazz$);
  msg = this.getMessage();
  return msg != null?className + ': ' + msg:className;
}
;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 13);
defineClass(72, 13, $intern_2);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 72);
function RuntimeException(){
  captureStackTrace(this, this.detailMessage);
}

function RuntimeException_0(message){
  this.detailMessage = message;
  captureStackTrace(this, this.detailMessage);
}

function RuntimeException_1(message){
  Throwable.call(this, message);
}

defineClass(19, 72, $intern_2, RuntimeException_0);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 19);
defineClass(131, 19, $intern_2);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 131);
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

defineClass(42, 131, {42:1, 3:1, 13:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  $ensureInit(this);
  return this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 42);
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

defineClass(277, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 277);
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
      if (instanceOf($e0, 13)) {
        e = $e0;
        reportToBrowser(instanceOf(e, 42)?dynamicCast(e, 42).getThrown():e);
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

defineClass(243, 277, {}, SchedulerImpl);
_.flushRunning = false;
_.shouldBeRunning = false;
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 243);
function SchedulerImpl$Flusher(this$0){
  this.this$01 = this$0;
}

defineClass(244, 1, {}, SchedulerImpl$Flusher);
_.execute_0 = function execute_1(){
  this.this$01.flushRunning = true;
  $flushPostEventPumpCommands(this.this$01);
  this.this$01.flushRunning = false;
  return this.this$01.shouldBeRunning = $isWorkQueued(this.this$01);
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Flusher', 244);
function SchedulerImpl$Rescuer(this$0){
  this.this$01 = this$0;
}

defineClass(245, 1, {}, SchedulerImpl$Rescuer);
_.execute_0 = function execute_2(){
  this.this$01.flushRunning && scheduleFixedDelayImpl(this.this$01.flusher, 1);
  return this.this$01.shouldBeRunning;
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Rescuer', 245);
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
defineClass(288, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 288);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(132, 288, {}, StackTraceCreator$CollectorLegacy);
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
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 132);
function $clinit_StackTraceCreator$CollectorModern(){
  $clinit_StackTraceCreator$CollectorModern = emptyMethod;
  Error.stackTraceLimit = 64;
}

defineClass(289, 288, {});
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
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 289);
function StackTraceCreator$CollectorModernNoSourceMap(){
  $clinit_StackTraceCreator$CollectorModern();
}

defineClass(133, 289, {}, StackTraceCreator$CollectorModernNoSourceMap);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 133);
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

function $setPropertyBoolean(this$static, name_0, value_0){
  this$static[name_0] = value_0;
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

function $createInputElement(doc, type_0){
  var e = doc.createElement('INPUT');
  e.type = type_0;
  return e;
}

function $createScriptElement(doc, source){
  var elem;
  elem = $createElement(doc, 'script');
  elem.text = source;
  return elem;
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

function $getSubPixelScrollLeft(elem){
  return elem.scrollLeft || 0;
}

function $selectClear(select){
  select.options.length = 0;
}

function $selectRemoveOption(select, index_0){
  select.remove(index_0);
}

function $createElement(doc, tagName){
  var container, elem;
  if (tagName.indexOf(':') != -1) {
    container = (!doc.__gwt_container && (doc.__gwt_container = doc.createElement('div')) , doc.__gwt_container);
    $setInnerHTML(container, '<' + tagName + '/>');
    elem = $getFirstChildElement(container);
    container.removeChild(elem);
    return elem;
  }
  return doc.createElement(tagName);
}

function $createInputRadioElement(doc, name_0){
  return doc.createElement("<INPUT type='RADIO' name='" + name_0 + "'>");
}

function $dispatchEvent(target, evt){
  target.fireEvent('on' + evt.type, evt);
}

function $eventPreventDefault(evt){
  evt.returnValue = false;
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

function $getTagName(elem){
  var scopeName, tagName;
  tagName = elem.tagName;
  scopeName = elem.scopeName;
  if (scopeName == null || $equalsIgnoreCase('html', scopeName)) {
    return tagName;
  }
  return scopeName + ':' + tagName;
}

function $selectAdd(select, option, before){
  before?select.add(option, before.index):select.add(option);
}

function $setInnerText(elem, text_0){
  elem.innerText = text_0 || '';
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

var currentEventTarget;
function $getAbsoluteLeft(elem){
  var doc;
  doc = elem.ownerDocument;
  return $getBoundingClientRectLeft(elem) + $getScrollLeft($equals(doc.compatMode, 'CSS1Compat')?doc.documentElement:doc.body);
}

function $getAbsoluteTop(elem){
  var doc;
  doc = elem.ownerDocument;
  return $getBoundingClientRectTop(elem) + ((($equals(doc.compatMode, 'CSS1Compat')?doc.documentElement:doc.body).scrollTop || 0) | 0);
}

function $getScrollLeft(elem){
  if (elem.currentStyle.direction == 'rtl') {
    return -($getSubPixelScrollLeft(elem) | 0);
  }
  return $getSubPixelScrollLeft(elem) | 0;
}

function $createUniqueId(this$static){
  !this$static.gwt_uid && (this$static.gwt_uid = 1);
  return 'gwt-uid-' + this$static.gwt_uid++;
}

function $getBodyOffsetLeft(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientLeft;
}

function $getBodyOffsetTop(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientTop;
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

function $getScrollLeft_0(this$static){
  return $getScrollLeft($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body);
}

function $getScrollTop(this$static){
  return (($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollTop || 0) | 0;
}

function $getScrollWidth(this$static){
  return (($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollWidth || 0) | 0;
}

function $setSrc(this$static, src_0){
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

function $setSelected(this$static, selected){
  this$static.selected = selected;
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

function $toString(this$static){
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
  return $toString(this);
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

defineClass(168, 14, $intern_4, Style$Display$1);
var Lcom_google_gwt_dom_client_Style$Display$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/1', 168, null);
function Style$Display$10(){
  Style$Display.call(this, 'TABLE_COLUMN_GROUP', 9);
}

defineClass(177, 14, $intern_4, Style$Display$10);
var Lcom_google_gwt_dom_client_Style$Display$10_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/10', 177, null);
function Style$Display$11(){
  Style$Display.call(this, 'TABLE_HEADER_GROUP', 10);
}

defineClass(178, 14, $intern_4, Style$Display$11);
var Lcom_google_gwt_dom_client_Style$Display$11_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/11', 178, null);
function Style$Display$12(){
  Style$Display.call(this, 'TABLE_FOOTER_GROUP', 11);
}

defineClass(179, 14, $intern_4, Style$Display$12);
var Lcom_google_gwt_dom_client_Style$Display$12_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/12', 179, null);
function Style$Display$13(){
  Style$Display.call(this, 'TABLE_ROW_GROUP', 12);
}

defineClass(180, 14, $intern_4, Style$Display$13);
var Lcom_google_gwt_dom_client_Style$Display$13_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/13', 180, null);
function Style$Display$14(){
  Style$Display.call(this, 'TABLE_CELL', 13);
}

defineClass(181, 14, $intern_4, Style$Display$14);
var Lcom_google_gwt_dom_client_Style$Display$14_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/14', 181, null);
function Style$Display$15(){
  Style$Display.call(this, 'TABLE_COLUMN', 14);
}

defineClass(182, 14, $intern_4, Style$Display$15);
var Lcom_google_gwt_dom_client_Style$Display$15_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/15', 182, null);
function Style$Display$16(){
  Style$Display.call(this, 'TABLE_ROW', 15);
}

defineClass(183, 14, $intern_4, Style$Display$16);
var Lcom_google_gwt_dom_client_Style$Display$16_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/16', 183, null);
function Style$Display$17(){
  Style$Display.call(this, 'INITIAL', 16);
}

defineClass(184, 14, $intern_4, Style$Display$17);
var Lcom_google_gwt_dom_client_Style$Display$17_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/17', 184, null);
function Style$Display$2(){
  Style$Display.call(this, 'BLOCK', 1);
}

defineClass(169, 14, $intern_4, Style$Display$2);
var Lcom_google_gwt_dom_client_Style$Display$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/2', 169, null);
function Style$Display$3(){
  Style$Display.call(this, 'INLINE', 2);
}

defineClass(170, 14, $intern_4, Style$Display$3);
var Lcom_google_gwt_dom_client_Style$Display$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/3', 170, null);
function Style$Display$4(){
  Style$Display.call(this, 'INLINE_BLOCK', 3);
}

defineClass(171, 14, $intern_4, Style$Display$4);
var Lcom_google_gwt_dom_client_Style$Display$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/4', 171, null);
function Style$Display$5(){
  Style$Display.call(this, 'INLINE_TABLE', 4);
}

defineClass(172, 14, $intern_4, Style$Display$5);
var Lcom_google_gwt_dom_client_Style$Display$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/5', 172, null);
function Style$Display$6(){
  Style$Display.call(this, 'LIST_ITEM', 5);
}

defineClass(173, 14, $intern_4, Style$Display$6);
var Lcom_google_gwt_dom_client_Style$Display$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/6', 173, null);
function Style$Display$7(){
  Style$Display.call(this, 'RUN_IN', 6);
}

defineClass(174, 14, $intern_4, Style$Display$7);
var Lcom_google_gwt_dom_client_Style$Display$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/7', 174, null);
function Style$Display$8(){
  Style$Display.call(this, 'TABLE', 7);
}

defineClass(175, 14, $intern_4, Style$Display$8);
var Lcom_google_gwt_dom_client_Style$Display$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/8', 175, null);
function Style$Display$9(){
  Style$Display.call(this, 'TABLE_CAPTION', 8);
}

defineClass(176, 14, $intern_4, Style$Display$9);
var Lcom_google_gwt_dom_client_Style$Display$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/9', 176, null);
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
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, 1), $intern_3, 34, 0, [VISIBLE, HIDDEN_0, SCROLL, AUTO]);
}

defineClass(34, 4, $intern_5);
var AUTO, HIDDEN_0, SCROLL, VISIBLE;
var Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow', 34, values_1);
function Style$Overflow$1(){
  Style$Overflow.call(this, 'VISIBLE', 0);
}

defineClass(185, 34, $intern_5, Style$Overflow$1);
var Lcom_google_gwt_dom_client_Style$Overflow$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/1', 185, null);
function Style$Overflow$2(){
  Style$Overflow.call(this, 'HIDDEN', 1);
}

defineClass(186, 34, $intern_5, Style$Overflow$2);
var Lcom_google_gwt_dom_client_Style$Overflow$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/2', 186, null);
function Style$Overflow$3(){
  Style$Overflow.call(this, 'SCROLL', 2);
}

defineClass(187, 34, $intern_5, Style$Overflow$3);
var Lcom_google_gwt_dom_client_Style$Overflow$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/3', 187, null);
function Style$Overflow$4(){
  Style$Overflow.call(this, 'AUTO', 3);
}

defineClass(188, 34, $intern_5, Style$Overflow$4);
var Lcom_google_gwt_dom_client_Style$Overflow$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/4', 188, null);
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
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Position_2_classLit, 1), $intern_3, 35, 0, [STATIC, RELATIVE, ABSOLUTE, FIXED]);
}

defineClass(35, 4, $intern_6);
var ABSOLUTE, FIXED, RELATIVE, STATIC;
var Lcom_google_gwt_dom_client_Style$Position_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position', 35, values_2);
function Style$Position$1(){
  Style$Position.call(this, 'STATIC', 0);
}

defineClass(189, 35, $intern_6, Style$Position$1);
var Lcom_google_gwt_dom_client_Style$Position$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/1', 189, null);
function Style$Position$2(){
  Style$Position.call(this, 'RELATIVE', 1);
}

defineClass(190, 35, $intern_6, Style$Position$2);
var Lcom_google_gwt_dom_client_Style$Position$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/2', 190, null);
function Style$Position$3(){
  Style$Position.call(this, 'ABSOLUTE', 2);
}

defineClass(191, 35, $intern_6, Style$Position$3);
var Lcom_google_gwt_dom_client_Style$Position$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/3', 191, null);
function Style$Position$4(){
  Style$Position.call(this, 'FIXED', 3);
}

defineClass(192, 35, $intern_6, Style$Position$4);
var Lcom_google_gwt_dom_client_Style$Position$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/4', 192, null);
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
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, 1), $intern_3, 36, 0, [CENTER, JUSTIFY, LEFT, RIGHT]);
}

defineClass(36, 4, $intern_7);
var CENTER, JUSTIFY, LEFT, RIGHT;
var Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign', 36, values_3);
function Style$TextAlign$1(){
  Style$TextAlign.call(this, 'CENTER', 0);
}

defineClass(193, 36, $intern_7, Style$TextAlign$1);
var Lcom_google_gwt_dom_client_Style$TextAlign$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/1', 193, null);
function Style$TextAlign$2(){
  Style$TextAlign.call(this, 'JUSTIFY', 1);
}

defineClass(194, 36, $intern_7, Style$TextAlign$2);
var Lcom_google_gwt_dom_client_Style$TextAlign$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/2', 194, null);
function Style$TextAlign$3(){
  Style$TextAlign.call(this, 'LEFT', 2);
}

defineClass(195, 36, $intern_7, Style$TextAlign$3);
var Lcom_google_gwt_dom_client_Style$TextAlign$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/3', 195, null);
function Style$TextAlign$4(){
  Style$TextAlign.call(this, 'RIGHT', 3);
}

defineClass(196, 36, $intern_7, Style$TextAlign$4);
var Lcom_google_gwt_dom_client_Style$TextAlign$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/4', 196, null);
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
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Unit_2_classLit, 1), $intern_3, 18, 0, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

defineClass(18, 4, $intern_8);
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
var Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit', 18, values_4);
function Style$Unit$1(){
  Style$Unit.call(this, 'PX', 0);
}

defineClass(159, 18, $intern_8, Style$Unit$1);
_.getType = function getType(){
  return 'px';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/1', 159, null);
function Style$Unit$2(){
  Style$Unit.call(this, 'PCT', 1);
}

defineClass(160, 18, $intern_8, Style$Unit$2);
_.getType = function getType_0(){
  return '%';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/2', 160, null);
function Style$Unit$3(){
  Style$Unit.call(this, 'EM', 2);
}

defineClass(161, 18, $intern_8, Style$Unit$3);
_.getType = function getType_1(){
  return 'em';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/3', 161, null);
function Style$Unit$4(){
  Style$Unit.call(this, 'EX', 3);
}

defineClass(162, 18, $intern_8, Style$Unit$4);
_.getType = function getType_2(){
  return 'ex';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/4', 162, null);
function Style$Unit$5(){
  Style$Unit.call(this, 'PT', 4);
}

defineClass(163, 18, $intern_8, Style$Unit$5);
_.getType = function getType_3(){
  return 'pt';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/5', 163, null);
function Style$Unit$6(){
  Style$Unit.call(this, 'PC', 5);
}

defineClass(164, 18, $intern_8, Style$Unit$6);
_.getType = function getType_4(){
  return 'pc';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/6', 164, null);
function Style$Unit$7(){
  Style$Unit.call(this, 'IN', 6);
}

defineClass(165, 18, $intern_8, Style$Unit$7);
_.getType = function getType_5(){
  return 'in';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/7', 165, null);
function Style$Unit$8(){
  Style$Unit.call(this, 'CM', 7);
}

defineClass(166, 18, $intern_8, Style$Unit$8);
_.getType = function getType_6(){
  return 'cm';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/8', 166, null);
function Style$Unit$9(){
  Style$Unit.call(this, 'MM', 8);
}

defineClass(167, 18, $intern_8, Style$Unit$9);
_.getType = function getType_7(){
  return 'mm';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/9', 167, null);
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
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, 1), $intern_3, 54, 0, [VISIBLE_0, HIDDEN_1]);
}

defineClass(54, 4, $intern_9);
var HIDDEN_1, VISIBLE_0;
var Lcom_google_gwt_dom_client_Style$Visibility_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility', 54, values_5);
function Style$Visibility$1(){
  Style$Visibility.call(this, 'VISIBLE', 0);
}

defineClass(197, 54, $intern_9, Style$Visibility$1);
var Lcom_google_gwt_dom_client_Style$Visibility$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility/1', 197, null);
function Style$Visibility$2(){
  Style$Visibility.call(this, 'HIDDEN', 1);
}

defineClass(198, 54, $intern_9, Style$Visibility$2);
var Lcom_google_gwt_dom_client_Style$Visibility$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility/2', 198, null);
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

defineClass(274, 1, {}, StyleInjector$1);
_.execute_1 = function execute_3(){
  ($clinit_StyleInjector() , needsInjection) && flush();
}
;
var Lcom_google_gwt_dom_client_StyleInjector$1_2_classLit = createForClass('com.google.gwt.dom.client', 'StyleInjector/1', 274);
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
defineClass(300, 1, {});
_.toString$ = function toString_3(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event', 300);
function $overrideSource(this$static, source){
  this$static.source = source;
}

defineClass(301, 300, {});
_.revive = function revive(){
  this.dead = false;
  this.source = null;
}
;
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent', 301);
function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (registered) {
    types = dynamicCast($unsafeGet(registered, nativeEvent.type), 32);
    if (types) {
      for (type$iterator = types.iterator(); type$iterator.hasNext();) {
        type_0 = dynamicCast(type$iterator.next_0(), 39);
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

defineClass(303, 301, {});
_.getAssociatedType = function getAssociatedType(){
  return this.getAssociatedType_0();
}
;
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent', 303);
function $clinit_ChangeEvent(){
  $clinit_ChangeEvent = emptyMethod;
  TYPE = new DomEvent$Type('change', new ChangeEvent);
}

function ChangeEvent(){
}

defineClass(223, 303, {}, ChangeEvent);
_.dispatch = function dispatch(handler){
  $onChange(dynamicCast(handler, 309));
}
;
_.getAssociatedType_0 = function getAssociatedType_0(){
  return TYPE;
}
;
var TYPE;
var Lcom_google_gwt_event_dom_client_ChangeEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ChangeEvent', 223);
defineClass(304, 303, {});
var Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'HumanInputEvent', 304);
function $getX(this$static){
  var relativeElem, e;
  relativeElem = this$static.relativeElem;
  if (relativeElem) {
    return e = this$static.nativeEvent , ($eventGetSubPixelClientX(e) | 0) - $getAbsoluteLeft(relativeElem) + $getScrollLeft(relativeElem) + $getScrollLeft_0(relativeElem.ownerDocument);
  }
  return $eventGetSubPixelClientX(this$static.nativeEvent) | 0;
}

function $getY(this$static){
  var relativeElem, e;
  relativeElem = this$static.relativeElem;
  if (relativeElem) {
    return e = this$static.nativeEvent , ($eventGetSubPixelClientY(e) | 0) - $getAbsoluteTop(relativeElem) + ((relativeElem.scrollTop || 0) | 0) + $getScrollTop(relativeElem.ownerDocument);
  }
  return $eventGetSubPixelClientY(this$static.nativeEvent) | 0;
}

defineClass(305, 304, {});
var Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseEvent', 305);
function $clinit_ClickEvent(){
  $clinit_ClickEvent = emptyMethod;
  TYPE_0 = new DomEvent$Type('click', new ClickEvent);
}

function ClickEvent(){
}

defineClass(220, 305, {}, ClickEvent);
_.dispatch = function dispatch_0(handler){
  dynamicCast(handler, 71).onClick(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_1(){
  return TYPE_0;
}
;
var TYPE_0;
var Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ClickEvent', 220);
defineClass(213, 1, {});
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
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event/Type', 213);
function GwtEvent$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(56, 213, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent/Type', 56);
function DomEvent$Type(eventName, flyweight){
  var types;
  GwtEvent$Type.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap);
  types = dynamicCast($unsafeGet(registered, eventName), 32);
  if (!types) {
    types = new ArrayList;
    $unsafePut(registered, eventName, types);
  }
  types.add_1(this);
  this.name_0 = eventName;
}

defineClass(39, 56, {39:1}, DomEvent$Type);
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent/Type', 39);
function $clinit_MouseDownEvent(){
  $clinit_MouseDownEvent = emptyMethod;
  TYPE_1 = new DomEvent$Type('mousedown', new MouseDownEvent);
}

function $dispatch(this$static, handler){
  $beginDragging(handler.this$01, this$static);
}

function MouseDownEvent(){
}

defineClass(258, 305, {}, MouseDownEvent);
_.dispatch = function dispatch_1(handler){
  $dispatch(this, dynamicCast(handler, 313));
}
;
_.getAssociatedType_0 = function getAssociatedType_2(){
  return TYPE_1;
}
;
var TYPE_1;
var Lcom_google_gwt_event_dom_client_MouseDownEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseDownEvent', 258);
function $clinit_MouseMoveEvent(){
  $clinit_MouseMoveEvent = emptyMethod;
  TYPE_2 = new DomEvent$Type('mousemove', new MouseMoveEvent);
}

function $dispatch_0(this$static, handler){
  $continueDragging(handler.this$01, this$static);
}

function MouseMoveEvent(){
}

defineClass(260, 305, {}, MouseMoveEvent);
_.dispatch = function dispatch_2(handler){
  $dispatch_0(this, dynamicCast(handler, 317));
}
;
_.getAssociatedType_0 = function getAssociatedType_3(){
  return TYPE_2;
}
;
var TYPE_2;
var Lcom_google_gwt_event_dom_client_MouseMoveEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseMoveEvent', 260);
function $clinit_MouseOutEvent(){
  $clinit_MouseOutEvent = emptyMethod;
  TYPE_3 = new DomEvent$Type('mouseout', new MouseOutEvent);
}

function MouseOutEvent(){
}

defineClass(262, 305, {}, MouseOutEvent);
_.dispatch = function dispatch_3(handler){
  dynamicCast(handler, 315);
}
;
_.getAssociatedType_0 = function getAssociatedType_4(){
  return TYPE_3;
}
;
var TYPE_3;
var Lcom_google_gwt_event_dom_client_MouseOutEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseOutEvent', 262);
function $clinit_MouseOverEvent(){
  $clinit_MouseOverEvent = emptyMethod;
  TYPE_4 = new DomEvent$Type('mouseover', new MouseOverEvent);
}

function MouseOverEvent(){
}

defineClass(261, 305, {}, MouseOverEvent);
_.dispatch = function dispatch_4(handler){
  dynamicCast(handler, 316);
}
;
_.getAssociatedType_0 = function getAssociatedType_5(){
  return TYPE_4;
}
;
var TYPE_4;
var Lcom_google_gwt_event_dom_client_MouseOverEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseOverEvent', 261);
function $clinit_MouseUpEvent(){
  $clinit_MouseUpEvent = emptyMethod;
  TYPE_5 = new DomEvent$Type('mouseup', new MouseUpEvent);
}

function $dispatch_1(this$static, handler){
  $endDragging(handler.this$01, this$static);
}

function MouseUpEvent(){
}

defineClass(259, 305, {}, MouseUpEvent);
_.dispatch = function dispatch_5(handler){
  $dispatch_1(this, dynamicCast(handler, 314));
}
;
_.getAssociatedType_0 = function getAssociatedType_6(){
  return TYPE_5;
}
;
var TYPE_5;
var Lcom_google_gwt_event_dom_client_MouseUpEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseUpEvent', 259);
function $unsafeGet(this$static, key){
  return this$static.map_0[key];
}

function $unsafePut(this$static, key, value_0){
  this$static.map_0[key] = value_0;
}

function PrivateMap(){
  this.map_0 = {};
}

defineClass(251, 1, {}, PrivateMap);
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client', 'PrivateMap', 251);
function fire_0(){
  return null;
}

function CloseEvent_0(){
}

function fire_1(source){
  var event_0;
  if (TYPE_6) {
    event_0 = new CloseEvent_0;
    source.fireEvent_0(event_0);
  }
}

defineClass(266, 301, {}, CloseEvent_0);
_.dispatch = function dispatch_6(handler){
  dynamicCast(handler, 310);
  detachWidgets();
}
;
_.getAssociatedType = function getAssociatedType_7(){
  return TYPE_6;
}
;
var TYPE_6;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'CloseEvent', 266);
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

defineClass(256, 301, {}, ResizeEvent);
_.dispatch = function dispatch_7(handler){
  dynamicCast(handler, 124).onResize(this);
}
;
_.getAssociatedType = function getAssociatedType_8(){
  return TYPE_7;
}
;
_.width_0 = 0;
var TYPE_7;
var Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ResizeEvent', 256);
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

defineClass(121, 301, {}, ValueChangeEvent);
_.dispatch = function dispatch_8(handler){
  $dispatch_2(dynamicCast(handler, 312));
}
;
_.getAssociatedType = function getAssociatedType_9(){
  return TYPE_8;
}
;
var TYPE_8;
var Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ValueChangeEvent', 121);
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
    if (instanceOf($e0, 50)) {
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

defineClass(68, 1, {8:1}, HandlerManager, HandlerManager_0);
_.fireEvent_0 = function fireEvent(event_0){
  $fireEvent(this, event_0);
}
;
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager', 68);
defineClass(302, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'EventBus', 302);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_9(this$static.deferredDeltas, command);
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
      handler = this$static.isReverseOrder?it.previous():it.next_0();
      try {
        event_0.dispatch(dynamicCast(handler, 28));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 13)) {
          e = $e0;
          !causes && (causes = new HashSet);
          $add_10(causes, e);
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
  removed && l.isEmpty() && (sourceMap = dynamicCast($get_1(this$static.map_0, type_0), 58) , dynamicCast($remove_15(sourceMap.hashCodeMap, source), 32) , sourceMap.size_0 == 0 && $remove_10(this$static.map_0, type_0) , undefined);
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = dynamicCast($get_1(this$static.map_0, type_0), 58);
  if (!sourceMap) {
    sourceMap = new HashMap;
    $put_0(this$static.map_0, type_0, sourceMap);
  }
  handlers = dynamicCast(getEntryValueOrNull($getEntry(sourceMap.hashCodeMap, source)), 32);
  if (!handlers) {
    handlers = new ArrayList;
    $put_1(sourceMap.hashCodeMap, source, handlers);
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
  sourceMap = dynamicCast($get_1(this$static.map_0, type_0), 58);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = dynamicCast(getEntryValueOrNull($getEntry(sourceMap.hashCodeMap, source)), 32);
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
        c = (checkCriticalElement(c$iterator.i < c$iterator.this$01_0.size_1()) , dynamicCast(c$iterator.this$01_0.get_0(c$iterator.last = c$iterator.i++), 275));
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

defineClass(214, 302, {});
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus', 214);
function $doRemove(this$static, type_0, source, handler){
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$3(this$static, type_0, source, handler)):$doRemoveNow(this$static, type_0, source, handler);
}

function HandlerManager$Bus(fireInReverseOrder){
  this.map_0 = new HashMap;
  this.isReverseOrder = fireInReverseOrder;
}

defineClass(215, 214, {}, HandlerManager$Bus);
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager/Bus', 215);
function LegacyHandlerWrapper(real){
  this.real = real;
}

defineClass(252, 1, {}, LegacyHandlerWrapper);
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared', 'LegacyHandlerWrapper', 252);
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
  return dynamicCast(iterator.next_0(), 13);
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
    t = dynamicCast(t$iterator.next_0(), 13);
    first?(first = false):(b.string += '; ' , b);
    $append(b, t.getMessage());
  }
  return b.string;
}

defineClass(50, 19, $intern_10, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared', 'UmbrellaException', 50);
function UmbrellaException_0(causes){
  UmbrellaException.call(this, causes);
}

defineClass(105, 50, $intern_10, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared', 'UmbrellaException', 105);
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
  return initValues(getClassLiteralForArray(Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit, 1), $intern_3, 66, 0, [RTL, LTR, DEFAULT]);
}

defineClass(66, 4, {66:1, 3:1, 5:1, 4:1}, HasDirection$Direction);
var DEFAULT, LTR, RTL;
var Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForEnum('com.google.gwt.i18n.client', 'HasDirection/Direction', 66, values_6);
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
  if (instanceOf(e, 42)) {
    jse = dynamicCast(e, 42);
    if (maskUndefined(jse.e) !== maskUndefined(($clinit_JavaScriptException() , NOT_SET))) {
      return maskUndefined(jse.e) === maskUndefined(NOT_SET)?null:jse.e;
    }
  }
  return e;
}

function wrap(e){
  var jse;
  if (instanceOf(e, 13)) {
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
  a0 = value_0 & $intern_11;
  a1 = value_0 >> 22 & $intern_11;
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
    boxedValues == null && (boxedValues = initDim(Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit, $intern_3, 322, 256, 0, 1));
    result = boxedValues[rebase];
    !result && (result = boxedValues[rebase] = create(value_0));
    return result;
  }
  return create(value_0);
}

var boxedValues;
function $clinit_LongLib$Const(){
  $clinit_LongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_11, $intern_11, 524287);
  MIN_VALUE = create0(0, 0, $intern_12);
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
  $add_9(this$static.layers, layer);
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
      l = (checkCriticalElement(l$iterator0.i < l$iterator0.this$01_0.size_1()) , dynamicCast(l$iterator0.this$01_0.get_0(l$iterator0.last = l$iterator0.i++), 23));
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
    l = (checkCriticalElement(l$iterator.i < l$iterator.this$01_0.size_1()) , dynamicCast(l$iterator.this$01_0.get_0(l$iterator.last = l$iterator.i++), 23));
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

defineClass(106, 1, {}, Layout);
var Lcom_google_gwt_layout_client_Layout_2_classLit = createForClass('com.google.gwt.layout.client', 'Layout', 106);
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

defineClass(149, 82, {}, Layout$1);
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
    l = (checkCriticalElement(l$iterator.i < l$iterator.this$01_0.size_1()) , dynamicCast(l$iterator.this$01_0.get_0(l$iterator.last = l$iterator.i++), 23));
    l.setTargetLeft && (l.left_0 = l.sourceLeft + (l.targetLeft - l.sourceLeft) * progress);
    l.setTargetRight && (l.right = l.sourceRight + (l.targetRight - l.sourceRight) * progress);
    l.setTargetTop && (l.top_0 = l.sourceTop + (l.targetTop - l.sourceTop) * progress);
    l.setTargetBottom && (l.bottom = l.sourceBottom + (l.targetBottom - l.sourceBottom) * progress);
    l.setTargetWidth && (l.width_0 = l.sourceWidth + (l.targetWidth - l.sourceWidth) * progress);
    l.setTargetHeight && (l.height = l.sourceHeight + (l.targetHeight - l.sourceHeight) * progress);
    $layout_0(this.this$01.impl, l);
    !!this.val$callback2 && (child = l.userObject , instanceOf(child, 38) && dynamicCast(child, 38).onResize_0() , undefined);
  }
}
;
var Lcom_google_gwt_layout_client_Layout$1_2_classLit = createForClass('com.google.gwt.layout.client', 'Layout/1', 149);
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

defineClass(23, 1, {23:1}, Layout$Layer);
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
var Lcom_google_gwt_layout_client_Layout$Layer_2_classLit = createForClass('com.google.gwt.layout.client', 'Layout/Layer', 23);
function $clinit_LayoutImpl(){
  $clinit_LayoutImpl = emptyMethod;
  fixedRuler = createRuler(($clinit_Style$Unit() , CM), CM);
  $appendChild($doc.body, fixedRuler);
}

function $attachChild_0(parent_0, child, before){
  var beforeContainer, container;
  container = $createElement($doc, 'div');
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
  ruler = $createElement($doc, 'div');
  $setInnerHTML(ruler, '&nbsp;');
  style = ruler.style;
  $setPropertyImpl(style, 'position', ($clinit_Style$Position() , 'absolute'));
  $setPropertyImpl(style, 'zIndex', '-32767');
  $setPropertyImpl(style, 'top', -20 + heightUnit.getType());
  $setPropertyImpl(style, 'width', 10 + widthUnit.getType());
  $setPropertyImpl(style, 'height', 10 + heightUnit.getType());
  $setPropertyImpl(style, 'visibility', ($clinit_Style$Visibility() , 'hidden'));
  $set(($clinit_State() , HIDDEN), ruler, initValues(getClassLiteralForArray(Ljava_lang_Boolean_2_classLit, 1), $intern_3, 48, 0, [($clinit_Boolean() , $clinit_Boolean() , TRUE)]));
  return ruler;
}

defineClass(307, 1, {});
var fixedRuler;
var Lcom_google_gwt_layout_client_LayoutImpl_2_classLit = createForClass('com.google.gwt.layout.client', 'LayoutImpl', 307);
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

defineClass(257, 307, {}, LayoutImplIE8);
var Lcom_google_gwt_layout_client_LayoutImplIE8_2_classLit = createForClass('com.google.gwt.layout.client', 'LayoutImplIE8', 257);
var instance_0;
function CommonResources_Bundle_ie8_default_InlineClientBundleGenerator(){
}

defineClass(268, 1, {}, CommonResources_Bundle_ie8_default_InlineClientBundleGenerator);
var inlineBlockStyle;
var Lcom_google_gwt_resources_client_CommonResources_1Bundle_1ie8_1default_1InlineClientBundleGenerator_2_classLit = createForClass('com.google.gwt.resources.client', 'CommonResources_Bundle_ie8_default_InlineClientBundleGenerator', 268);
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

function CommonResources_Bundle_ie8_default_InlineClientBundleGenerator$1(){
}

defineClass(269, 1, {}, CommonResources_Bundle_ie8_default_InlineClientBundleGenerator$1);
_.injected = false;
var Lcom_google_gwt_resources_client_CommonResources_1Bundle_1ie8_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.google.gwt.resources.client', 'CommonResources_Bundle_ie8_default_InlineClientBundleGenerator/1', 269);
function $clinit_CommonResources_Bundle_ie8_default_InlineClientBundleGenerator$inlineBlockStyleInitializer(){
  $clinit_CommonResources_Bundle_ie8_default_InlineClientBundleGenerator$inlineBlockStyleInitializer = emptyMethod;
  inlineBlockStyle = new CommonResources_Bundle_ie8_default_InlineClientBundleGenerator$1;
}

function SafeUriString(uri_0){
  this.uri_0 = uri_0;
}

defineClass(94, 1, {276:1, 94:1}, SafeUriString);
_.equals$ = function equals_1(obj){
  if (!instanceOf(obj, 276)) {
    return false;
  }
  return $equals(this.uri_0, dynamicCast(dynamicCast(obj, 276), 94).uri_0);
}
;
_.hashCode$ = function hashCode_3(){
  return getHashCode_0(this.uri_0);
}
;
var Lcom_google_gwt_safehtml_shared_SafeUriString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeUriString', 94);
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

defineClass(95, 1, {}, Storage_0);
var localStorage_0;
var Lcom_google_gwt_storage_client_Storage_2_classLit = createForClass('com.google.gwt.storage.client', 'Storage', 95);
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

defineClass(306, 1, {});
var Lcom_google_gwt_text_shared_AbstractRenderer_2_classLit = createForClass('com.google.gwt.text.shared', 'AbstractRenderer', 306);
function PassthroughParser(){
}

defineClass(247, 1, {}, PassthroughParser);
var INSTANCE_0;
var Lcom_google_gwt_text_shared_testing_PassthroughParser_2_classLit = createForClass('com.google.gwt.text.shared.testing', 'PassthroughParser', 247);
function PassthroughRenderer(){
}

defineClass(246, 306, {}, PassthroughRenderer);
var INSTANCE_1;
var Lcom_google_gwt_text_shared_testing_PassthroughRenderer_2_classLit = createForClass('com.google.gwt.text.shared.testing', 'PassthroughRenderer', 246);
function dispatchEvent_1(evt, elem, listener){
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(evt.type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function insertChild(parent_0, child, index_0){
  $insertChild(parent_0, resolve(child), index_0);
}

function isPotential(o){
  try {
    return !!o && !!o.__gwt_resolve;
  }
   catch (e) {
    return false;
  }
}

function previewEvent(evt){
  var ret;
  ret = fire_5(handlers_0, evt);
  if (!ret && !!evt) {
    evt.cancelBubble = true;
    $eventPreventDefault(evt);
  }
  return ret;
}

function releaseCapture(elem){
  !!sCaptureElem && elem == sCaptureElem && (sCaptureElem = null);
  $maybeInitializeEventSystem();
  elem.releaseCapture();
}

function resolve(maybePotential){
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

function setCapture(elem){
  sCaptureElem = elem;
  $maybeInitializeEventSystem();
  elem.setCapture();
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

function addNativePreviewHandler(handler){
  $maybeInitializeEventSystem();
  !TYPE_9 && (TYPE_9 = new GwtEvent$Type);
  if (!handlers_0) {
    handlers_0 = new HandlerManager_0(null, true);
    singleton = new Event$NativePreviewEvent;
  }
  return $addHandler(handlers_0, TYPE_9, handler);
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

defineClass(219, 301, {}, Event$NativePreviewEvent);
_.dispatch = function dispatch_9(handler){
  $dispatch_3(this, dynamicCast(handler, 311));
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
var Lcom_google_gwt_user_client_Event$NativePreviewEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Event/NativePreviewEvent', 219);
function $clinit_History(){
  $clinit_History = emptyMethod;
  new History$HistoryImplIE8;
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

defineClass(263, 1, {8:1}, History$HistoryEventSource);
_.fireEvent_0 = function fireEvent_0(event_0){
  $fireEvent(this.handlers, event_0);
}
;
var Lcom_google_gwt_user_client_History$HistoryEventSource_2_classLit = createForClass('com.google.gwt.user.client', 'History/HistoryEventSource', 263);
function $decodeHistoryToken(historyToken){
  return $wnd.decodeURI(historyToken.replace('%23', '#'));
}

defineClass(264, 1, {});
_.attachListener = function attachListener(){
  var handler = $entry(onHashChanged);
  $wnd.addEventListener('hashchange', handler, false);
}
;
var Lcom_google_gwt_user_client_History$HistoryImpl_2_classLit = createForClass('com.google.gwt.user.client', 'History/HistoryImpl', 264);
function History$HistoryImplIE8(){
  this.attachListener();
}

defineClass(265, 264, {}, History$HistoryImplIE8);
_.attachListener = function attachListener_0(){
  var handler = $entry(onHashChanged);
  var oldHandler = $wnd.onhashchange;
  $wnd.onhashchange = function(){
    var ex;
    try {
      handler();
    }
     catch (e) {
      ex = e;
    }
    if (oldHandler != null) {
      try {
        oldHandler();
      }
       catch (e) {
        ex = ex || e;
      }
    }
    if (ex != null) {
      throw ex;
    }
  }
  ;
}
;
var Lcom_google_gwt_user_client_History$HistoryImplIE8_2_classLit = createForClass('com.google.gwt.user.client', 'History/HistoryImplIE8', 265);
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

defineClass(212, 301, {}, Window$ClosingEvent);
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
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ClosingEvent', 212);
function Window$WindowHandlers(){
  HandlerManager.call(this, null);
}

defineClass(90, 68, {8:1}, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client', 'Window/WindowHandlers', 90);
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
      return $intern_13;
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
      return $intern_12;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return 4194304;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return 16777216;
    case 'gesturechange':
      return 33554432;
    case 'gestureend':
      return 67108864;
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

function getEventListener_0(elem){
  var maybeListener = elem.__listener;
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 10)?maybeListener:null;
}

function setEventListener(elem, listener){
  elem.__listener = listener;
}

var eventSystemIsInitialized = false;
function $initEventSystem(){
  $wnd.__gwt_globalEventArray == null && ($wnd.__gwt_globalEventArray = new Array);
  $wnd.__gwt_globalEventArray[$wnd.__gwt_globalEventArray.length] = $entry(function(){
    return previewEvent($wnd.event);
  }
  );
  var dispatchEvent_0 = $entry(function(){
    var oldEventTarget = currentEventTarget;
    currentEventTarget = this;
    if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      if (!previewEventImpl()) {
        currentEventTarget = oldEventTarget;
        return;
      }
    }
    var getEventListener = getEventListener_0;
    var listener, curElem = this;
    while (curElem && !(listener = getEventListener(curElem))) {
      curElem = curElem.parentElement;
    }
    listener && dispatchEvent_1($wnd.event, curElem, listener);
    currentEventTarget = oldEventTarget;
  }
  );
  var dispatchDblClickEvent = $entry(function(){
    var newEvent = $doc.createEventObject();
    $wnd.event.returnValue == null && $wnd.event.srcElement.fireEvent && $wnd.event.srcElement.fireEvent('onclick', newEvent);
    if (this.__eventBits & 2) {
      dispatchEvent_0.call(this);
    }
     else if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      previewEventImpl();
    }
  }
  );
  var dispatchUnhandledEvent = $entry(function(){
    this.__gwtLastUnhandledEvent = $wnd.event.type;
    dispatchEvent_0.call(this);
  }
  );
  var moduleName = $moduleName.replace(/\./g, '_');
  $wnd['__gwt_dispatchEvent_' + moduleName] = dispatchEvent_0;
  callDispatchEvent = (new Function('w', 'return function() { w.__gwt_dispatchEvent_' + moduleName + '.call(this) }'))($wnd);
  $wnd['__gwt_dispatchDblClickEvent_' + moduleName] = dispatchDblClickEvent;
  callDispatchDblClickEvent = (new Function('w', 'return function() { w.__gwt_dispatchDblClickEvent_' + moduleName + '.call(this)}'))($wnd);
  $wnd['__gwt_dispatchUnhandledEvent_' + moduleName] = dispatchUnhandledEvent;
  callDispatchUnhandledEvent = (new Function('w', 'return function() { w.__gwt_dispatchUnhandledEvent_' + moduleName + '.call(this)}'))($wnd);
  callDispatchOnLoadEvent = (new Function('w', 'return function() { w.__gwt_dispatchUnhandledEvent_' + moduleName + '.call(w.event.srcElement)}'))($wnd);
  var bodyDispatcher = $entry(function(){
    dispatchEvent_0.call($doc.body);
  }
  );
  var bodyDblClickDispatcher = $entry(function(){
    dispatchDblClickEvent.call($doc.body);
  }
  );
  $doc.body.attachEvent('onclick', bodyDispatcher);
  $doc.body.attachEvent('onmousedown', bodyDispatcher);
  $doc.body.attachEvent('onmouseup', bodyDispatcher);
  $doc.body.attachEvent('onmousemove', bodyDispatcher);
  $doc.body.attachEvent('onmousewheel', bodyDispatcher);
  $doc.body.attachEvent('onkeydown', bodyDispatcher);
  $doc.body.attachEvent('onkeypress', bodyDispatcher);
  $doc.body.attachEvent('onkeyup', bodyDispatcher);
  $doc.body.attachEvent('onfocus', bodyDispatcher);
  $doc.body.attachEvent('onblur', bodyDispatcher);
  $doc.body.attachEvent('ondblclick', bodyDblClickDispatcher);
  $doc.body.attachEvent('oncontextmenu', bodyDispatcher);
}

function $insertChild(parent_0, child, index_0){
  index_0 >= parent_0.children.length?parent_0.appendChild(child):parent_0.insertBefore(child, parent_0.children[index_0]);
}

function $sinkEvents(elem, bits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, bits);
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?callDispatchEvent:null);
  chMask & 3 && (elem.ondblclick = bits & 3?callDispatchDblClickEvent:null);
  chMask & 4 && (elem.onmousedown = bits & 4?callDispatchEvent:null);
  chMask & 8 && (elem.onmouseup = bits & 8?callDispatchEvent:null);
  chMask & 16 && (elem.onmouseover = bits & 16?callDispatchEvent:null);
  chMask & 32 && (elem.onmouseout = bits & 32?callDispatchEvent:null);
  chMask & 64 && (elem.onmousemove = bits & 64?callDispatchEvent:null);
  chMask & 128 && (elem.onkeydown = bits & 128?callDispatchEvent:null);
  chMask & 256 && (elem.onkeypress = bits & 256?callDispatchEvent:null);
  chMask & 512 && (elem.onkeyup = bits & 512?callDispatchEvent:null);
  chMask & 1024 && (elem.onchange = bits & 1024?callDispatchEvent:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?callDispatchEvent:null);
  chMask & 4096 && (elem.onblur = bits & 4096?callDispatchEvent:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?callDispatchEvent:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?callDispatchEvent:null);
  chMask & $intern_13 && (elem.nodeName == 'IFRAME'?bits & $intern_13?elem.attachEvent('onload', callDispatchOnLoadEvent):elem.detachEvent('onload', callDispatchOnLoadEvent):(elem.onload = bits & $intern_13?callDispatchUnhandledEvent:null));
  chMask & 65536 && (elem.onerror = bits & 65536?callDispatchEvent:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?callDispatchEvent:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?callDispatchEvent:null);
  chMask & $intern_12 && (elem.onpaste = bits & $intern_12?callDispatchEvent:null);
}

function previewEventImpl(){
  var isCancelled = false;
  for (var i = 0; i < $wnd.__gwt_globalEventArray.length; i++) {
    !$wnd.__gwt_globalEventArray[i]() && (isCancelled = true);
  }
  return !isCancelled;
}

var callDispatchDblClickEvent, callDispatchEvent, callDispatchOnLoadEvent, callDispatchUnhandledEvent;
function $get(this$static, elem){
  var index_0;
  index_0 = getIndex(elem);
  if (index_0 < 0) {
    return null;
  }
  return dynamicCast($get_2(this$static.uiObjectList, index_0), 7);
}

function $put(this$static, uiObject){
  var index_0;
  if (!this$static.freeList) {
    index_0 = this$static.uiObjectList.array.length;
    $add_9(this$static.uiObjectList, uiObject);
  }
   else {
    index_0 = this$static.freeList.index_0;
    $set_0(this$static.uiObjectList, index_0, uiObject);
    this$static.freeList = this$static.freeList.next;
  }
  uiObject.element['__uiObjectID'] = index_0;
}

function $removeByElement(this$static, elem){
  var index_0;
  index_0 = getIndex(elem);
  elem['__uiObjectID'] = null;
  $set_0(this$static.uiObjectList, index_0, null);
  this$static.freeList = new ElementMapperImpl$FreeNode(index_0, this$static.freeList);
}

function ElementMapperImpl(){
  this.uiObjectList = new ArrayList;
}

function getIndex(elem){
  var index_0 = elem['__uiObjectID'];
  return index_0 == null?-1:index_0;
}

defineClass(249, 1, {}, ElementMapperImpl);
_.freeList = null;
var Lcom_google_gwt_user_client_impl_ElementMapperImpl_2_classLit = createForClass('com.google.gwt.user.client.impl', 'ElementMapperImpl', 249);
function ElementMapperImpl$FreeNode(index_0, next){
  this.index_0 = index_0;
  this.next = next;
}

defineClass(250, 1, {}, ElementMapperImpl$FreeNode);
_.index_0 = 0;
var Lcom_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_2_classLit = createForClass('com.google.gwt.user.client.impl', 'ElementMapperImpl/FreeNode', 250);
function $initHandler(initFunc, cmd){
  var scriptElem;
  scriptElem = $createScriptElement($doc, initFunc);
  $appendChild($doc.body, scriptElem);
  cmd.execute_1();
  $removeChild($doc.body, scriptElem);
}

function WindowImplIE$1(){
}

defineClass(254, 1, {}, WindowImplIE$1);
_.execute_1 = function execute_4(){
  $wnd.__gwt_initWindowCloseHandler($entry(onClosing), $entry(onClosed));
}
;
var Lcom_google_gwt_user_client_impl_WindowImplIE$1_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplIE/1', 254);
function WindowImplIE$2(){
}

defineClass(255, 1, {}, WindowImplIE$2);
_.execute_1 = function execute_5(){
  $wnd.__gwt_initWindowResizeHandler($entry(onResize));
}
;
var Lcom_google_gwt_user_client_impl_WindowImplIE$2_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplIE/2', 255);
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
  this$static.element = elem;
}

function $setStyleName(this$static, style){
  $setClassName(this$static.getStyleElement(), style);
}

function $setStyleName_0(this$static, style, add_0){
  setStyleName(this$static.getStyleElement(), style, add_0);
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
    throw new IllegalArgumentException('Style names cannot be empty');
  }
  add_0?$addClassName(elem, style):$removeClassName(elem, style);
}

function setStylePrimaryName(elem, style){
  if (!elem) {
    throw new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw new IllegalArgumentException('Style names cannot be empty');
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

defineClass(7, 1, {9:1, 7:1});
_.getStyleElement = function getStyleElement(){
  return this.element;
}
;
_.resolvePotentialElement = function resolvePotentialElement(){
  return $resolvePotentialElement();
}
;
_.setHeight_0 = function setHeight(height){
  $setPropertyImpl(this.element.style, 'height', height);
}
;
_.setVisible = function setVisible_0(visible){
  setVisible(this.element, visible);
}
;
_.setWidth_0 = function setWidth(width_0){
  $setPropertyImpl(this.element.style, 'width', width_0);
}
;
_.toString$ = function toString_5(){
  if (!this.element) {
    return '(null handle)';
  }
  return this.element.outerHTML;
}
;
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject', 7);
function $addDomHandler(this$static, handler, type_0){
  var typeInt;
  typeInt = $eventGetTypeInt(type_0.name_0);
  typeInt == -1?this$static.element:this$static.sinkEvents(typeInt);
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
  setEventListener(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && this$static.sinkEvents(bitsToAdd);
  this$static.doAttachChildren();
  this$static.onLoad();
}

function $onBrowserEvent(this$static, event_0){
  var related;
  switch ($eventGetTypeInt(event_0.type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget || (event_0.type == 'mouseout'?event_0.toElement:event_0.fromElement);
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
  this$static.attached && setEventListener(this$static.element, null);
  !!this$static.element && $replaceNode(this$static.element, elem);
  this$static.element = elem;
  this$static.attached && setEventListener(this$static.element, this$static);
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

function $sinkEvents_0(this$static, eventBitsToAdd){
  this$static.eventsToSink == -1?$sinkEvents(this$static.element, eventBitsToAdd | $getEventsSunk(this$static.element)):(this$static.eventsToSink |= eventBitsToAdd);
}

defineClass(6, 7, $intern_14);
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.fireEvent_0 = function fireEvent_1(event_0){
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
  $sinkEvents_0(this, eventBitsToAdd);
}
;
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Widget', 6);
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

defineClass(295, 6, $intern_15);
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Panel', 295);
function $add(this$static, child, container){
  $removeFromParent_0(child);
  $add_7(this$static.children_0, child);
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
  return $get_0(this$static.children_0, index_0);
}

function $getWidgetIndex(this$static, child){
  return $indexOf(this$static.children_0, child);
}

function $insert(this$static, child, container, beforeIndex){
  beforeIndex = $adjustIndex(this$static, child, beforeIndex);
  $removeFromParent_0(child);
  $insert_6(this$static.children_0, child, beforeIndex);
  insertChild(container, child.element, beforeIndex);
  $setParent(child, this$static);
}

function $remove(this$static, index_0){
  return $remove_0(this$static, $get_0(this$static.children_0, index_0));
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
    elem = w.element;
    $removeChild($getParentElement(elem), elem);
    $remove_8(this$static.children_0, w);
  }
  return true;
}

function ComplexPanel(){
  this.children_0 = new WidgetCollection(this);
}

defineClass(64, 295, $intern_15);
_.iterator = function iterator_0(){
  return new WidgetCollection$WidgetIterator(this.children_0);
}
;
_.remove_0 = function remove_0(w){
  return $remove_0(this, w);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ComplexPanel', 64);
function $add_0(this$static, w){
  $add(this$static, w, this$static.element);
}

function $remove_1(this$static, w){
  var removed;
  removed = $remove_0(this$static, w);
  removed && changeToStaticPositioning(w.element);
  return removed;
}

function changeToStaticPositioning(elem){
  $setPropertyImpl(elem.style, 'left', '');
  $setPropertyImpl(elem.style, 'top', '');
  $setPropertyImpl(elem.style, 'position', '');
}

defineClass(233, 64, $intern_15);
_.remove_0 = function remove_1(w){
  return $remove_1(this, w);
}
;
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbsolutePanel', 233);
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
    w = dynamicCast(w$iterator.next_0(), 6);
    try {
      c.execute_2(w);
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 13)) {
        e = $e0;
        !caught && (caught = new HashSet);
        $add_10(caught, e);
      }
       else 
        throw unwrap($e0);
    }
  }
  if (caught) {
    throw new AttachDetachException(caught);
  }
}

defineClass(145, 105, $intern_10, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException', 145);
function AttachDetachException$1(){
}

defineClass(146, 1, {}, AttachDetachException$1);
_.execute_2 = function execute_6(w){
  w.onAttach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/1', 146);
function AttachDetachException$2(){
}

defineClass(147, 1, {}, AttachDetachException$2);
_.execute_2 = function execute_7(w){
  w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/2', 147);
function FocusWidget(elem){
  $setElement(this, elem);
}

defineClass(87, 6, $intern_14);
_.getTabIndex = function getTabIndex(){
  return this.element.tabIndex;
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
  $setTabIndex(this.element, index_0);
}
;
var Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FocusWidget', 87);
function ButtonBase(elem){
  FocusWidget.call(this, elem);
}

defineClass(108, 87, $intern_14);
var Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ButtonBase', 108);
function Button(){
  ButtonBase.call(this, $doc.createElement("<BUTTON type='button'><\/BUTTON>"));
  $setClassName(this.element, 'gwt-Button');
}

function Button_0(html){
  Button.call(this);
  $setInnerHTML(this.element, html);
}

function Button_1(handler){
  Button_0.call(this, 'Close');
  $addDomHandler(this, handler, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
}

defineClass(24, 108, $intern_14, Button, Button_0, Button_1);
var Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Button', 24);
function $getWidgetTd(this$static, w){
  if (w.parent_0 != this$static) {
    return null;
  }
  return $getParentElement(w.element);
}

function $setCellHorizontalAlignment(this$static, w, align_0){
  var td;
  td = $getWidgetTd(this$static, w);
  !!td && $setPropertyString(td, 'align', align_0.textAlignString);
}

function $setCellVerticalAlignment(td, align_0){
  $setPropertyImpl(td.style, 'verticalAlign', align_0.verticalAlignString);
}

function $setCellVerticalAlignment_0(td, align_0){
  $setPropertyImpl(td.style, 'verticalAlign', align_0.verticalAlignString);
}

function CellPanel(){
  ComplexPanel.call(this);
  this.table = $createElement($doc, 'table');
  this.body_0 = $createElement($doc, 'tbody');
  $appendChild(this.table, resolve(this.body_0));
  $setElement(this, this.table);
}

defineClass(84, 64, $intern_15);
var Lcom_google_gwt_user_client_ui_CellPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CellPanel', 84);
function $replaceInputElement(this$static, elem){
  var accessKey, checked, enabled, formValue, newInputElem, sunkEvents, tabIndex, uid;
  newInputElem = elem;
  tabIndex = this$static.inputElem.tabIndex;
  checked = (this$static.attached?($clinit_Boolean() , $isChecked(this$static.inputElem)?TRUE:FALSE):($clinit_Boolean() , $isDefaultChecked(this$static.inputElem)?TRUE:FALSE)).value_0;
  enabled = !this$static.inputElem.disabled;
  formValue = this$static.inputElem.value;
  uid = this$static.inputElem.id;
  accessKey = this$static.inputElem.accessKey;
  sunkEvents = $getEventsSunk(this$static.inputElem);
  setEventListener(this$static.inputElem, null);
  $replaceChild(this$static.element, newInputElem, this$static.inputElem);
  $sinkEvents(elem, $getEventsSunk(this$static.inputElem));
  $sinkEvents(this$static.inputElem, 0);
  this$static.inputElem = newInputElem;
  $sinkEvents(this$static.inputElem, sunkEvents);
  $setId(this$static.inputElem, uid);
  $equals('', accessKey) || $setAccessKey(this$static.inputElem, accessKey);
  !!this$static.inputElem && $setTabIndex(this$static.inputElem, tabIndex);
  $setValue_0(this$static, ($clinit_Boolean() , checked?TRUE:FALSE));
  $setDisabled(this$static.inputElem, !enabled);
  enabled?$setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-' + 'disabled', false):$setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-' + 'disabled', true);
  $setAttribute(this$static.inputElem, 'value', formValue);
  this$static.attached && setEventListener(this$static.inputElem, this$static);
}

function $setValue_0(this$static, value_0){
  var oldValue;
  !value_0 && (value_0 = ($clinit_Boolean() , FALSE));
  oldValue = this$static.attached?($clinit_Boolean() , $isChecked(this$static.inputElem)?TRUE:FALSE):($clinit_Boolean() , $isDefaultChecked(this$static.inputElem)?TRUE:FALSE);
  $setChecked(this$static.inputElem, value_0.value_0);
  $setDefaultChecked(this$static.inputElem, value_0.value_0);
  if (!!oldValue && oldValue.value_0 == value_0.value_0) {
    return;
  }
}

function CheckBox(){
  var e;
  CheckBox_0.call(this, (e = $doc.createElement('INPUT') , e.type = 'checkbox' , e.value = 'on' , e));
  $setClassName(this.element, 'gwt-CheckBox');
}

function CheckBox_0(elem){
  var uid;
  ButtonBase.call(this, $createElement($doc, 'span'));
  this.inputElem = elem;
  this.labelElem = $createElement($doc, 'label');
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

defineClass(25, 108, $intern_14, CheckBox, CheckBox_1);
_.getTabIndex = function getTabIndex_0(){
  return this.inputElem.tabIndex;
}
;
_.onLoad = function onLoad_0(){
  setEventListener(this.inputElem, this);
}
;
_.onUnload = function onUnload_0(){
  setEventListener(this.inputElem, null);
  $setValue_0(this, this.attached?($clinit_Boolean() , $isChecked(this.inputElem)?TRUE:FALSE):($clinit_Boolean() , $isDefaultChecked(this.inputElem)?TRUE:FALSE));
}
;
_.setTabIndex = function setTabIndex_0(index_0){
  !!this.inputElem && $setTabIndex(this.inputElem, index_0);
}
;
_.sinkEvents = function sinkEvents_0(eventBitsToAdd){
  this.eventsToSink == -1?$sinkEvents(this.inputElem, eventBitsToAdd | $getEventsSunk(this.inputElem)):this.eventsToSink == -1?$sinkEvents(this.element, eventBitsToAdd | $getEventsSunk(this.element)):(this.eventsToSink |= eventBitsToAdd);
}
;
var Lcom_google_gwt_user_client_ui_CheckBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CheckBox', 25);
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
  elem = widget.element;
  this$static.element = elem;
  ($clinit_PotentialElement() , isPotential(elem)) && $setResolver(elem, this$static);
  this$static.widget = widget;
  $setParent(widget, this$static);
}

defineClass(293, 6, $intern_14);
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
    $sinkEvents_0(this.widget, this.eventsToSink);
    this.eventsToSink = -1;
  }
  $onAttach(this.widget);
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
  $setElement(this, $resolvePotentialElement());
  return this.element;
}
;
var Lcom_google_gwt_user_client_ui_Composite_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Composite', 293);
function $animate(this$static, duration){
  $schedule_1(this$static.layoutCmd, duration);
}

function $doAfterLayout(this$static){
  var layer;
  if (this$static.hidingWidget) {
    layer = dynamicCast(this$static.hidingWidget.layoutData, 23);
    $setWidgetVisible(this$static.hidingWidget, layer, false);
    $layout(this$static.layout, 0, null);
    this$static.hidingWidget = null;
  }
}

function $doBeforeLayout(this$static){
  var direction, hDirection, newIndex, newLayer, oldIndex, oldLayer, vDirection;
  oldLayer = !this$static.lastVisibleWidget?null:dynamicCast(this$static.lastVisibleWidget.layoutData, 23);
  newLayer = !this$static.visibleWidget?null:dynamicCast(this$static.visibleWidget.layoutData, 23);
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
  before = beforeIndex < this$static.children_0.size_0?$get_0(this$static.children_0, beforeIndex):null;
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
  layer = $attachChild(this$static.layout, widget.element, before?before.element:null, widget);
  layer.visible = false;
  widget.setVisible(false);
  widget.layoutData = layer;
  $setParent(widget, this$static);
  $schedule_1(this$static.layoutCmd, 0);
}

function $remove_2(this$static, w){
  var layer, removed;
  removed = $remove_0(this$static, w);
  if (removed) {
    layer = dynamicCast(w.layoutData, 23);
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
  $showWidget_0(this$static, $get_0(this$static.children_0, index_0));
}

function $showWidget_0(this$static, widget){
  if (widget == this$static.visibleWidget) {
    return;
  }
  this$static.visibleWidget = widget;
  $animate(this$static, !widget?0:this$static.animationDuration);
}

defineClass(140, 64, $intern_16);
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
    instanceOf(child, 38) && dynamicCast(child, 38).onResize_0();
  }
}
;
_.remove_0 = function remove_2(w){
  return $remove_2(this, w);
}
;
_.animationDuration = 0;
_.isAnimationVertical = false;
var Lcom_google_gwt_user_client_ui_DeckLayoutPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DeckLayoutPanel', 140);
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

defineClass(104, 1, {}, LayoutCommand);
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
var Lcom_google_gwt_user_client_ui_LayoutCommand_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LayoutCommand', 104);
function $schedule_1(this$static, duration){
  $schedule_0(this$static, duration, new DeckLayoutPanel$DeckAnimateCommand$1(this$static));
}

function DeckLayoutPanel$DeckAnimateCommand(this$0, layout){
  this.this$01 = this$0;
  LayoutCommand.call(this, layout);
}

defineClass(143, 104, {}, DeckLayoutPanel$DeckAnimateCommand);
_.doBeforeLayout = function doBeforeLayout_0(){
  $doBeforeLayout(this.this$01);
}
;
_.schedule = function schedule_1(duration, callback){
  $schedule_1(this, duration);
}
;
var Lcom_google_gwt_user_client_ui_DeckLayoutPanel$DeckAnimateCommand_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DeckLayoutPanel/DeckAnimateCommand', 143);
function DeckLayoutPanel$DeckAnimateCommand$1(this$1){
  this.this$11 = this$1;
}

defineClass(144, 1, {}, DeckLayoutPanel$DeckAnimateCommand$1);
var Lcom_google_gwt_user_client_ui_DeckLayoutPanel$DeckAnimateCommand$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DeckLayoutPanel/DeckAnimateCommand/1', 144);
function $remove_3(this$static, w){
  if (this$static.widget != w) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    $removeChild(this$static.getContainerElement(), w.element);
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
    $appendChild(this$static.getContainerElement(), resolve(this$static.widget.element));
    $setParent(w, this$static);
  }
}

function SimplePanel(){
  SimplePanel_0.call(this, $createElement($doc, 'div'));
}

function SimplePanel_0(elem){
  $setElement(this, elem);
}

defineClass(62, 295, $intern_15, SimplePanel);
_.getContainerElement = function getContainerElement(){
  return this.element;
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
var Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SimplePanel', 62);
function $center(this$static){
  var elem, initiallyAnimated, initiallyShowing, left, top_0;
  initiallyShowing = this$static.showing;
  initiallyAnimated = this$static.isAnimationEnabled;
  if (!initiallyShowing) {
    $setPropertyImpl(this$static.element.style, 'visibility', 'hidden');
    this$static.isAnimationEnabled = false;
    !this$static.resizeHandlerRegistration && (this$static.resizeHandlerRegistration = addResizeHandler(new DialogBox$1(this$static)));
    $show(this$static);
  }
  elem = this$static.element;
  $setPropertyImpl(elem.style, 'left', ($clinit_Style$Unit() , '0.0px'));
  $setPropertyImpl(elem.style, 'top', '0.0px');
  left = $getClientWidth($doc) - $getPropertyInt(this$static.element, 'offsetWidth') >> 1;
  top_0 = $getClientHeight($doc) - $getPropertyInt(this$static.element, 'offsetHeight') >> 1;
  $setPopupPosition(this$static, max_0($getScrollLeft_0($doc) + left, 0), max_0($getScrollTop($doc) + top_0, 0));
  if (!initiallyShowing) {
    this$static.isAnimationEnabled = initiallyAnimated;
    if (initiallyAnimated) {
      $setClip(this$static.element, 'rect(0px, 0px, 0px, 0px)');
      $setPropertyImpl(this$static.element.style, 'visibility', 'visible');
      $run(this$static.resizeAnimation, 200, now_1(), null);
    }
     else {
      $setPropertyImpl(this$static.element.style, 'visibility', 'visible');
    }
  }
}

function $eventTargetsPopup(this$static, event_0){
  var target;
  target = event_0.srcElement;
  if (is_0(target)) {
    return isOrHasChildImpl(this$static.element, target);
  }
  return false;
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
  type_0 = $eventGetTypeInt(nativeEvent.type);
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
    case 1048576:
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
    case 4194304:
      {
        if (sCaptureElem) {
          event_0.isConsumed = true;
          return;
        }
        break;
      }

    case 2048:
      {
        target = nativeEvent.srcElement;
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
  left -= $getBodyOffsetLeft($doc);
  top_0 -= $getBodyOffsetTop($doc);
  elem = this$static.element;
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

defineClass(91, 62, $intern_15);
_.getContainerElement = function getContainerElement_0(){
  return $getFirstChildElement(this.element);
}
;
_.getStyleElement = function getStyleElement_0(){
  return $getParentElement($getFirstChildElement(this.element));
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
  this.element.style['visibility'] = visible?'visible':'hidden';
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
var Lcom_google_gwt_user_client_ui_PopupPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel', 91);
defineClass(224, 91, $intern_15);
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
var Lcom_google_gwt_user_client_ui_DecoratedPopupPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DecoratedPopupPanel', 224);
function $getCellElement(this$static){
  var td, tr;
  tr = this$static.tbody.children[0];
  td = tr.children[1];
  return $getFirstChildElement(td);
}

function DecoratorPanel(rowStyles){
  var i, row, table, trElem;
  SimplePanel_0.call(this, $createElement($doc, 'table'));
  table = this.element;
  this.tbody = $createElement($doc, 'tbody');
  $appendChild(table, resolve(this.tbody));
  $setPropertyInt(table, 'cellSpacing', 0);
  $setPropertyInt(table, 'cellPadding', 0);
  for (i = 0; i < rowStyles.length; i++) {
    row = (trElem = $createElement($doc, 'tr') , $setClassName(trElem, rowStyles[i]) , $appendChild(trElem, resolve(createTD(rowStyles[i] + 'Left'))) , $appendChild(trElem, resolve(createTD(rowStyles[i] + 'Center'))) , $appendChild(trElem, resolve(createTD(rowStyles[i] + 'Right'))) , trElem);
    $appendChild(this.tbody, resolve(row));
    i == 1 && (this.containerElem = $getFirstChildElement(row.children[1]));
  }
  $setClassName(this.element, 'gwt-DecoratorPanel');
}

function createTD(styleName){
  var inner, tdElem;
  tdElem = $createElement($doc, 'td');
  inner = $createElement($doc, 'div');
  $appendChild(tdElem, resolve(inner));
  $setClassName(tdElem, styleName);
  $setClassName(inner, styleName + 'Inner');
  return tdElem;
}

defineClass(248, 62, $intern_15, DecoratorPanel);
_.getContainerElement = function getContainerElement_1(){
  return this.containerElem;
}
;
var Lcom_google_gwt_user_client_ui_DecoratorPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DecoratorPanel', 248);
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
  target = event_0.srcElement;
  if (is_0(target)) {
    return isOrHasChildImpl($getParentElement($getCellElement(this$static.decPanel)), target);
  }
  return false;
}

function $onMouseDown(this$static, x_0, y_0){
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
    absX = x_0 + $getAbsoluteLeft(this$static.element);
    absY = y_0 + $getAbsoluteTop(this$static.element);
    if (absX < this$static.clientLeft_0 || absX >= this$static.windowWidth || absY < this$static.clientTop_0) {
      return;
    }
    $setPopupPosition(this$static, absX - this$static.dragStartX, absY - this$static.dragStartY);
  }
}

function $onMouseUp(this$static){
  this$static.dragging = false;
  releaseCapture(this$static.element);
}

function DialogBox(){
  DialogBox_0.call(this, new DialogBox$CaptionImpl);
}

function DialogBox_0(captionWidget){
  var mouseHandler, td, rowStyles;
  SimplePanel.call(this);
  this.glassResizer = new PopupPanel$1;
  this.isAnimationEnabled = false;
  this.leftPosition = -1;
  this.resizeAnimation = new PopupPanel$ResizeAnimation(this);
  this.topPosition = -1;
  $appendChild(this.element, $createElement($doc, 'div'));
  $setPopupPosition(this, 0, 0);
  $setClassName($getParentElement($getFirstChildElement(this.element)), 'gwt-PopupPanel');
  $setClassName($getFirstChildElement(this.element), 'popupContent');
  this.autoHide = false;
  this.autoHideOnHistoryEvents = false;
  this.modal = true;
  rowStyles = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 4, ['dialogTop', 'dialogMiddle', 'dialogBottom']);
  this.decPanel = new DecoratorPanel(rowStyles);
  $setStyleName(this.decPanel, '');
  setStylePrimaryName($getParentElement($getFirstChildElement(this.element)), 'gwt-DecoratedPopupPanel');
  $setWidget_0(this, this.decPanel);
  setStyleName($getFirstChildElement(this.element), 'popupContent', false);
  setStyleName(this.decPanel.containerElem, 'dialogContent', true);
  $removeFromParent_0(captionWidget);
  this.caption = captionWidget;
  td = $getCellElement(this.decPanel);
  $appendChild(td, resolve(this.caption.element));
  $adopt(this, this.caption);
  $setClassName($getParentElement($getFirstChildElement(this.element)), 'gwt-DialogBox');
  this.windowWidth = $getClientWidth($doc);
  this.clientLeft_0 = $getBodyOffsetLeft($doc);
  this.clientTop_0 = $getBodyOffsetTop($doc);
  mouseHandler = new DialogBox$MouseHandler(this);
  $addDomHandler(this, mouseHandler, ($clinit_MouseDownEvent() , $clinit_MouseDownEvent() , TYPE_1));
  $addDomHandler(this, mouseHandler, ($clinit_MouseUpEvent() , $clinit_MouseUpEvent() , TYPE_5));
  $addDomHandler(this, mouseHandler, ($clinit_MouseMoveEvent() , $clinit_MouseMoveEvent() , TYPE_2));
  $addDomHandler(this, mouseHandler, ($clinit_MouseOverEvent() , $clinit_MouseOverEvent() , TYPE_4));
  $addDomHandler(this, mouseHandler, ($clinit_MouseOutEvent() , $clinit_MouseOutEvent() , TYPE_3));
}

defineClass(69, 224, $intern_15, DialogBox);
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
  switch ($eventGetTypeInt(event_0.type)) {
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
  !event_0.isCanceled && $eventGetTypeInt(event_0.nativeEvent.type) == 4 && $isCaptionEvent(this, nativeEvent) && $eventPreventDefault(nativeEvent);
  event_0.isFirstHandler && (event_0.nativeEvent , false) && (event_0.isCanceled = true);
}
;
_.clientLeft_0 = 0;
_.clientTop_0 = 0;
_.dragStartX = 0;
_.dragStartY = 0;
_.dragging = false;
_.windowWidth = 0;
var Lcom_google_gwt_user_client_ui_DialogBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DialogBox', 69);
function DialogBox$1(this$0){
  this.this$01 = this$0;
}

defineClass(92, 1, $intern_17, DialogBox$1);
_.onResize = function onResize_1(event_0){
  this.this$01.windowWidth = event_0.width_0;
}
;
var Lcom_google_gwt_user_client_ui_DialogBox$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DialogBox/1', 92);
function LabelBase(element){
  $setElement(this, element);
  this.directionalTextHelper = new DirectionalTextHelper(this.element);
}

defineClass(75, 6, $intern_14);
var Lcom_google_gwt_user_client_ui_LabelBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LabelBase', 75);
function $setText(this$static, text_0){
  $setTextOrHtml(this$static.directionalTextHelper, text_0, false);
}

function Label(element){
  LabelBase.call(this, element, $equalsIgnoreCase('span', $getTagName(element)));
}

function Label_0(text_0){
  LabelBase.call(this, $createElement($doc, 'div'));
  $setClassName(this.element, 'gwt-Label');
  $setTextOrHtml(this.directionalTextHelper, text_0, false);
}

defineClass(65, 75, $intern_14, Label_0);
var Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Label', 65);
function HTML(){
  Label.call(this, $createElement($doc, 'div'));
  $setClassName(this.element, 'gwt-HTML');
}

function HTML_0(html){
  HTML.call(this);
  $setTextOrHtml(this.directionalTextHelper, html, true);
}

defineClass(16, 65, $intern_14, HTML_0);
var Lcom_google_gwt_user_client_ui_HTML_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTML', 16);
function DialogBox$CaptionImpl(){
  HTML.call(this);
  $setClassName(this.element, 'Caption');
}

defineClass(225, 16, $intern_14, DialogBox$CaptionImpl);
var Lcom_google_gwt_user_client_ui_DialogBox$CaptionImpl_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DialogBox/CaptionImpl', 225);
function DialogBox$MouseHandler(this$0){
  this.this$01 = this$0;
}

defineClass(226, 1, {313:1, 317:1, 315:1, 316:1, 314:1, 28:1}, DialogBox$MouseHandler);
var Lcom_google_gwt_user_client_ui_DialogBox$MouseHandler_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DialogBox/MouseHandler', 226);
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

defineClass(118, 1, {}, DirectionalTextHelper);
var Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DirectionalTextHelper', 118);
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
      throw new IllegalArgumentException('Only one CENTER widget may be added');
    }
  }
  $removeFromParent_0(widget);
  $add_7(this$static.children_0, widget);
  direction == CENTER_0 && (this$static.center = widget);
  layout = new DockPanel$LayoutData(direction);
  widget.layoutData = layout;
  $setCellHorizontalAlignment_0(widget, this$static.horzAlign);
  $setCellVerticalAlignment_1(widget, this$static.vertAlign);
  $realizeTable(this$static);
  $setParent(widget, this$static);
}

function $realizeTable(this$static){
  var bodyElem, centerTd, child, colCount, dir_0, i, it, it0, layout, logicalLeftCol, logicalRightCol, northRow, row, rowCount, rows_0, southRow, td;
  bodyElem = this$static.body_0;
  while (bodyElem.children.length > 0) {
    $removeChild(bodyElem, bodyElem.children[0]);
  }
  rowCount = 1;
  colCount = 1;
  for (it0 = new WidgetCollection$WidgetIterator(this$static.children_0); it0.index_0 < it0.this$01.size_0;) {
    child = $next_1(it0);
    dir_0 = dynamicCast(child.layoutData, 51).direction_0;
    dir_0 == NORTH || dir_0 == SOUTH?++rowCount:(dir_0 == EAST || dir_0 == WEST || dir_0 == LINE_START || dir_0 == LINE_END) && ++colCount;
  }
  rows_0 = initDim(Lcom_google_gwt_user_client_ui_DockPanel$TmpRow_2_classLit, $intern_3, 85, rowCount, 0, 1);
  for (i = 0; i < rowCount; ++i) {
    rows_0[i] = new DockPanel$TmpRow;
    rows_0[i].tr = $createElement($doc, 'tr');
    $appendChild(bodyElem, resolve(rows_0[i].tr));
  }
  logicalLeftCol = 0;
  logicalRightCol = colCount - 1;
  northRow = 0;
  southRow = rowCount - 1;
  centerTd = null;
  for (it = new WidgetCollection$WidgetIterator(this$static.children_0); it.index_0 < it.this$01.size_0;) {
    child = $next_1(it);
    layout = dynamicCast(child.layoutData, 51);
    td = $createElement($doc, 'td');
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
    $appendChild(centerTd, resolve(this$static.center.element));
  }
}

function $setCellHorizontalAlignment_0(w, align_0){
  var data_0;
  data_0 = dynamicCast(w.layoutData, 51);
  data_0.hAlign = align_0.textAlignString;
  !!data_0.td && $setPropertyString(data_0.td, 'align', align_0.textAlignString);
}

function $setCellVerticalAlignment_1(w, align_0){
  var data_0;
  data_0 = dynamicCast(w.layoutData, 51);
  data_0.vAlign = align_0.verticalAlignString;
  !!data_0.td && $setCellVerticalAlignment_0(data_0.td, align_0);
}

function $setHorizontalAlignment(this$static, align_0){
  this$static.horzAlign = align_0;
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
  $setPropertyInt(this.table, 'cellSpacing', 0);
  $setPropertyInt(this.table, 'cellPadding', 0);
}

defineClass(107, 84, $intern_15, DockPanel);
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
var Lcom_google_gwt_user_client_ui_DockPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DockPanel', 107);
function DockPanel$DockLayoutConstant(){
}

defineClass(44, 1, {}, DockPanel$DockLayoutConstant);
var Lcom_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DockPanel/DockLayoutConstant', 44);
function DockPanel$LayoutData(dir_0){
  this.hAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT).textAlignString;
  this.vAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP).verticalAlignString;
  this.direction_0 = dir_0;
}

defineClass(51, 1, {51:1}, DockPanel$LayoutData);
_.height = '';
_.width_0 = '';
var Lcom_google_gwt_user_client_ui_DockPanel$LayoutData_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DockPanel/LayoutData', 51);
function DockPanel$TmpRow(){
}

defineClass(85, 1, {85:1}, DockPanel$TmpRow);
_.center = 0;
var Lcom_google_gwt_user_client_ui_DockPanel$TmpRow_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DockPanel/TmpRow', 85);
function $add_2(this$static, w){
  $add(this$static, w, this$static.element);
}

function $insert_2(this$static, w, beforeIndex){
  $insert(this$static, w, this$static.element, beforeIndex);
}

function FlowPanel(){
  ComplexPanel.call(this);
  $setElement(this, $createElement($doc, 'div'));
}

defineClass(88, 64, $intern_15, FlowPanel);
var Lcom_google_gwt_user_client_ui_FlowPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FlowPanel', 88);
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

function $cleanCell(this$static, row, column, clearInnerHTML){
  var td;
  td = $getRawElement(this$static.cellFormatter, row, column);
  $internalClearCell(this$static, td, clearInnerHTML);
  return td;
}

function $internalClearCell(this$static, td, clearInnerHTML){
  var maybeChild, widget;
  maybeChild = $getFirstChildElement(td);
  widget = null;
  !!maybeChild && (widget = dynamicCast($get(this$static.widgetMap, maybeChild), 6));
  if (widget) {
    $remove_4(this$static, widget);
    return true;
  }
   else {
    clearInnerHTML && $setInnerHTML(td, '');
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
    elem = widget.element;
    $removeChild($getParentElement(elem), elem);
    $removeByElement(this$static.widgetMap, elem);
  }
  return true;
}

function $removeRow(this$static, row){
  var column, columnCount;
  columnCount = this$static.numColumns;
  for (column = 0; column < columnCount; ++column) {
    $cleanCell(this$static, row, column, false);
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

function $setWidget_1(this$static, row, column, widget){
  var td;
  $prepareCell(this$static, row, column);
  td = $cleanCell(this$static, row, column, true);
  $removeFromParent_0(widget);
  $put(this$static.widgetMap, widget);
  $appendChild(td, resolve(widget.element));
  $setParent(widget, this$static);
}

defineClass(200, 295, $intern_15);
_.iterator = function iterator_3(){
  return new HTMLTable$1(this);
}
;
_.remove_0 = function remove_6(widget){
  return $remove_4(this, widget);
}
;
var Lcom_google_gwt_user_client_ui_HTMLTable_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable', 200);
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
        td = $cleanCell(this$static, i, j, false);
        tr = $getRow(this$static.bodyElem, i);
        tr.removeChild(td);
      }
    }
  }
   else {
    for (i = 0; i < this$static.numRows; i++) {
      for (j = this$static.numColumns; j < columns; j++) {
        tr_0 = $getRow(this$static.bodyElem, i);
        td_0 = (td_1 = $createElement($doc, 'td') , $setInnerHTML(td_1, '&nbsp;') , td_1);
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
    addRows(this$static.bodyElem, rows_0 - this$static.numRows, this$static.numColumns);
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
  this.tableElem = $createElement($doc, 'table');
  this.bodyElem = $createElement($doc, 'tbody');
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

defineClass(113, 200, $intern_15, Grid);
_.numColumns = 0;
_.numRows = 0;
var Lcom_google_gwt_user_client_ui_Grid_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Grid', 113);
function $findNext(this$static){
  while (++this$static.nextIndex < this$static.widgetList.array.length) {
    if ($get_2(this$static.widgetList, this$static.nextIndex) != null) {
      return;
    }
  }
}

function $next(this$static){
  var result;
  if (this$static.nextIndex >= this$static.widgetList.array.length) {
    throw new NoSuchElementException;
  }
  result = dynamicCast($get_2(this$static.widgetList, this$static.nextIndex), 6);
  this$static.lastIndex_0 = this$static.nextIndex;
  $findNext(this$static);
  return result;
}

function HTMLTable$1(this$0){
  this.this$01 = this$0;
  this.widgetList = this.this$01.widgetMap.uiObjectList;
  $findNext(this);
}

defineClass(203, 1, {}, HTMLTable$1);
_.hasNext = function hasNext(){
  return this.nextIndex < this.widgetList.array.length;
}
;
_.next_0 = function next_0(){
  return $next(this);
}
;
_.remove_1 = function remove_7(){
  var w;
  if (this.lastIndex_0 < 0) {
    throw new IllegalStateException;
  }
  w = dynamicCast($get_2(this.widgetList, this.lastIndex_0), 6);
  $removeFromParent_0(w);
  this.lastIndex_0 = -1;
}
;
_.lastIndex_0 = -1;
_.nextIndex = -1;
var Lcom_google_gwt_user_client_ui_HTMLTable$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable/1', 203);
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

defineClass(201, 1, {}, HTMLTable$CellFormatter);
var Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable/CellFormatter', 201);
function $prepareColumnGroup(this$static){
  if (!this$static.columnGroup) {
    this$static.columnGroup = $createElement($doc, 'colgroup');
    insertChild(this$static.this$01.tableElem, this$static.columnGroup, 0);
    $appendChild(this$static.columnGroup, resolve($createElement($doc, 'col')));
  }
}

function $resizeColumnGroup(this$static, columns, growOnly){
  var i, num;
  columns = columns > 1?columns:1;
  num = this$static.columnGroup.childNodes.length;
  if (num < columns) {
    for (i = num; i < columns; i++) {
      $appendChild(this$static.columnGroup, $createElement($doc, 'col'));
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

defineClass(202, 1, {}, HTMLTable$ColumnFormatter);
var Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable/ColumnFormatter', 202);
function $getCells(row){
  return row.children;
}

function $getRow(tbody, row){
  return tbody.children[row];
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
defineClass(297, 1, {});
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/AutoHorizontalAlignmentConstant', 297);
function HasHorizontalAlignment$HorizontalAlignmentConstant(textAlignString){
  this.textAlignString = textAlignString;
}

defineClass(74, 297, {}, HasHorizontalAlignment$HorizontalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/HorizontalAlignmentConstant', 74);
function $clinit_HasVerticalAlignment(){
  $clinit_HasVerticalAlignment = emptyMethod;
  new HasVerticalAlignment$VerticalAlignmentConstant('bottom');
  new HasVerticalAlignment$VerticalAlignmentConstant('middle');
  ALIGN_TOP = new HasVerticalAlignment$VerticalAlignmentConstant('top');
}

var ALIGN_TOP;
function HasVerticalAlignment$VerticalAlignmentConstant(verticalAlignString){
  this.verticalAlignString = verticalAlignString;
}

defineClass(86, 1, {}, HasVerticalAlignment$VerticalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasVerticalAlignment/VerticalAlignmentConstant', 86);
function $add_3(this$static, w){
  var td, td_0;
  td = (td_0 = $createElement($doc, 'td') , $setPropertyString(td_0, 'align', this$static.horzAlign.textAlignString) , $setCellVerticalAlignment(td_0, this$static.vertAlign) , td_0);
  $appendChild(this$static.tableRow, resolve(td));
  $add(this$static, w, td);
}

function HorizontalPanel(){
  CellPanel.call(this);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  this.tableRow = $createElement($doc, 'tr');
  $appendChild(this.body_0, resolve(this.tableRow));
  $setPropertyString(this.table, 'cellSpacing', '0');
  $setPropertyString(this.table, 'cellPadding', '0');
}

defineClass(40, 84, $intern_15, HorizontalPanel);
_.remove_0 = function remove_8(w){
  var removed, td;
  td = $getParentElement(w.element);
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
  $setClassName(this.element, 'gwt-Image');
}

function Image_1(url_0){
  $clinit_Image();
  Image_0.call(this, ($clinit_UriUtils() , new SafeUriString(url_0)));
}

defineClass(52, 6, $intern_14, Image_1);
_.onBrowserEvent = function onBrowserEvent_2(event_0){
  $eventGetTypeInt(event_0.type) == $intern_13 && !!this.state && $setPropertyString(this.element, '__gwtLastUnhandledEvent', '');
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
  unhandledEvent = $getPropertyString(image.element, '__gwtLastUnhandledEvent');
  $equals('load', unhandledEvent) && (this$static.syntheticEventCommand = new Image$State$1(this$static, image) , $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), this$static.syntheticEventCommand));
}

defineClass(151, 1, {});
_.syntheticEventCommand = null;
var Lcom_google_gwt_user_client_ui_Image$State_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/State', 151);
function Image$State$1(this$1, val$image){
  this.this$11 = this$1;
  this.val$image2 = val$image;
}

defineClass(152, 1, {}, Image$State$1);
_.execute_1 = function execute_9(){
  var evt, evt_0;
  if (this.val$image2.state != this.this$11 || this != this.this$11.syntheticEventCommand) {
    return;
  }
  this.this$11.syntheticEventCommand = null;
  if (!this.val$image2.attached) {
    $setPropertyString(this.val$image2.element, '__gwtLastUnhandledEvent', 'load');
    return;
  }
  evt = (evt_0 = $doc.createEventObject() , evt_0.type = 'load' , evt_0);
  $dispatchEvent(this.val$image2.element, evt);
}
;
var Lcom_google_gwt_user_client_ui_Image$State$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/State/1', 152);
function Image$UnclippedState(image, url_0){
  $replaceElement(image, $createElement($doc, 'img'));
  $sinkEvents(image.element, $intern_13);
  image.eventsToSink == -1?$sinkEvents(image.element, 133398655 | $getEventsSunk(image.element)):(image.eventsToSink |= 133398655);
  !!image.state && $setPropertyString(image.element, '__gwtLastUnhandledEvent', '');
  $setSrc(image.element, url_0.uri_0);
}

defineClass(109, 151, {}, Image$UnclippedState);
var Lcom_google_gwt_user_client_ui_Image$UnclippedState_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/UnclippedState', 109);
function $onAnimationComplete(this$static){
  !!this$static.this$01.callback && $doAfterLayout(this$static.this$01.callback.this$11.this$01);
}

function LayoutCommand$1(this$0){
  this.this$01 = this$0;
}

defineClass(148, 1, {}, LayoutCommand$1);
var Lcom_google_gwt_user_client_ui_LayoutCommand$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LayoutCommand/1', 148);
function $add_4(this$static, widget){
  $insert_3(this$static, widget, this$static.children_0.size_0);
}

function $insert_3(this$static, widget, beforeIndex){
  var layer;
  $removeFromParent_0(widget);
  $insert_6(this$static.children_0, widget, beforeIndex);
  layer = $attachChild(this$static.layout, widget.element, null, widget);
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
    instanceOf(child, 38) && dynamicCast(child, 38).onResize_0();
  }
}

function $setWidgetLeftRight(this$static, child, leftUnit, rightUnit){
  $setLeftRight(dynamicCast(child.layoutData, 23), leftUnit, rightUnit);
  this$static.layoutCmd.schedule(0, null);
}

function $setWidgetTopBottom(this$static, child, topUnit, bottomUnit){
  $setTopBottom(dynamicCast(child.layoutData, 23), topUnit, bottomUnit);
  this$static.layoutCmd.schedule(0, null);
}

function $setWidgetTopHeight(this$static, child, topUnit, heightUnit){
  $setTopHeight(dynamicCast(child.layoutData, 23), 0, topUnit, 2.5, heightUnit);
  this$static.layoutCmd.schedule(0, null);
}

function $setWidgetVerticalPosition(this$static, child){
  dynamicCast(child.layoutData, 23).vPos = 1;
  this$static.layoutCmd.schedule(0, null);
}

function LayoutPanel(){
  ComplexPanel.call(this);
  $setElement(this, $createElement($doc, 'div'));
  this.layout = new Layout(this.element);
  this.layoutCmd = new LayoutCommand(this.layout);
}

defineClass(114, 64, $intern_16, LayoutPanel);
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
  removed && $removeChild_0(this.layout, dynamicCast(w.layoutData, 23));
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_LayoutPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LayoutPanel', 114);
function $checkIndex(this$static, index_0){
  if (index_0 < 0 || index_0 >= this$static.element.options.length) {
    throw new IndexOutOfBoundsException;
  }
}

function $getItemText(this$static, index_0){
  $checkIndex(this$static, index_0);
  return $getOptionText(this$static.element.options[index_0]);
}

function $getOptionText(option){
  var text_0, node;
  text_0 = option.text;
  (node = option.getAttributeNode('bidiwrapped') , !!(node && node.specified)) && text_0.length > 1 && (text_0 = $substring_0(text_0, 1, text_0.length - 1));
  return text_0;
}

function $insertItem(this$static, item_0){
  $insertItem_0(this$static, item_0, item_0, -1);
}

function $insertItem_0(this$static, item_0, value_0, index_0){
  var before, itemCount, option, select;
  select = this$static.element;
  option = $createElement($doc, 'option');
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
  $selectRemoveOption(this$static.element, index_0);
}

function $setSelectedIndex_0(this$static, index_0){
  $setSelectedIndex(this$static.element, index_0);
}

function ListBox(){
  FocusWidget.call(this, $createElement($doc, 'select'));
  $setClassName(this.element, 'gwt-ListBox');
}

defineClass(45, 87, $intern_14, ListBox);
var Lcom_google_gwt_user_client_ui_ListBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ListBox', 45);
function $setValue_1(this$static, value_0){
  this$static.element['value'] = value_0 != null?value_0:'';
}

function ValueBoxBase(elem){
  FocusWidget.call(this, elem);
}

defineClass(153, 87, $intern_14);
_.onBrowserEvent = function onBrowserEvent_3(event_0){
  var type_0;
  type_0 = $eventGetTypeInt(event_0.type);
  (type_0 & 896) != 0?$onBrowserEvent(this, event_0):$onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad_2(){
}
;
var Lcom_google_gwt_user_client_ui_ValueBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ValueBoxBase', 153);
function $clinit_TextBoxBase(){
  $clinit_TextBoxBase = emptyMethod;
  $clinit_ValueBoxBase$TextAlignment();
}

function TextBoxBase(elem){
  ValueBoxBase.call(this, elem, (!INSTANCE_1 && (INSTANCE_1 = new PassthroughRenderer) , !INSTANCE_0 && (INSTANCE_0 = new PassthroughParser)));
}

defineClass(110, 153, $intern_14);
var Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextBoxBase', 110);
function TextBox(){
  $clinit_TextBoxBase();
  TextBox_0.call(this, $createInputElement($doc, 'text'), 'gwt-TextBox');
}

function TextBox_0(element, styleName){
  TextBoxBase.call(this, element);
  $setClassName(this.element, styleName);
}

defineClass(53, 110, $intern_14, TextBox);
var Lcom_google_gwt_user_client_ui_TextBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextBox', 53);
function PasswordTextBox(){
  $clinit_TextBoxBase();
  TextBox_0.call(this, $createInputElement($doc, 'password'), 'gwt-PasswordTextBox');
}

defineClass(76, 53, $intern_14, PasswordTextBox);
var Lcom_google_gwt_user_client_ui_PasswordTextBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PasswordTextBox', 76);
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

defineClass(229, 1, $intern_17, PopupPanel$1);
_.onResize = function onResize_3(event_0){
  $onResize_0();
}
;
var Lcom_google_gwt_user_client_ui_PopupPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/1', 229);
function PopupPanel$3(this$0){
  this.this$01 = this$0;
}

defineClass(230, 1, {28:1, 311:1}, PopupPanel$3);
var Lcom_google_gwt_user_client_ui_PopupPanel$3_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/3', 230);
function PopupPanel$4(this$0){
  this.this$01 = this$0;
}

defineClass(231, 1, {312:1, 28:1}, PopupPanel$4);
var Lcom_google_gwt_user_client_ui_PopupPanel$4_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/4', 231);
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
  $setClip(this$static.curPanel.element, 'rect(auto, auto, auto, auto)');
  $setPropertyImpl(this$static.curPanel.element.style, 'overflow', 'visible');
}

function $onInstantaneousRun(this$static){
  $maybeShowGlass(this$static);
  if (this$static.showing) {
    $setPropertyImpl(this$static.curPanel.element.style, 'position', 'absolute');
    this$static.curPanel.topPosition != -1 && $setPopupPosition(this$static.curPanel, this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
    $add_0(($clinit_RootPanel() , get_1()), this$static.curPanel);
  }
   else {
    this$static.isUnloading || $remove_1(($clinit_RootPanel() , get_1()), this$static.curPanel);
  }
  $setPropertyImpl(this$static.curPanel.element.style, 'overflow', 'visible');
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
  $setClip(this$static.curPanel.element, 'rect(' + top_0 + 'px, ' + right + 'px, ' + bottom + 'px, ' + left + 'px)');
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
      $setPropertyImpl(this$static.curPanel.element.style, 'position', 'absolute');
      this$static.curPanel.topPosition != -1 && $setPopupPosition(this$static.curPanel, this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
      $setClip(this$static.curPanel.element, 'rect(0px, 0px, 0px, 0px)');
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

defineClass(227, 82, {}, PopupPanel$ResizeAnimation);
_.onComplete = function onComplete_1(){
  $onComplete_0(this);
}
;
_.onStart = function onStart_0(){
  this.offsetHeight_0 = $getPropertyInt(this.curPanel.element, 'offsetHeight');
  this.offsetWidth_0 = $getPropertyInt(this.curPanel.element, 'offsetWidth');
  $setPropertyImpl(this.curPanel.element.style, 'overflow', 'hidden');
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
var Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/ResizeAnimation', 227);
function PopupPanel$ResizeAnimation$1(this$1){
  this.this$11 = this$1;
  Timer.call(this);
}

defineClass(228, 117, {}, PopupPanel$ResizeAnimation$1);
_.run = function run_0(){
  this.this$11.showTimer = null;
  $run(this.this$11, 200, now_1(), null);
}
;
var Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/ResizeAnimation/1', 228);
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
    $sinkEvents(this$static.inputElem, eventBitsToAdd | $getEventsSunk(this$static.inputElem));
    $sinkEvents(this$static.labelElem, eventBitsToAdd | $getEventsSunk(this$static.labelElem));
  }
   else {
    this$static.eventsToSink == -1?$sinkEvents(this$static.inputElem, eventBitsToAdd | $getEventsSunk(this$static.inputElem)):this$static.eventsToSink == -1?$sinkEvents(this$static.element, eventBitsToAdd | $getEventsSunk(this$static.element)):(this$static.eventsToSink |= eventBitsToAdd);
  }
}

function RadioButton(name_0){
  CheckBox_0.call(this, $createInputRadioElement($doc, name_0));
  $setClassName(this.element, 'gwt-RadioButton');
  $sinkEvents_1(this, 1);
  $sinkEvents_1(this, 8);
  $sinkEvents_1(this, 4096);
  $sinkEvents_1(this, 128);
}

defineClass(111, 25, $intern_14, RadioButton);
_.onBrowserEvent = function onBrowserEvent_4(event_0){
  var target;
  switch ($eventGetTypeInt(event_0.type)) {
    case 8:
    case 4096:
    case 128:
      this.oldValue = this.attached?($clinit_Boolean() , $isChecked(this.inputElem)?TRUE:FALSE):($clinit_Boolean() , $isDefaultChecked(this.inputElem)?TRUE:FALSE);
      break;
    case 1:
      target = event_0.srcElement;
      if (is_0(target) && isOrHasChildImpl(this.labelElem, target)) {
        this.oldValue = this.attached?($clinit_Boolean() , $isChecked(this.inputElem)?TRUE:FALSE):($clinit_Boolean() , $isDefaultChecked(this.inputElem)?TRUE:FALSE);
        return;
      }

      $onBrowserEvent(this, event_0);
      fireIfNotEqual(this, this.oldValue, this.attached?($clinit_Boolean() , $isChecked(this.inputElem)?TRUE:FALSE):($clinit_Boolean() , $isDefaultChecked(this.inputElem)?TRUE:FALSE));
      return;
  }
  $onBrowserEvent(this, event_0);
}
;
_.sinkEvents = function sinkEvents_1(eventBitsToAdd){
  $sinkEvents_1(this, eventBitsToAdd);
}
;
var Lcom_google_gwt_user_client_ui_RadioButton_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RadioButton', 111);
defineClass(294, 293, {11:1, 8:1, 10:1, 9:1, 12:1, 38:1, 7:1, 6:1});
_.onResize_0 = function onResize_4(){
  $onResize(this.widget);
}
;
var Lcom_google_gwt_user_client_ui_ResizeComposite_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ResizeComposite', 294);
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

defineClass(204, 114, $intern_16, RootLayoutPanel);
_.onLoad = function onLoad_3(){
  $fillParent(this.layout.parentElem);
}
;
var singleton_0;
var Lcom_google_gwt_user_client_ui_RootLayoutPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootLayoutPanel', 204);
function RootLayoutPanel$1(this$0){
  this.this$01 = this$0;
}

defineClass(205, 1, $intern_17, RootLayoutPanel$1);
_.onResize = function onResize_5(event_0){
  $onResize(this.this$01);
}
;
var Lcom_google_gwt_user_client_ui_RootLayoutPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootLayoutPanel/1', 205);
function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  maybeDetachCommand = new RootPanel$1;
  rootPanels = new HashMap;
  widgetsToDetach = new HashSet;
}

function RootPanel(elem){
  ComplexPanel.call(this);
  this.element = elem;
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
  rp = dynamicCast($get_1(rootPanels, null), 79);
  if (rp) {
    return rp;
  }
  rootPanels.size_0 == 0 && addCloseHandler(new RootPanel$2);
  rp = new RootPanel$DefaultRootPanel;
  $put_0(rootPanels, null, rp);
  $add_10(widgetsToDetach, rp);
  return rp;
}

defineClass(79, 233, $intern_18);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel', 79);
function RootPanel$1(){
}

defineClass(235, 1, {}, RootPanel$1);
_.execute_2 = function execute_10(w){
  w.isAttached() && w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/1', 235);
function RootPanel$2(){
}

defineClass(236, 1, {310:1, 28:1}, RootPanel$2);
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/2', 236);
function RootPanel$DefaultRootPanel(){
  RootPanel.call(this, $doc.body);
}

defineClass(234, 79, $intern_18, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/DefaultRootPanel', 234);
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

defineClass(103, 1, {}, SimplePanel$1);
_.hasNext = function hasNext_0(){
  return this.hasElement;
}
;
_.next_0 = function next_1(){
  return $next_0(this);
}
;
_.remove_1 = function remove_10(){
  !!this.returned && this.this$01.remove_0(this.returned);
}
;
_.hasElement = false;
_.returned = null;
var Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SimplePanel/1', 103);
function $add_5(this$static, child){
  $insert_5(this$static, child, 'Logout', this$static.deckPanel.children_0.size_0);
}

function $insert_4(this$static, child, tab, beforeIndex){
  var idx;
  idx = $getWidgetIndex(this$static.deckPanel, child);
  if (idx != -1) {
    $remove_6(this$static, child);
    idx < beforeIndex && --beforeIndex;
  }
  $insert_0(this$static.deckPanel, child, beforeIndex);
  $add_8(this$static.tabs, beforeIndex, tab);
  $insert_2(this$static.tabBar, tab, beforeIndex);
  $addDomHandler(tab, new TabLayoutPanel$1(this$static, child), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
  setStyleName(child.getStyleElement(), 'gwt-TabLayoutPanelContent', true);
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
  tab = dynamicCast(this$static.tabs.remove_3(index_0), 63);
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
  this$static.selectedIndex_0 != -1 && $setSelected_0(dynamicCast($get_2(this$static.tabs, this$static.selectedIndex_0), 63), false);
  $showWidget(this$static.deckPanel, index_0);
  $setSelected_0(dynamicCast($get_2(this$static.tabs, index_0), 63), true);
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
  this.tabBar.element.style['width'] = '16384.0px';
  $setStyleName(this.tabBar, 'gwt-TabLayoutPanelTabs');
  $setClassName(this.element, 'gwt-TabLayoutPanel');
}

defineClass(139, 294, $intern_16, TabLayoutPanel);
_.iterator = function iterator_4(){
  return new WidgetCollection$WidgetIterator(this.deckPanel.children_0);
}
;
_.remove_0 = function remove_11(w){
  return $remove_6(this, w);
}
;
_.selectedIndex_0 = -1;
var Lcom_google_gwt_user_client_ui_TabLayoutPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TabLayoutPanel', 139);
function TabLayoutPanel$1(this$0, val$child){
  this.this$01 = this$0;
  this.val$child2 = val$child;
}

defineClass(142, 1, $intern_19, TabLayoutPanel$1);
_.onClick = function onClick(event_0){
  $selectTab_0(this.this$01, this.val$child2);
}
;
var Lcom_google_gwt_user_client_ui_TabLayoutPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TabLayoutPanel/1', 142);
function $setSelected_0(this$static, selected){
  selected?$setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-' + 'selected', true):$setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-' + 'selected', false);
}

function TabLayoutPanel$Tab(this$0, child){
  var style;
  this.this$01 = this$0;
  SimplePanel_0.call(this, $createElement($doc, 'div'));
  $appendChild(this.element, this.inner = $createElement($doc, 'div'));
  this.replacingWidget = true;
  $setWidget(this, child);
  this.replacingWidget = false;
  $setClassName(this.element, 'gwt-TabLayoutPanelTab');
  $setClassName(this.inner, 'gwt-TabLayoutPanelTabInner');
  $addClassName(this.element, (style = (!instance_0 && (instance_0 = new CommonResources_Bundle_ie8_default_InlineClientBundleGenerator) , $clinit_CommonResources_Bundle_ie8_default_InlineClientBundleGenerator$inlineBlockStyleInitializer() , inlineBlockStyle) , $ensureInjected(style) , 'GPBYFDEH'));
}

defineClass(63, 62, {11:1, 8:1, 10:1, 9:1, 17:1, 12:1, 63:1, 7:1, 6:1}, TabLayoutPanel$Tab);
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
var Lcom_google_gwt_user_client_ui_TabLayoutPanel$Tab_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TabLayoutPanel/Tab', 63);
function TabLayoutPanel$TabbedDeckLayoutPanel(this$0){
  this.this$01 = this$0;
  ComplexPanel.call(this);
  $setElement(this, $createElement($doc, 'div'));
  this.layout = new Layout(this.element);
  this.layoutCmd = new DeckLayoutPanel$DeckAnimateCommand(this, this.layout);
}

defineClass(141, 140, $intern_16, TabLayoutPanel$TabbedDeckLayoutPanel);
_.remove_0 = function remove_13(w){
  return $remove_6(this.this$01, w);
}
;
var Lcom_google_gwt_user_client_ui_TabLayoutPanel$TabbedDeckLayoutPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TabLayoutPanel/TabbedDeckLayoutPanel', 141);
function TextArea_0(){
  $clinit_TextBoxBase();
  TextBoxBase.call(this, $createElement($doc, 'textarea'));
  $setClassName(this.element, 'gwt-TextArea');
}

defineClass(112, 110, $intern_14, TextArea_0);
var Lcom_google_gwt_user_client_ui_TextArea_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextArea', 112);
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
  return initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, 1), $intern_3, 33, 0, [CENTER_1, JUSTIFY_0, LEFT_0, RIGHT_0]);
}

defineClass(33, 4, $intern_20);
var CENTER_1, JUSTIFY_0, LEFT_0, RIGHT_0;
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment', 33, values_7);
function ValueBoxBase$TextAlignment$1(){
  ValueBoxBase$TextAlignment.call(this, 'CENTER', 0);
}

defineClass(154, 33, $intern_20, ValueBoxBase$TextAlignment$1);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/1', 154, null);
function ValueBoxBase$TextAlignment$2(){
  ValueBoxBase$TextAlignment.call(this, 'JUSTIFY', 1);
}

defineClass(155, 33, $intern_20, ValueBoxBase$TextAlignment$2);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/2', 155, null);
function ValueBoxBase$TextAlignment$3(){
  ValueBoxBase$TextAlignment.call(this, 'LEFT', 2);
}

defineClass(156, 33, $intern_20, ValueBoxBase$TextAlignment$3);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/3', 156, null);
function ValueBoxBase$TextAlignment$4(){
  ValueBoxBase$TextAlignment.call(this, 'RIGHT', 3);
}

defineClass(157, 33, $intern_20, ValueBoxBase$TextAlignment$4);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/4', 157, null);
function $add_6(this$static, w){
  var td, tr, td_0;
  tr = $createElement($doc, 'tr');
  td = (td_0 = $createElement($doc, 'td') , $setPropertyString(td_0, 'align', this$static.horzAlign.textAlignString) , $setCellVerticalAlignment(td_0, this$static.vertAlign) , td_0);
  $appendChild(tr, resolve(td));
  $appendChild(this$static.body_0, resolve(tr));
  $add(this$static, w, td);
}

function VerticalPanel(){
  CellPanel.call(this);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  $setPropertyString(this.table, 'cellSpacing', '0');
  $setPropertyString(this.table, 'cellPadding', '0');
}

defineClass(30, 84, $intern_15, VerticalPanel);
_.remove_0 = function remove_14(w){
  var removed, td;
  td = $getParentElement(w.element);
  removed = $remove_0(this, w);
  removed && $removeChild(this.body_0, $getParentElement(td));
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'VerticalPanel', 30);
function $add_7(this$static, w){
  $insert_6(this$static, w, this$static.size_0);
}

function $get_0(this$static, index_0){
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

defineClass(232, 1, {}, WidgetCollection);
_.iterator = function iterator_5(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection', 232);
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

defineClass(41, 1, {}, WidgetCollection$WidgetIterator);
_.hasNext = function hasNext_1(){
  return this.index_0 < this.this$01.size_0;
}
;
_.next_0 = function next_2(){
  return $next_1(this);
}
;
_.remove_1 = function remove_15(){
  $remove_9(this);
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection/WidgetIterator', 41);
function $setClip(popup, rect){
  $setPropertyImpl(popup.style, 'clip', rect);
}

function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals('ie8', runtimeValue)) {
    throw new UserAgentAsserter$UserAgentAssertionError(runtimeValue);
  }
}

function Error_0(message){
  Throwable.call(this, message);
}

defineClass(81, 13, $intern_2);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 81);
defineClass(22, 81, $intern_2);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 22);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, '' + ('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 13)?dynamicCast('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 13):null);
}

defineClass(125, 22, $intern_2, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 125);
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

function $removeHandler(this$static){
  $doRemove(this$static.this$01, this$static.val$type2, this$static.val$source3, this$static.val$handler4);
}

function SimpleEventBus$1(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(216, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/1', 216);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(217, 1, {275:1}, SimpleEventBus$2);
_.execute_1 = function execute_11(){
  $doAddNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/2', 217);
function SimpleEventBus$3(this$0, val$type, val$source, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = val$source;
  this.val$handler4 = val$handler;
}

defineClass(218, 1, {275:1}, SimpleEventBus$3);
_.execute_1 = function execute_12(){
  $doRemoveNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$3_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/3', 218);
function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(101, 1, {});
_.toString$ = function toString_6(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 101);
function ArrayStoreException(){
  RuntimeException.call(this);
}

defineClass(73, 19, $intern_2, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 73);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
  FALSE = new Boolean_0(false);
  TRUE = new Boolean_0(true);
}

function Boolean_0(value_0){
  this.value_0 = value_0;
}

defineClass(48, 1, {3:1, 48:1, 5:1}, Boolean_0);
_.equals$ = function equals_2(o){
  return instanceOf(o, 48) && dynamicCast(o, 48).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_4(){
  return this.value_0?1231:1237;
}
;
_.toString$ = function toString_7(){
  return '' + this.value_0;
}
;
_.value_0 = false;
var FALSE, TRUE;
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 48);
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

defineClass(47, 19, $intern_2, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 47);
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

defineClass(99, 1, {3:1, 99:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 99);
function IllegalArgumentException(message){
  RuntimeException_0.call(this, message);
}

defineClass(55, 19, $intern_2, IllegalArgumentException);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 55);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(37, 19, $intern_2, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 37);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(20, 19, $intern_2, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 20);
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

defineClass(49, 99, {3:1, 5:1, 49:1, 99:1}, Integer);
_.equals$ = function equals_3(o){
  return instanceOf(o, 49) && dynamicCast(o, 49).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_5(){
  return this.value_0;
}
;
_.toString$ = function toString_9(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 49);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues_0 = initDim(Ljava_lang_Integer_2_classLit, $intern_3, 49, 256, 0, 1);
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

defineClass(67, 19, $intern_2, NullPointerException, NullPointerException_0);
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 67);
function NumberFormatException(message){
  IllegalArgumentException.call(this, message);
}

defineClass(78, 55, $intern_2, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 78);
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

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(s){
  AbstractStringBuilder.call(this, s);
}

defineClass(59, 101, {308:1}, StringBuilder, StringBuilder_0);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 59);
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(77, 19, $intern_2, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 77);
function $advanceToFind(this$static, o, remove){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext();) {
    e = iter.next_0();
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
    e = e$iterator.next_0();
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

function $toString_0(this$static){
  var comma, e, e$iterator, sb;
  sb = new StringBuilder_0('[');
  comma = false;
  for (e$iterator = this$static.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    comma?(sb.string += ', ' , sb):(comma = true);
    sb.string += e === this$static?'(this Collection)':'' + e;
  }
  sb.string += ']';
  return sb.string;
}

defineClass(291, 1, {});
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
_.toString$ = function toString_10(){
  return $toString_0(this);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 291);
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

function $toString_1(this$static, o){
  return o === this$static?'(this Map)':'' + o;
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(290, 1, {58:1});
_.equals$ = function equals_4(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 58)) {
    return false;
  }
  otherMap = dynamicCast(obj, 58);
  if (this.size_0 != otherMap.size_0) {
    return false;
  }
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(otherMap)).this$01); $hasNext(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext(entry$iterator)) , entry$iterator.last = entry$iterator.current , dynamicCast(entry$iterator.current.next_0(), 21));
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.hashCode$ = function hashCode_6(){
  return hashCode_11(new AbstractHashMap$EntrySet(this));
}
;
_.toString$ = function toString_11(){
  var comma, entry, entry$iterator, sb;
  sb = new StringBuilder_0('{');
  comma = false;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this)).this$01); $hasNext(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext(entry$iterator)) , entry$iterator.last = entry$iterator.current , dynamicCast(entry$iterator.current.next_0(), 21));
    comma?(sb.string += ', ' , sb):(comma = true);
    $append(sb, $toString_1(this, entry.getKey()));
    sb.string += '=';
    $append(sb, $toString_1(this, entry.getValue()));
  }
  sb.string += '}';
  return sb.string;
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 290);
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

function $get_1(this$static, key){
  return getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):!(this$static.stringMap.get_1(key) === undefined);
}

function $put_0(this$static, key, value_0){
  return isJavaString(key)?key == null?$put_1(this$static.hashCodeMap, null, value_0):this$static.stringMap.put(key, value_0):$put_1(this$static.hashCodeMap, key, value_0);
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

defineClass(134, 290, {58:1});
_.size_0 = 0;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 134);
defineClass(292, 291, {80:1});
_.equals$ = function equals_5(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 80)) {
    return false;
  }
  other = dynamicCast(o, 80);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode$ = function hashCode_7(){
  return hashCode_11(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 292);
function $contains(this$static, o){
  if (instanceOf(o, 21)) {
    return $containsEntry(this$static.this$01, dynamicCast(o, 21));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(60, 292, {80:1}, AbstractHashMap$EntrySet);
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
    key = dynamicCast(entry, 21).getKey();
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
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 60);
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
  return checkStructuralChange(this$static.this$01, this$static) , checkCriticalElement($hasNext(this$static)) , this$static.last = this$static.current , dynamicCast(this$static.current.next_0(), 21);
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

defineClass(61, 1, {}, AbstractHashMap$EntrySetIterator);
_.hasNext = function hasNext_2(){
  return $hasNext(this);
}
;
_.next_0 = function next_3(){
  return $next_2(this);
}
;
_.remove_1 = function remove_18(){
  $remove_11(this);
}
;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 61);
function $indexOf_0(this$static, toFind){
  var i, n;
  for (i = 0 , n = this$static.array.length; i < n; ++i) {
    if (equals_9(toFind, (checkElementIndex(i, this$static.array.length) , this$static.array[i]))) {
      return i;
    }
  }
  return -1;
}

defineClass(298, 291, {32:1});
_.add_0 = function add_1(index_0, element){
  throw new UnsupportedOperationException_0('Add not supported on this list');
}
;
_.add_1 = function add_2(obj){
  this.add_0(this.size_1(), obj);
  return true;
}
;
_.equals$ = function equals_6(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 32)) {
    return false;
  }
  other = dynamicCast(o, 32);
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext();) {
    elem = elem$iterator.next_0();
    elemOther = iterOther.next_0();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode$ = function hashCode_8(){
  return hashCode_12(this);
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
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 298);
function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(31, 1, {}, AbstractList$IteratorImpl);
_.hasNext = function hasNext_3(){
  return this.i < this.this$01_0.size_1();
}
;
_.next_0 = function next_4(){
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
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 31);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(115, 31, {}, AbstractList$ListIteratorImpl);
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous_0(){
  checkCriticalElement(this.i > 0);
  return this.this$01.get_0(this.last = --this.i);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 115);
function $iterator(this$static){
  var outerIter;
  outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.this$01)).this$01);
  return new AbstractMap$1$1(outerIter);
}

function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(102, 292, {80:1}, AbstractMap$1);
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
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 102);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(137, 1, {}, AbstractMap$1$1);
_.hasNext = function hasNext_4(){
  return $hasNext(this.val$outerIter2);
}
;
_.next_0 = function next_5(){
  var entry;
  entry = $next_2(this.val$outerIter2);
  return entry.getKey();
}
;
_.remove_1 = function remove_22(){
  $remove_11(this.val$outerIter2);
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 137);
defineClass(135, 1, $intern_21);
_.equals$ = function equals_7(other){
  var entry;
  if (!instanceOf(other, 21)) {
    return false;
  }
  entry = dynamicCast(other, 21);
  return equals_9(this.key, entry.getKey()) && equals_9(this.value_0, entry.getValue());
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
_.hashCode$ = function hashCode_9(){
  return hashCode_13(this.key) ^ hashCode_13(this.value_0);
}
;
_.setValue = function setValue(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString$ = function toString_12(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 135);
function AbstractMap$SimpleEntry(key, value_0){
  this.key = key;
  this.value_0 = value_0;
}

defineClass(136, 135, $intern_21, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 136);
defineClass(299, 1, $intern_21);
_.equals$ = function equals_8(other){
  var entry;
  if (!instanceOf(other, 21)) {
    return false;
  }
  entry = dynamicCast(other, 21);
  return equals_9(this.getKey(), entry.getKey()) && equals_9(this.getValue(), entry.getValue());
}
;
_.hashCode$ = function hashCode_10(){
  return hashCode_13(this.getKey()) ^ hashCode_13(this.getValue());
}
;
_.toString$ = function toString_13(){
  return this.getKey() + '=' + this.getValue();
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 299);
function $$init(this$static){
  this$static.array = initDim(Ljava_lang_Object_2_classLit, $intern_3, 1, 0, 3, 1);
}

function $add_8(this$static, index_0, o){
  checkPositionIndex(index_0, this$static.array.length);
  splice_0(this$static.array, index_0, 0, o);
}

function $add_9(this$static, o){
  setCheck(this$static.array, this$static.array.length, o);
  return true;
}

function $get_2(this$static, index_0){
  checkElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_1(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_9(o, this$static.array[index_0])) {
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

function $set_0(this$static, index_0, o){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  setCheck(this$static.array, index_0, o);
  return previous;
}

function $toArray(this$static, out){
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

defineClass(27, 298, $intern_22, ArrayList, ArrayList_0);
_.add_0 = function add_3(index_0, o){
  $add_8(this, index_0, o);
}
;
_.add_1 = function add_4(o){
  return $add_9(this, o);
}
;
_.contains_0 = function contains_2(o){
  return $indexOf_1(this, o, 0) != -1;
}
;
_.get_0 = function get_2(index_0){
  return $get_2(this, index_0);
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

defineClass(123, 298, $intern_22, Arrays$ArrayList);
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
var Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util', 'Arrays/ArrayList', 123);
function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
}

function hashCode_11(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function hashCode_12(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

var EMPTY_LIST;
function Collections$EmptyList(){
}

defineClass(206, 298, $intern_22, Collections$EmptyList);
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
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 206);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_2 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(207, 1, {}, Collections$EmptyListIterator);
_.hasNext = function hasNext_5(){
  return false;
}
;
_.hasPrevious = function hasPrevious_0(){
  return false;
}
;
_.next_0 = function next_6(){
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
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 207);
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

defineClass(267, 19, $intern_2, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 267);
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

defineClass(43, 134, {3:1, 58:1}, HashMap);
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 43);
function $add_10(this$static, o){
  var old;
  old = $put_0(this$static.map_0, o, this$static);
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

defineClass(96, 292, {3:1, 80:1}, HashSet);
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
_.toString$ = function toString_14(){
  return $toString_0(new AbstractMap$1(this.map_0));
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 96);
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

function $put_1(this$static, key, value_0){
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

defineClass(119, 1, {}, InternalJsHashCodeMap);
_.createMap = function createMap(){
  return Object.create(null);
}
;
_.entries = function entries(){
  return new InternalJsHashCodeMap$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap', 119);
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
  this.chain = initDim(Ljava_util_Map$Entry_2_classLit, $intern_3, 21, 0, 0, 1);
}

defineClass(242, 1, {}, InternalJsHashCodeMap$1);
_.hasNext = function hasNext_6(){
  return $hasNext_0(this);
}
;
_.next_0 = function next_7(){
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
var Ljava_util_InternalJsHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/1', 242);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy(){
  InternalJsHashCodeMap.call(this);
}

defineClass(240, 119, {}, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy);
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
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy', 240);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(241, 27, $intern_22, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1);
_.remove_3 = function remove_28(index_0){
  var removed;
  return removed = dynamicCast($remove_12(this, index_0), 21) , $remove_15(this.this$11, removed.getKey()) , removed;
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy/1', 241);
function InternalJsMapFactory(){
}

defineClass(237, 1, {}, InternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap(){
  return new InternalJsHashCodeMap;
}
;
_.createJsStringMap = function createJsStringMap(){
  return new InternalJsStringMap;
}
;
var Ljava_util_InternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory', 237);
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

defineClass(239, 237, {}, InternalJsMapFactory$KeysWorkaroundJsMapFactory);
_.createJsStringMap = function createJsStringMap_0(){
  return new InternalJsStringMap$InternalJsStringMapWithKeysWorkaround;
}
;
var Ljava_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/KeysWorkaroundJsMapFactory', 239);
function InternalJsMapFactory$LegacyInternalJsMapFactory(){
}

defineClass(238, 237, {}, InternalJsMapFactory$LegacyInternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap_0(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy;
}
;
_.createJsStringMap = function createJsStringMap_1(){
  return new InternalJsStringMap$InternalJsStringMapLegacy;
}
;
var Ljava_util_InternalJsMapFactory$LegacyInternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/LegacyInternalJsMapFactory', 238);
function $keys_0(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_2(this$static, key, value_0){
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

defineClass(89, 1, {}, InternalJsStringMap);
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
  return $put_2(this, key, value_0);
}
;
_.remove_4 = function remove_29(key){
  return $remove_16(this, key);
}
;
var Ljava_util_InternalJsStringMap_2_classLit = createForClass('java.util', 'InternalJsStringMap', 89);
function InternalJsStringMap$1(this$0, val$keys){
  this.this$01 = this$0;
  this.val$keys2 = val$keys;
}

defineClass(211, 1, {}, InternalJsStringMap$1);
_.hasNext = function hasNext_7(){
  return this.i < this.val$keys2.length;
}
;
_.next_0 = function next_8(){
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
var Ljava_util_InternalJsStringMap$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/1', 211);
function InternalJsStringMap$2(this$0, val$key){
  this.this$01 = this$0;
  this.val$key2 = val$key;
}

defineClass(116, 299, $intern_21, InternalJsStringMap$2);
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
var Ljava_util_InternalJsStringMap$2_2_classLit = createForClass('java.util', 'InternalJsStringMap/2', 116);
function InternalJsStringMap$InternalJsStringMapLegacy(){
  InternalJsStringMap.call(this);
}

defineClass(208, 89, {}, InternalJsStringMap$InternalJsStringMapLegacy);
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
  return $put_2(this, ':' + key, value_0);
}
;
_.remove_4 = function remove_31(key){
  return $remove_16(this, ':' + key);
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy', 208);
function InternalJsStringMap$InternalJsStringMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(210, 27, $intern_22, InternalJsStringMap$InternalJsStringMapLegacy$1);
_.remove_3 = function remove_32(index_0){
  var removed;
  return removed = dynamicCast($remove_12(this, index_0), 21) , $remove_16(this.this$11, ':' + dynamicCastToString(removed.getKey())) , removed;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy/1', 210);
function InternalJsStringMap$InternalJsStringMapWithKeysWorkaround(){
  InternalJsStringMap.call(this);
}

defineClass(209, 89, {}, InternalJsStringMap$InternalJsStringMapWithKeysWorkaround);
_.keys_1 = function keys_2(){
  var keys_0;
  keys_0 = $keys_0(this);
  !(this.backingMap['__proto__'] === undefined) && (keys_0[keys_0.length] = '__proto__');
  return keys_0;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapWithKeysWorkaround', 209);
var Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(46, 19, $intern_2, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 46);
function equals_9(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_13(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function Configuration(configString){
  var i, moduleStrings;
  this.modules = new ArrayList;
  moduleStrings = $split(configString, ';', 0);
  this.id_0 = __parseAndValidateInt(moduleStrings[0]);
  for (i = 1; i < moduleStrings.length; i++) {
    $add_9(this.modules, new Module_0(moduleStrings[i]));
  }
}

defineClass(253, 1, {}, Configuration);
_.toString$ = function toString_15(){
  var configString, m, m$iterator;
  configString = '' + this.id_0 + ';';
  for (m$iterator = new AbstractList$IteratorImpl(this.modules); m$iterator.i < m$iterator.this$01_0.size_1();) {
    m = (checkCriticalElement(m$iterator.i < m$iterator.this$01_0.size_1()) , dynamicCast(m$iterator.this$01_0.get_0(m$iterator.last = m$iterator.i++), 26));
    configString += $toString_2(m);
    configString += ';';
  }
  return $substring_0(configString, 0, configString.length - 2);
}
;
_.id_0 = -1;
var Lmhcs_client_Configuration_2_classLit = createForClass('mhcs.client', 'Configuration', 253);
function $clinit_Controller(){
  $clinit_Controller = emptyMethod;
  new Module;
}

function setType(id_0, type_0){
  $clinit_Controller();
  var closeButton, details, dialogContents, image, intModId, modId, typeDialogBox;
  modId = $getPropertyString(id_0.element, 'value');
  if ($equals(modId, '')) {
    return;
  }
   else {
    intModId = __parseAndValidateInt(modId);
  }
  if (0 < intModId && intModId < 41) {
    $checkIndex(type_0, 0);
    $setSelected(type_0.element.options[0], true);
  }
   else if (60 < intModId && intModId < 81) {
    $checkIndex(type_0, 1);
    $setSelected(type_0.element.options[1], true);
  }
   else if (90 < intModId && intModId < 101) {
    $checkIndex(type_0, 2);
    $setSelected(type_0.element.options[2], true);
  }
   else if (110 < intModId && intModId < 121) {
    $checkIndex(type_0, 3);
    $setSelected(type_0.element.options[3], true);
  }
   else if (130 < intModId && intModId < 135) {
    $checkIndex(type_0, 4);
    $setSelected(type_0.element.options[4], true);
  }
   else if (140 < intModId && intModId < 145) {
    $checkIndex(type_0, 5);
    $setSelected(type_0.element.options[5], true);
  }
   else if (150 < intModId && intModId < 155) {
    $checkIndex(type_0, 6);
    $setSelected(type_0.element.options[6], true);
  }
   else if (160 < intModId && intModId < 165) {
    $checkIndex(type_0, 7);
    $setSelected(type_0.element.options[7], true);
  }
   else if (170 < intModId && intModId < 175) {
    $checkIndex(type_0, 8);
    $setSelected(type_0.element.options[8], true);
  }
   else if (180 < intModId && intModId < 185) {
    $checkIndex(type_0, 9);
    $setSelected(type_0.element.options[9], true);
  }
   else {
    typeDialogBox = new DialogBox;
    $setText(typeDialogBox.caption, 'ID Error');
    dialogContents = new VerticalPanel;
    $setPropertyInt(dialogContents.table, 'cellSpacing', 4);
    $setWidget(typeDialogBox.decPanel, dialogContents);
    $maybeUpdateSize(typeDialogBox);
    details = new HTML_0('You have entered an incorrect Module ID.');
    $add_6(dialogContents, details);
    $setCellHorizontalAlignment(dialogContents, details, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
    image = new Image_1('images/error');
    $add_6(dialogContents, image);
    $setCellHorizontalAlignment(dialogContents, image, ALIGN_CENTER);
    closeButton = new Button_1(new Controller$1(typeDialogBox));
    $add_6(dialogContents, closeButton);
    $setCellHorizontalAlignment(dialogContents, closeButton, ALIGN_RIGHT);
    $center(typeDialogBox);
    !typeDialogBox.resizeHandlerRegistration && (typeDialogBox.resizeHandlerRegistration = addResizeHandler(new DialogBox$1(typeDialogBox)));
    $show(typeDialogBox);
  }
}

function Controller$1(val$typeDialogBox){
  this.val$typeDialogBox1 = val$typeDialogBox;
}

defineClass(199, 1, $intern_19, Controller$1);
_.onClick = function onClick_0(event_0){
  $hide_0(this.val$typeDialogBox1, false);
}
;
var Lmhcs_client_Controller$1_2_classLit = createForClass('mhcs.client', 'Controller/1', 199);
function $updateGrid(this$static){
  var coordinate, i, image, x_0, y_0;
  this$static.modList = getModuleList();
  for (i = 0; i < this$static.modList.array.length; ++i) {
    coordinate = dynamicCast($get_2(this$static.modList, i), 26).coordinates;
    x_0 = coordinate.x_0;
    y_0 = coordinate.y_0;
    image = new Image_1('http://icons.iconarchive.com/icons/mazenl77/I-like-buttons-3a/512/Cute-Ball-Go-icon.png');
    $setWidget_1(this$static.grid, y_0 + 1, x_0 + 1, image);
  }
}

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

defineClass(158, 1, {}, Map_0);
_.gCol = 0;
_.gRow = 0;
var Lmhcs_client_Map_2_classLit = createForClass('mhcs.client', 'Map', 158);
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

function $toString_2(this$static){
  var storeString;
  storeString = '';
  storeString += $toString(this$static.type_0) + ',';
  storeString += '' + this$static.id_0 + ',';
  storeString += $toString_3(this$static.coordinates) + ',';
  storeString += $toString(this$static.status_0) + ',';
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

defineClass(26, 1, {26:1}, Module, Module_0, Module_1);
_.toString$ = function toString_16(){
  return $toString_2(this);
}
;
_.id_0 = 0;
_.inUse = false;
_.orientation = 0;
var moduleStrings_0;
var Lmhcs_client_Module_2_classLit = createForClass('mhcs.client', 'Module', 26);
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
  return initValues(getClassLiteralForArray(Lmhcs_client_ModuleStatus_2_classLit, 1), $intern_3, 70, 0, [USABLE, USABLEAFTERREPAIR, BEYONDREPAIR]);
}

defineClass(70, 4, {3:1, 5:1, 4:1, 70:1}, ModuleStatus);
var BEYONDREPAIR, USABLE, USABLEAFTERREPAIR;
var Lmhcs_client_ModuleStatus_2_classLit = createForEnum('mhcs.client', 'ModuleStatus', 70, values_8);
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
  return initValues(getClassLiteralForArray(Lmhcs_client_ModuleType_2_classLit, 1), $intern_3, 29, 0, [AIRLOCK, FOODWATERSTORAGE, POWER, CONTROL, CANTEEN, PLAIN, DORMITORY, SANITATION, GYMRELAXATION, MEDICAL]);
}

defineClass(29, 4, {3:1, 5:1, 4:1, 29:1}, ModuleType);
var AIRLOCK, CANTEEN, CONTROL, DORMITORY, FOODWATERSTORAGE, GYMRELAXATION, MEDICAL, PLAIN, POWER, SANITATION;
var Lmhcs_client_ModuleType_2_classLit = createForEnum('mhcs.client', 'ModuleType', 29, values_9);
function $toString_3(this$static){
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

defineClass(93, 1, {}, Point, Point_0);
_.toString$ = function toString_17(){
  return $toString_3(this);
}
;
_.x_0 = 0;
_.y_0 = 0;
var Lmhcs_client_Point_2_classLit = createForClass('mhcs.client', 'Point', 93);
function $onModuleLoad_0(){
  var addUserButton, buildConfigButton, cPass, cPassword, changePassword, changePasswordButton, coPass, coPassword, configDock, configHorPanel, configListBox, configVerPanel, confirmPassword, currentPassword, deleteConfigButton, i, loginPanel, m, m$iterator, map_0, mapDisplay, moduleCoordinates, moduleDetails, moduleDetailsLabel, moduleRequirements, moduleRequirementsLabel, modulesAddButton, modulesCenterVerPanel, modulesDock, modulesEastCondition, modulesEastId, modulesEastOrientation, modulesEastType, modulesEastVerPanel, modulesImage, modulesLblCondition, modulesLblId, modulesLblOrientation, modulesLblType, modulesListBox, modulesRemoveButton, modulesSaveButton, modulesSouthVerPanel, modulesWestHorPanel, modulesWestVerPanel, nPass, nPassword, newPassword, passwordEnable, passwordEntry, radAirLock, radAll, radCanteen, radControl, radDorm, radFoodAndWater, radGymAndRelax, radMedical, radNone, radPlain, radPower, radSanitation, removeUserButton, roverPathButton, settingsPassPanel, settingsPassVertPanel, settingsUserPanel, settingsVertPanel, submitButton, tabPanel, testCases, userNameEntry, users, weatherPanel, xCoordinate, xPanel, xTextBox, yCoordinate, yPanel, yTextBox;
  tabPanel = new TabLayoutPanel(($clinit_Style$Unit() , EM));
  loginPanel = new FlowPanel;
  modulesDock = new DockPanel;
  configDock = new DockPanel;
  modulesWestHorPanel = new HorizontalPanel;
  moduleCoordinates = new HorizontalPanel;
  configHorPanel = new HorizontalPanel;
  settingsUserPanel = new HorizontalPanel;
  settingsPassPanel = new HorizontalPanel;
  currentPassword = new HorizontalPanel;
  newPassword = new HorizontalPanel;
  confirmPassword = new HorizontalPanel;
  weatherPanel = new SimplePanel;
  settingsPassVertPanel = new VerticalPanel;
  modulesWestVerPanel = new VerticalPanel;
  modulesCenterVerPanel = new VerticalPanel;
  modulesSouthVerPanel = new VerticalPanel;
  modulesEastVerPanel = new VerticalPanel;
  xPanel = new VerticalPanel;
  yPanel = new VerticalPanel;
  configVerPanel = new VerticalPanel;
  settingsVertPanel = new VerticalPanel;
  submitButton = new Button_0('Log In');
  modulesAddButton = new Button;
  modulesRemoveButton = new Button;
  roverPathButton = new Button;
  deleteConfigButton = new Button;
  buildConfigButton = new Button;
  addUserButton = new Button;
  removeUserButton = new Button;
  changePasswordButton = new Button;
  radAirLock = new CheckBox_1('Air Lock');
  radPlain = new CheckBox_1('Plain');
  radDorm = new CheckBox_1('Dormitory');
  radSanitation = new CheckBox_1('Sanitation');
  radFoodAndWater = new CheckBox_1('Food & Water');
  radGymAndRelax = new CheckBox_1('Gym & Relaxation');
  radCanteen = new CheckBox_1('Canteen');
  radPower = new CheckBox_1('Power');
  radControl = new CheckBox_1('Control');
  radMedical = new CheckBox_1('Medical');
  passwordEnable = new CheckBox;
  moduleDetailsLabel = new HTML_0('Module Details');
  moduleRequirementsLabel = new HTML_0('Module Requirements');
  modulesLblId = new HTML_0('ID Number');
  modulesLblType = new HTML_0('Type');
  modulesLblCondition = new HTML_0('Condition');
  modulesLblOrientation = new HTML_0('Orientation');
  xCoordinate = new HTML_0('X-Coordinate');
  yCoordinate = new HTML_0('Y-Coordinate');
  changePassword = new HTML_0('Change Password');
  cPass = new HTML_0('Current Password');
  nPass = new HTML_0('New Password');
  coPass = new HTML_0('Current Password');
  new HTML_0('Place holder for the weather');
  modulesImage = new Image_1('images/image');
  map_0 = new Image_1('images/marsMap');
  modulesListBox = new ListBox;
  modulesEastType = new ListBox;
  modulesEastCondition = new ListBox;
  modulesEastOrientation = new ListBox;
  configListBox = new ListBox;
  users = new ListBox;
  testCases = new ListBox;
  cPassword = new PasswordTextBox;
  nPassword = new PasswordTextBox;
  coPassword = new PasswordTextBox;
  radAll = new RadioButton('Select All');
  radNone = new RadioButton('Deselect All');
  moduleDetails = new TextArea_0;
  moduleRequirements = new TextArea_0;
  userNameEntry = new TextBox;
  passwordEntry = new PasswordTextBox;
  modulesEastId = new TextBox;
  xTextBox = new TextBox;
  yTextBox = new TextBox;
  mapDisplay = new Map_0;
  tabPanel.deckPanel.animationDuration = 1000;
  tabPanel.element.style['marginBottom'] = '10.0px';
  $setPropertyImpl(loginPanel.element.style, 'height', '1500px');
  $add_2(loginPanel, new Label_0('username:'));
  $add(loginPanel, userNameEntry, loginPanel.element);
  $add_2(loginPanel, new Label_0('password:'));
  $add(loginPanel, passwordEntry, loginPanel.element);
  $add(loginPanel, submitButton, loginPanel.element);
  $addDomHandler(submitButton, new View$1(passwordEntry, tabPanel), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
  $setSize(modulesListBox.element, 10);
  $setPropertyImpl(modulesListBox.element.style, 'height', '600px');
  $setPropertyImpl(modulesListBox.element.style, 'width', '300px');
  $selectClear(modulesListBox.element);
  for (m$iterator = new AbstractList$IteratorImpl(getModuleList()); m$iterator.i < m$iterator.this$01_0.size_1();) {
    m = (checkCriticalElement(m$iterator.i < m$iterator.this$01_0.size_1()) , dynamicCast(m$iterator.this$01_0.get_0(m$iterator.last = m$iterator.i++), 26));
    $insertItem(modulesListBox, 'Module #' + m.id_0);
  }
  $addDomHandler(modulesListBox, new View$2(modulesListBox, modulesEastId, modulesEastType, modulesEastCondition, modulesEastOrientation, xTextBox, yTextBox), ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE));
  $setPropertyImpl(modulesAddButton.element.style, 'height', '50px');
  $setPropertyImpl(modulesAddButton.element.style, 'width', '150px');
  $setPropertyImpl(modulesRemoveButton.element.style, 'height', '50px');
  $setPropertyImpl(modulesRemoveButton.element.style, 'width', '150px');
  $setInnerText(modulesAddButton.element, 'ADD');
  $setInnerText(modulesRemoveButton.element, 'REMOVE');
  $addDomHandler(modulesRemoveButton, new View$3(modulesListBox), (null , TYPE_0));
  $add_3(modulesWestHorPanel, modulesAddButton);
  $add_3(modulesWestHorPanel, modulesRemoveButton);
  $add_6(modulesWestVerPanel, modulesListBox);
  $add_6(modulesWestVerPanel, modulesWestHorPanel);
  $setPropertyImpl(modulesImage.element.style, 'height', '200px');
  $setPropertyImpl(modulesImage.element.style, 'width', '250px');
  $setPropertyImpl(moduleDetails.element.style, 'height', '175px');
  $setPropertyImpl(moduleDetails.element.style, 'width', '800px');
  $add_6(modulesCenterVerPanel, moduleDetailsLabel);
  $add_6(modulesCenterVerPanel, moduleDetails);
  $setPropertyString(moduleRequirements.element, 'value', 'module requirements module requirements module requirements');
  $setPropertyBoolean(moduleRequirements.element, 'readOnly', true);
  $setStyleName_0(moduleRequirements, getStylePrimaryName(moduleRequirements.element) + '-' + 'readonly', true);
  $setPropertyImpl(moduleRequirements.element.style, 'height', '175px');
  $setPropertyImpl(moduleRequirements.element.style, 'width', '800px');
  $add_6(modulesSouthVerPanel, moduleRequirementsLabel);
  $add_6(modulesSouthVerPanel, moduleRequirements);
  $setPropertyImpl(modulesEastId.element.style, 'width', '300px');
  for (i = 0; i < ($clinit_Module() , moduleStrings_0).length; i++) {
    $insertItem(modulesEastType, moduleStrings_0[i]);
  }
  $setSize(modulesEastType.element, 10);
  $setPropertyBoolean(modulesEastType.element, 'disabled', true);
  $setPropertyImpl(modulesEastType.element.style, 'width', '300px');
  setType(modulesEastId, modulesEastType);
  $insertItem_0(modulesEastCondition, 'Usable', 'Usable', -1);
  $insertItem_0(modulesEastCondition, 'Damaged', 'Damaged', -1);
  $insertItem_0(modulesEastCondition, 'Unusable', 'Unusable', -1);
  $setSize(modulesEastCondition.element, 3);
  $setPropertyImpl(modulesEastCondition.element.style, 'width', '300px');
  $insertItem_0(modulesEastOrientation, '0 turns', '0 turns', -1);
  $insertItem_0(modulesEastOrientation, '1 turns', '1 turns', -1);
  $insertItem_0(modulesEastOrientation, '2 turns', '2 turns', -1);
  $setSize(modulesEastOrientation.element, 3);
  $setPropertyImpl(modulesEastOrientation.element.style, 'width', '300px');
  $setPropertyImpl(xTextBox.element.style, 'width', '140px');
  $setPropertyImpl(yTextBox.element.style, 'width', '140px');
  $add_6(xPanel, xCoordinate);
  $add_6(xPanel, xTextBox);
  $add_6(yPanel, yCoordinate);
  $add_6(yPanel, yTextBox);
  $add_3(moduleCoordinates, xPanel);
  $add_3(moduleCoordinates, yPanel);
  modulesSaveButton = new Button;
  $setPropertyImpl(modulesSaveButton.element.style, 'height', '50px');
  $setPropertyImpl(modulesSaveButton.element.style, 'width', '300px');
  $setInnerText(modulesSaveButton.element, 'SAVE');
  $addDomHandler(modulesSaveButton, new View$4(modulesEastType, modulesEastId, xTextBox, yTextBox, modulesEastCondition, modulesEastOrientation, modulesListBox), (null , TYPE_0));
  $add_6(modulesEastVerPanel, modulesLblId);
  $add_6(modulesEastVerPanel, modulesEastId);
  $add_6(modulesEastVerPanel, modulesLblType);
  $add_6(modulesEastVerPanel, modulesEastType);
  $add_6(modulesEastVerPanel, modulesLblCondition);
  $add_6(modulesEastVerPanel, modulesEastCondition);
  $add_6(modulesEastVerPanel, modulesLblOrientation);
  $add_6(modulesEastVerPanel, modulesEastOrientation);
  $add_6(modulesEastVerPanel, moduleCoordinates);
  $add_6(modulesEastVerPanel, modulesSaveButton);
  $setPropertyInt(modulesEastVerPanel.table, 'cellSpacing', 12);
  $setPropertyInt(modulesDock.table, 'cellSpacing', 5);
  $setHorizontalAlignment(modulesDock, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  $setPropertyString(modulesDock.table, 'border', '2');
  $setPropertyImpl(modulesDock.element.style, 'width', '1500px');
  $setPropertyImpl(modulesDock.element.style, 'height', '600px');
  $add_1(modulesDock, new HTML_0('Modules'), ($clinit_DockPanel() , NORTH));
  $add_1(modulesDock, new HTML_0('Naples Spring 2015'), SOUTH);
  $add_1(modulesDock, modulesEastVerPanel, EAST);
  $add_1(modulesDock, modulesWestVerPanel, WEST);
  $add_1(modulesDock, modulesImage, NORTH);
  $add_1(modulesDock, modulesSouthVerPanel, SOUTH);
  $add_1(modulesDock, modulesCenterVerPanel, CENTER_0);
  $setSize(configListBox.element, 10);
  $setPropertyImpl(configListBox.element.style, 'height', '650px');
  $setPropertyImpl(configListBox.element.style, 'width', '300px');
  $setPropertyImpl(map_0.element.style, 'height', '560px');
  $setPropertyImpl(map_0.element.style, 'width', '1000px');
  $setTextOrHtml(radAirLock.directionalTextHelper, 'Air Lock', false);
  $setTextOrHtml(radPlain.directionalTextHelper, 'Plain', false);
  $setTextOrHtml(radDorm.directionalTextHelper, 'Dormitory', false);
  $setTextOrHtml(radSanitation.directionalTextHelper, 'Sanitation', false);
  $setTextOrHtml(radFoodAndWater.directionalTextHelper, 'Food & Water', false);
  $setTextOrHtml(radGymAndRelax.directionalTextHelper, 'Gym & Relaxation', false);
  $setTextOrHtml(radCanteen.directionalTextHelper, 'Canteen', false);
  $setTextOrHtml(radPower.directionalTextHelper, 'Power', false);
  $setTextOrHtml(radControl.directionalTextHelper, 'Control', false);
  $setTextOrHtml(radMedical.directionalTextHelper, 'Medical', false);
  $setTextOrHtml(radNone.directionalTextHelper, 'Deselect All', false);
  $setTextOrHtml(radAll.directionalTextHelper, 'Select All', false);
  $replaceInputElement(radAll, $createInputRadioElement($doc, 'MapModules'));
  $replaceInputElement(radNone, $createInputRadioElement($doc, 'MapModules'));
  $add_6(configVerPanel, radAirLock);
  $add_6(configVerPanel, radPlain);
  $add_6(configVerPanel, radDorm);
  $add_6(configVerPanel, radSanitation);
  $add_6(configVerPanel, radFoodAndWater);
  $add_6(configVerPanel, radGymAndRelax);
  $add_6(configVerPanel, radCanteen);
  $add_6(configVerPanel, radPower);
  $add_6(configVerPanel, radControl);
  $add_6(configVerPanel, radMedical);
  $add_6(configVerPanel, radAll);
  $add_6(configVerPanel, radNone);
  $setPropertyImpl(configVerPanel.element.style, 'height', '600px');
  $setPropertyImpl(roverPathButton.element.style, 'height', '50px');
  $setPropertyImpl(roverPathButton.element.style, 'width', '300px');
  $setPropertyImpl(deleteConfigButton.element.style, 'height', '50px');
  $setPropertyImpl(deleteConfigButton.element.style, 'width', '300px');
  $setPropertyImpl(buildConfigButton.element.style, 'height', '50px');
  $setPropertyImpl(buildConfigButton.element.style, 'width', '300px');
  $setInnerText(roverPathButton.element, 'Rover Path');
  $setInnerText(deleteConfigButton.element, 'Delete Configuration');
  $setInnerText(buildConfigButton.element, 'Build Configuration');
  $add_3(configHorPanel, roverPathButton);
  $add_3(configHorPanel, deleteConfigButton);
  $add_3(configHorPanel, buildConfigButton);
  $setPropertyInt(configDock.table, 'cellSpacing', 5);
  $setHorizontalAlignment(configDock, ALIGN_CENTER);
  $setPropertyString(configDock.table, 'border', '2');
  $setPropertyImpl(configDock.element.style, 'width', '1500px');
  $setPropertyImpl(configDock.element.style, 'height', '600px');
  $add_1(configDock, new HTML_0('Configurations'), NORTH);
  $add_1(configDock, new HTML_0('Naples Spring 2015'), SOUTH);
  $add_1(configDock, configVerPanel, EAST);
  $add_1(configDock, configListBox, WEST);
  $add_1(configDock, mapDisplay.grid, CENTER_0);
  $add_1(configDock, new HTML_0('Map'), NORTH);
  $add_1(configDock, configHorPanel, SOUTH);
  $updateGrid(mapDisplay);
  $setInnerText(addUserButton.element, 'Add User');
  $setInnerText(removeUserButton.element, 'Remove User');
  $setPropertyImpl(addUserButton.element.style, 'height', '35px');
  $setPropertyImpl(addUserButton.element.style, 'width', '130px');
  $setPropertyImpl(removeUserButton.element.style, 'height', '35px');
  $setPropertyImpl(removeUserButton.element.style, 'width', '130px');
  $add_3(settingsUserPanel, users);
  $add_3(settingsUserPanel, addUserButton);
  $add_3(settingsUserPanel, removeUserButton);
  $setPropertyInt(settingsUserPanel.table, 'cellSpacing', 10);
  $insertItem_0(testCases, 'No Test Case Selected', 'No Test Case Selected', -1);
  $insertItem_0(testCases, 'Test Case 1', 'Test Case 1', -1);
  $insertItem_0(testCases, 'Test Case 2', 'Test Case 2', -1);
  $insertItem_0(testCases, 'Test Case 3', 'Test Case 3', -1);
  $insertItem_0(testCases, 'Test Case 4', 'Test Case 4', -1);
  $insertItem_0(testCases, 'Test Case 5', 'Test Case 5', -1);
  $insertItem_0(testCases, 'Test Case 6', 'Test Case 6', -1);
  $insertItem_0(testCases, 'Test Case 7', 'Test Case 7', -1);
  $insertItem_0(testCases, 'Test Case 8', 'Test Case 8', -1);
  $insertItem_0(testCases, 'Test Case 9', 'Test Case 9', -1);
  $insertItem_0(testCases, 'Test Case 10', 'Test Case 10', -1);
  $setSize(testCases.element, 1);
  $setPropertyImpl(testCases.element.style, 'width', '300px');
  $setTextOrHtml(passwordEnable.directionalTextHelper, 'Password Enabled', false);
  $setPropertyImpl(passwordEnable.element.style, 'height', '20px');
  $setInnerText(changePasswordButton.element, 'Change Password');
  $setPropertyImpl(changePasswordButton.element.style, 'height', '35px');
  $setPropertyImpl(changePasswordButton.element.style, 'width', '130px');
  $add_3(settingsPassPanel, passwordEnable);
  $add_3(settingsPassPanel, changePasswordButton);
  $setPropertyInt(settingsPassPanel.table, 'cellSpacing', 10);
  $setPropertyImpl(changePassword.element.style, 'height', '20px');
  $setPropertyInt(settingsPassVertPanel.table, 'cellSpacing', 5);
  $add_3(currentPassword, cPassword);
  $add_3(currentPassword, cPass);
  $setPropertyInt(currentPassword.table, 'cellSpacing', 10);
  $add_3(newPassword, nPassword);
  $add_3(newPassword, nPass);
  $setPropertyInt(newPassword.table, 'cellSpacing', 10);
  $add_3(confirmPassword, coPassword);
  $add_3(confirmPassword, coPass);
  $setPropertyInt(confirmPassword.table, 'cellSpacing', 10);
  $add_6(settingsPassVertPanel, changePassword);
  $add_6(settingsPassVertPanel, currentPassword);
  $add_6(settingsPassVertPanel, newPassword);
  $add_6(settingsPassVertPanel, confirmPassword);
  $setPropertyInt(settingsPassVertPanel.table, 'cellSpacing', 5);
  $setPropertyString(settingsPassVertPanel.table, 'border', '2');
  $add_6(settingsVertPanel, testCases);
  $add_6(settingsVertPanel, settingsUserPanel);
  $add_6(settingsVertPanel, settingsPassPanel);
  $add_6(settingsVertPanel, settingsPassVertPanel);
  $setPropertyInt(settingsVertPanel.table, 'cellSpacing', 10);
  $setPropertyString(settingsVertPanel.table, 'border', '2');
  $insert_5(tabPanel, modulesDock, 'Modules', tabPanel.deckPanel.children_0.size_0);
  $insert_5(tabPanel, configDock, 'Configurations', tabPanel.deckPanel.children_0.size_0);
  $insert_5(tabPanel, settingsVertPanel, 'Settings', tabPanel.deckPanel.children_0.size_0);
  $insert_5(tabPanel, weatherPanel, 'Weather', tabPanel.deckPanel.children_0.size_0);
  $add_5(tabPanel, new HTML_0('Logout'));
  $add_4(get_0(), loginPanel);
}

function View$1(val$passwordEntry, val$tabPanel){
  this.val$passwordEntry2 = val$passwordEntry;
  this.val$tabPanel3 = val$tabPanel;
}

defineClass(126, 1, $intern_19, View$1);
_.onClick = function onClick_1(event_0){
  var closeButton, details, dialogBox, dialogContents, image;
  if ($equals($getPropertyString(this.val$passwordEntry2.element, 'value'), 'guest')) {
    $clear(get_0());
    $add_4(get_0(), this.val$tabPanel3);
  }
   else {
    dialogBox = new DialogBox;
    $setText(dialogBox.caption, 'Password Error');
    dialogContents = new VerticalPanel;
    $setPropertyInt(dialogContents.table, 'cellSpacing', 4);
    $setWidget(dialogBox.decPanel, dialogContents);
    $maybeUpdateSize(dialogBox);
    details = new HTML_0('You have entered an incorrect password.');
    $add_6(dialogContents, details);
    $setCellHorizontalAlignment(dialogContents, details, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
    image = new Image_1('images/passwordError');
    $add_6(dialogContents, image);
    $setCellHorizontalAlignment(dialogContents, image, ALIGN_CENTER);
    closeButton = new Button_1(new View$1$1(dialogBox));
    $add_6(dialogContents, closeButton);
    $setCellHorizontalAlignment(dialogContents, closeButton, ALIGN_RIGHT);
    $center(dialogBox);
    !dialogBox.resizeHandlerRegistration && (dialogBox.resizeHandlerRegistration = addResizeHandler(new DialogBox$1(dialogBox)));
    $show(dialogBox);
  }
}
;
var Lmhcs_client_View$1_2_classLit = createForClass('mhcs.client', 'View/1', 126);
function View$1$1(val$dialogBox){
  this.val$dialogBox2 = val$dialogBox;
}

defineClass(127, 1, $intern_19, View$1$1);
_.onClick = function onClick_2(event_0){
  $hide_0(this.val$dialogBox2, false);
}
;
var Lmhcs_client_View$1$1_2_classLit = createForClass('mhcs.client', 'View/1/1', 127);
function $onChange(this$static){
  var conditionStrings, m, m$iterator, module, moduleString;
  moduleString = $getItemText(this$static.val$modulesListBox2, this$static.val$modulesListBox2.element.selectedIndex);
  moduleString = __substr(moduleString, 8, moduleString.length - 8);
  module = null;
  for (m$iterator = new AbstractList$IteratorImpl(getModuleList()); m$iterator.i < m$iterator.this$01_0.size_1();) {
    m = (checkCriticalElement(m$iterator.i < m$iterator.this$01_0.size_1()) , dynamicCast(m$iterator.this$01_0.get_0(m$iterator.last = m$iterator.i++), 26));
    m.id_0 == __parseAndValidateInt(moduleString) && (module = m);
  }
  if (module) {
    $setValue_1(this$static.val$modulesEastId3, '' + module.id_0);
    $setSelectedIndex_0(this$static.val$modulesEastType4, $indexOf_0(new Arrays$ArrayList(($clinit_Module() , moduleStrings_0)), $toUserString_0(module.type_0)));
    conditionStrings = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 4, ['Usable', 'Damaged', 'Unusable']);
    $setSelectedIndex_0(this$static.val$modulesEastCondition5, $indexOf_0(new Arrays$ArrayList(conditionStrings), $toUserString(module.status_0)));
    $setSelectedIndex_0(this$static.val$modulesEastOrientation6, module.orientation);
    $setValue_1(this$static.val$xTextBox7, '' + module.coordinates.x_0);
    $setValue_1(this$static.val$yTextBox8, '' + module.coordinates.y_0);
  }
}

function View$2(val$modulesListBox, val$modulesEastId, val$modulesEastType, val$modulesEastCondition, val$modulesEastOrientation, val$xTextBox, val$yTextBox){
  this.val$modulesListBox2 = val$modulesListBox;
  this.val$modulesEastId3 = val$modulesEastId;
  this.val$modulesEastType4 = val$modulesEastType;
  this.val$modulesEastCondition5 = val$modulesEastCondition;
  this.val$modulesEastOrientation6 = val$modulesEastOrientation;
  this.val$xTextBox7 = val$xTextBox;
  this.val$yTextBox8 = val$yTextBox;
}

defineClass(128, 1, {309:1, 28:1}, View$2);
var Lmhcs_client_View$2_2_classLit = createForClass('mhcs.client', 'View/2', 128);
function View$3(val$modulesListBox){
  this.val$modulesListBox2 = val$modulesListBox;
}

defineClass(129, 1, $intern_19, View$3);
_.onClick = function onClick_3(event_0){
  var moduleString;
  moduleString = $getItemText(this.val$modulesListBox2, this.val$modulesListBox2.element.selectedIndex);
  moduleString = __substr(moduleString, 8, moduleString.length - 8);
  removeModuleFromId(__parseAndValidateInt(moduleString));
  $removeItem_1(this.val$modulesListBox2, this.val$modulesListBox2.element.selectedIndex);
}
;
var Lmhcs_client_View$3_2_classLit = createForClass('mhcs.client', 'View/3', 129);
function View$4(val$modulesEastType, val$modulesEastId, val$xTextBox, val$yTextBox, val$modulesEastCondition, val$modulesEastOrientation, val$modulesListBox){
  this.val$modulesEastType2 = val$modulesEastType;
  this.val$modulesEastId3 = val$modulesEastId;
  this.val$xTextBox4 = val$xTextBox;
  this.val$yTextBox5 = val$yTextBox;
  this.val$modulesEastCondition6 = val$modulesEastCondition;
  this.val$modulesEastOrientation7 = val$modulesEastOrientation;
  this.val$modulesListBox8 = val$modulesListBox;
}

defineClass(130, 1, $intern_19, View$4);
_.onClick = function onClick_4(event_0){
  var coordinates, id_0, m, m$iterator, orientation, status_0, type_0;
  type_0 = getTypeFromUserString($getItemText(this.val$modulesEastType2, this.val$modulesEastType2.element.selectedIndex));
  id_0 = __parseAndValidateInt($getPropertyString(this.val$modulesEastId3.element, 'value'));
  coordinates = new Point(__parseAndValidateInt($getPropertyString(this.val$xTextBox4.element, 'value')), __parseAndValidateInt($getPropertyString(this.val$yTextBox5.element, 'value')));
  status_0 = getStatusFromUserString($getItemText(this.val$modulesEastCondition6, this.val$modulesEastCondition6.element.selectedIndex));
  orientation = this.val$modulesEastOrientation7.element.selectedIndex;
  saveModule(new Module_1(type_0, id_0, coordinates, status_0, orientation, false));
  $selectClear(this.val$modulesListBox8.element);
  for (m$iterator = new AbstractList$IteratorImpl(getModuleList()); m$iterator.i < m$iterator.this$01_0.size_1();) {
    m = (checkCriticalElement(m$iterator.i < m$iterator.this$01_0.size_1()) , dynamicCast(m$iterator.this$01_0.get_0(m$iterator.last = m$iterator.i++), 26));
    $insertItem(this.val$modulesListBox8, 'Module #' + m.id_0);
  }
}
;
var Lmhcs_client_View$4_2_classLit = createForClass('mhcs.client', 'View/4', 130);
function $loadConfigurations(this$static){
  var i, newConfig;
  if ($getItem(this$static.stockStore, 'intConfigCount') != null) {
    for (i = 0; i <= __parseAndValidateInt($getItem(this$static.stockStore, 'intConfigCount')); i++) {
      newConfig = new Configuration($getItem(this$static.stockStore, 'C' + ('' + i)));
      $add_9(this$static.configurationList, newConfig);
    }
  }
}

function $loadModules(this$static){
  var i, newModule;
  if ($getItem(this$static.stockStore, 'intModCount') != null) {
    for (i = 0; i < __parseAndValidateInt($getItem(this$static.stockStore, 'intModCount')); i++) {
      newModule = new Module_0($getItem(this$static.stockStore, '' + i));
      $add_9(this$static.moduleList, newModule);
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

defineClass(221, 1, {}, Load);
_.stockStore = null;
var Lmhcs_storage_Load_2_classLit = createForClass('mhcs.storage', 'Load', 221);
function $clinit_Model(){
  $clinit_Model = emptyMethod;
  toLoad = new Load;
  toSave_0 = new Save;
  moduleList = toLoad.moduleList;
}

function findListNumber(module){
  var compare, i;
  for (i = 0; i < moduleList.array.length; i++) {
    compare = dynamicCast($get_2(moduleList, i), 26);
    if (module.id_0 == compare.id_0) {
      return i;
    }
  }
  return -1;
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
    m = (checkCriticalElement(m$iterator.i < m$iterator.this$01_0.size_1()) , dynamicCast(m$iterator.this$01_0.get_0(m$iterator.last = m$iterator.i++), 26));
    if (m.id_0 == toSave.id_0) {
      moduleList.remove_3(findListNumber(toSave));
      $removeAllModules(toSave_0);
      $saveModules(toSave_0, moduleList);
      $add_9(moduleList, toSave);
      $saveModules(toSave_0, moduleList);
      return;
    }
  }
  $add_9(moduleList, toSave);
  $saveModules(toSave_0, moduleList);
}

var moduleList, toLoad, toSave_0;
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
    $setItem(this$static.stockStore, '' + i, $toString_2((checkElementIndex(i, toSave.array.length) , dynamicCast(toSave.array[i], 26))));
  }
  $setItem(this$static.stockStore, 'intModCount', '' + toSave.array.length);
}

function Save(){
  this.stockStore = (!localStorage_0 && ($clinit_Storage$StorageSupportDetector() , localStorageSupported) && (localStorage_0 = new Storage_0) , localStorage_0);
  $getItem(this.stockStore, 'intModCount') != null && __parseAndValidateInt($getItem(this.stockStore, 'intModCount'));
}

defineClass(222, 1, {}, Save);
_.stockStore = null;
var Lmhcs_storage_Save_2_classLit = createForClass('mhcs.storage', 'Save', 222);
var I_classLit = createForPrimitive('int', 'I'), Lcom_google_gwt_lang_CollapsedPropertyHolder_2_classLit = createForClass('com.google.gwt.lang', 'CollapsedPropertyHolder', 279), Lcom_google_gwt_lang_JavaClassHierarchySetupUtil_2_classLit = createForClass('com.google.gwt.lang', 'JavaClassHierarchySetupUtil', 281), Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForClass('com.google.gwt.lang', 'LongLibBase/LongEmul', null), Lcom_google_gwt_lang_ModuleUtils_2_classLit = createForClass('com.google.gwt.lang', 'ModuleUtils', 284), Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
var $entry = registerEntry();
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'ie8']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=mhcs_project-0.js

