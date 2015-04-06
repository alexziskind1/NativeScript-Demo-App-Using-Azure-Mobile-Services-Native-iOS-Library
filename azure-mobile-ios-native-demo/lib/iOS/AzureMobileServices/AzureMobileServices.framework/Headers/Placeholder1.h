//
//  Placeholder1.h
//  AzureMobileServices
//
//  Created by Alex on 3/29/15.
//  Copyright (c) 2015 Alex. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface Placeholder1 : NSObject
@property (nonatomic,readonly) NSString *originalString;

- (id)initWithString:(NSString *)string;
- (NSString *)getOrigString;
- (NSString *)getStringWithAppend:(NSString *)string;
@end
