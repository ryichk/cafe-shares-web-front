export type AmplifyDependentResourcesAttributes = {
  auth: {
    cafeshares: {
      IdentityPoolId: 'string';
      IdentityPoolName: 'string';
      UserPoolId: 'string';
      UserPoolArn: 'string';
      UserPoolName: 'string';
      AppClientIDWeb: 'string';
      AppClientID: 'string';
      CreatedSNSRole: 'string';
    };
  };
  function: {
    AdminQueriesbe6deefd: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
    };
  };
  api: {
    AdminQueries: {
      RootUrl: 'string';
      ApiName: 'string';
      ApiId: 'string';
    };
    CafeShares: {
      GraphQLAPIKeyOutput: 'string';
      GraphQLAPIIdOutput: 'string';
      GraphQLAPIEndpointOutput: 'string';
    };
  };
  storage: {
    cafesharesimagestorage: {
      BucketName: 'string';
      Region: 'string';
    };
  };
};
